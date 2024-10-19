import { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

import { ThemedText } from "./ThemedText";

import { SelectModal } from "./SelectModal";
import { useThemeColor } from "@/hooks/useThemeColor";

export type SelectProps = {
  options: { value: string; label: string }[];
  onChange?: (newValue: string) => void;
  placeholder?: string;
  selectedOption?: string;
};

export const Select = ({
  options,
  onChange,
  placeholder,
  selectedOption,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const label = options.find(
    (option) => option.value === selectedOption,
  )?.label;
  const placeholderColor = useThemeColor({}, "placeholder");
  const textColor = useThemeColor({}, "text");
  const iconColor = useThemeColor({}, "icon");

  return (
    <>
      <Pressable onPress={() => setIsOpen(true)} style={styles.container}>
        <ThemedText style={{ color: label ? textColor : placeholderColor }}>
          {label ?? placeholder}
        </ThemedText>
        <Entypo name="chevron-down" size={24} color={iconColor} />
      </Pressable>
      <SelectModal
        isOpen={isOpen}
        onChange={onChange}
        onClose={() => setIsOpen(false)}
        options={options}
        selectedOption={selectedOption}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    borderColor: "gray",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
  },
  option: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
});
