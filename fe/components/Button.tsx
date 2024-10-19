import { StyleSheet, TouchableOpacity } from "react-native";

import { ThemedText } from "./ThemedText";

export const Button = ({ label, style, ...rest }: any) => {
  return (
    <TouchableOpacity style={[styles.button, style]} {...rest}>
      <ThemedText style={styles.buttonText} type="subtitle">
        {label}
      </ThemedText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#6200ee",
    borderRadius: 5,
    padding: 12,
    width: "100%",
  },
  buttonText: {
    color: "white",
  },
});
