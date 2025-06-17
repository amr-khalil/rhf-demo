import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
import { Button, Container, Stack, Typography } from "@mui/material";
import RHFAutocomplete from "../../components/RHFAutocomplete";
import { defaultValues, type UserSchemaType } from "../../types/schema";
import {
  useGenders,
  useLanguages,
  useSkills,
  useStates,
} from "../services/queries";
import RHFToggleButtonGroup from "../../components/RHFToggleButtonGroup";
import RHFRadioGroup from "../../components/RHFRadioGroup";
import RHFCheckbox from "../../components/RHFCheckbox";
import RHFDateTimePicker from "../../components/RHFDateTimePicker";
import RHFDateRangePicker from "../../components/RHFDateRangePicker";
import RHFSlider from "../../components/RHFSlider";
import RHFSwitch from "../../components/RHFSwitch";
import RHFTexfField from "../../components/RHFTexfField";
import { Fragment, useEffect } from "react";

function Users() {
  const statesQuery = useStates();
  const languagesQuery = useLanguages();
  const genderQuery = useGenders();
  const skillsQuery = useSkills();

  const { watch, control, unregister, reset } =
    useFormContext<UserSchemaType>();

  useEffect(() => {
    const sub = watch((value) => {
      console.log("Form values changed:", value);
    });
    return () => sub.unsubscribe();
  }, [watch]);

  const isTeacher = useWatch({ control, name: "isTeacher" });
  const { append, remove, replace, fields } = useFieldArray({
    control,
    name: "students",
  });

  useEffect(() => {
    if (!isTeacher) {
      replace([]);
    }
    unregister("students");
  }, [isTeacher, replace, unregister]);

  const handleReset = () => {
    reset(defaultValues);
  };

  return (
    <Container maxWidth="sm" component={"form"}>
      <Stack gap={2}>
        <RHFTexfField<UserSchemaType> name="name" label="Name" />
        <RHFTexfField<UserSchemaType> name="email" label="Email" />
        <RHFAutocomplete<UserSchemaType>
          name="state"
          label="States"
          options={statesQuery.data}
        />
        <RHFToggleButtonGroup<UserSchemaType>
          name="languagesSpoken"
          options={languagesQuery.data}
        />
        <RHFRadioGroup<UserSchemaType>
          name="gender"
          options={genderQuery.data}
          label="Gender"
        />
        <RHFCheckbox<UserSchemaType>
          name="skills"
          options={skillsQuery.data}
          label="Skills"
        />
        <RHFDateTimePicker<UserSchemaType>
          name="registrationDateAndTime"
          label="Registration Date and Time"
        />
        <Typography>Former Employment Period:</Typography>
        <RHFDateRangePicker<UserSchemaType> name="formerEmploymentPeriod" />
        <RHFSlider<UserSchemaType> name="salaryRange" label="Salary Range" />
        <RHFSwitch<UserSchemaType>
          name="isTeacher"
          label="Are you a teacher?"
        />
        {isTeacher && (
          <Button onClick={() => append({ name: "" })} type="button">
            Add New Student
          </Button>
        )}
        {fields.map((field, index) => (
          <Fragment key={field.id}>
            <RHFTexfField<UserSchemaType>
              name={`students.${index}.name`}
              label="Name"
              key={field.id}
            />

            <Button color="error" onClick={() => remove(index)} type="button">
              Remove
            </Button>
          </Fragment>
        ))}
        <Stack direction="row" justifyContent="space-between">
          <Button type="reset" variant="outlined" onClick={handleReset}>
            Reset
          </Button>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}

export default Users;
