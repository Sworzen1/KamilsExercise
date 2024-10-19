import { Controller } from "react-hook-form";
import { Checkbox } from "./Checkbox";
import type { CheckboxProps } from "./Checkbox";

type ControlledCheckboxProps = CheckboxProps & {
  control: any;
  name: string;
};

export const ControlledCheckbox = ({
  control,
  name,
  disabled,
}: ControlledCheckboxProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <Checkbox
            checked={field.value}
            disabled={disabled}
            onChange={() => field.onChange(!field.value)}
          />
        );
      }}
    />
  );
};