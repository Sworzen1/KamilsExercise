import { ThemedText } from "@/components/ThemedText";
import { Controller, get } from "react-hook-form";
import { StyleSheet } from "react-native";
import { Select, SelectProps } from "./Select";

type ControlledSelectProps = SelectProps & {
  errors: any;
  control: any;
  label: string;
  name: string;
};

export const ControlledSelect = ({
  control,
  errors,
  label,
  name,
  ...rest
}: ControlledSelectProps) => {
  const errorMessage = get(errors, name)?.message;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
          <ThemedText>{label}</ThemedText>
          <Select
            {...rest}
            selectedOption={field.value}
            onChange={field.onChange}
            placeholder={`Enter ${name}`}
          />
          {errorMessage && (
            <ThemedText style={styles.errorMessage}>{errorMessage}</ThemedText>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  errorMessage: { color: "red" },
});
