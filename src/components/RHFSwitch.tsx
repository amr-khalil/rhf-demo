import {
  Controller,
  useFormContext,
  type FieldValues,
  type Path,
} from "react-hook-form";
import { FormControlLabel, Switch } from "@mui/material";

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
};

function RHFSwitch<T extends FieldValues>({ name, label }: Props<T>) {
  const { control } = useFormContext<T>();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormControlLabel
          control={<Switch {...field} checked={field.value} />}
          label={label}
        />
      )}
    />
  );
}

export default RHFSwitch;
