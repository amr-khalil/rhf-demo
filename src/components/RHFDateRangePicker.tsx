import {
  Controller,
  useFormContext,
  type FieldValues,
  type Path,
} from "react-hook-form";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

type Props<T extends FieldValues> = {
  name: Path<T>;
};

function RHFDateRangePicker<T extends FieldValues>({ name }: Props<T>) {
  const { control } = useFormContext<T>();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, ...restField } }) => (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateRangePicker
            value={Array.isArray(value) ? value : [null, null]}
            {...restField}
          />
        </LocalizationProvider>
      )}
    ></Controller>
  );
}

export default RHFDateRangePicker;
