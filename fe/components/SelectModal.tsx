import { Pressable, ScrollView, StyleSheet } from "react-native";

import { Modal, ModalProps } from "./Modal";
import type { SelectProps } from "./Select";
import { ThemedText } from "./ThemedText";

type SelectModalProps = ModalProps & SelectProps;

export const SelectModal = ({
  isOpen,
  onClose,
  selectedOption,
  options,
  onChange,
}: SelectModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ScrollView bounces={false}>
        {options.map((option) => (
          <Pressable
            key={option.value}
            onPress={() => {
              onChange(option.value);
              onClose();
            }}
            style={[
              styles.option,
              {
                backgroundColor:
                  selectedOption === option.value ? "#00000033" : undefined,
              },
            ]}
          >
            <ThemedText type="subtitle">{option.label}</ThemedText>
          </Pressable>
        ))}
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  option: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
});
