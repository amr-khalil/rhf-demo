import { useFormContext } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Stack, Typography } from "@mui/material";
import RHFAutocomplete from "../../components/RHFAutocomplete";
import type { UserSchemaType } from "../../types/schema";
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

function Users() {
  const statesQuery = useStates();
  const languagesQuery = useLanguages();
  const genderQuery = useGenders();
  const skillsQuery = useSkills();
  return (
    <>
      <Stack gap={2} sx={{ width: "300px" }}>
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
      </Stack>
    </>
  );
}

export default Users;
