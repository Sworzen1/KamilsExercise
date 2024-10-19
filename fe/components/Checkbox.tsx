import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Pressable, View, StyleSheet } from "react-native";

export type CheckboxProps = {
  checked?: boolean;
  disabled?: boolean;
  onChange?: () => void;
};

export const Checkbox = ({
  checked = false,
  disabled = false,
  onChange,
}: CheckboxProps) => {
  return (
    <Pressable disabled={disabled} onPress={onChange} style={styles.container}>
      <View
        style={[
          styles.box,
          {
            backgroundColor: checked ? "#6200ee" : "white",
          },
        ]}
      >
        {checked && <FontAwesome5 name="check" size={16} color="white" />}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  box: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 1,
    marginRight: 8,
    borderRadius: 5,
    height: 24,
    width: 24,
  },
  container: {
    alignItems: "center",
    flexDirection: "row",
  },
  text: { flex: 1 },
});
