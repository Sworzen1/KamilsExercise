import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Controller, get } from "react-hook-form";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

type ControlledInputProps = TextInputProps & {
  errors: any;
  control: any;
  label: string;
  name: string;
};

export const ControlledInput = ({
  control,
  errors,
  label,
  name,
  style,
  ...rest
}: ControlledInputProps) => {
  const errorMessage = get(errors, name)?.message;
  const placeholderColor = useThemeColor({}, "placeholder");
  const textColor = useThemeColor({}, "text");

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
          <ThemedText>{label}</ThemedText>
          <TextInput
            {...rest}
            autoCapitalize="none"
            onChangeText={field.onChange}
            placeholderTextColor={placeholderColor}
            placeholder={`Enter ${name}`}
            style={[styles.input, { color: textColor }, style]}
            value={field.value}
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
  input: {
    borderColor: "gray",
    borderRadius: 5,
    borderWidth: 1,
    height: 40,
    paddingHorizontal: 10,
    width: "100%",
  },
});
