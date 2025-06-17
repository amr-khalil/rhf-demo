import {
  Controller,
  useFormContext,
  type FieldValues,
  type Path,
} from "react-hook-form";
import { TextField, type TextFieldProps } from "@mui/material";

type Props<T extends FieldValues> = {
  name: Path<T>;
} & Pick<TextFieldProps, "label">;

function RHFTexfField<T extends FieldValues>({ name, ...props }: Props<T>) {
  const { control } = useFormContext<T>();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          {...props}
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  );
}

export default RHFTexfField;
