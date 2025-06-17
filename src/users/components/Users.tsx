import { useFormContext } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Stack, Autocomplete } from "@mui/material";
import RHFAutocomplete from "../../components/RHFAutocomplete";
import type { UserSchemaType } from "../types/schema";

function Users() {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserSchemaType>();
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
          options={[
            { id: "1", label: "Texas" },
            { id: "2", label: "San Fransisco" },
          ]}
        />
      </Stack>
    </>
  );
}

export default Users;
