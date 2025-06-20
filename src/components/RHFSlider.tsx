import {
  Controller,
  useFormContext,
  type FieldValues,
  type Path,
} from "react-hook-form";
import { Slider, Typography } from "@mui/material";

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
};

function RHFSlider<T extends FieldValues>({ name, label }: Props<T>) {
  const { control } = useFormContext<T>();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <>
          <Typography>{label}</Typography>
          <Slider {...field} valueLabelDisplay="auto" />
        </>
      )}
    />
  );
}

export default RHFSlider;
