import { useFormContext } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Stack, Autocomplete } from "@mui/material";
import RHFAutocomplete from "../../components/RHFAutocomplete";
import type { UserSchemaType } from "../../types/schema";
import { useLanguages, useStates } from "../services/queries";
import RHFToggleButtonGroup from "../../components/RHFToggleButtonGroup";

function Users() {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserSchemaType>();
  const statesQuery = useStates();
  const languagesQuery = useLanguages();
  return (
    <>
      <Stack gap={2} sx={{ width: "300px" }}>
        <TextField
          {...register("name")}
          label="Name"
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextField
          {...register("email")}
          label="Email"
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <RHFAutocomplete<UserSchemaType>
          name="state"
          label="States"
          options={statesQuery.data}
        />
        <RHFToggleButtonGroup<UserSchemaType>
          name="languagesSpoken"
          options={languagesQuery.data}
        />
      </Stack>
    </>
  );
}

export default Users;
