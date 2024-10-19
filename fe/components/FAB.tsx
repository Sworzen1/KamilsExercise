import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

export const FAB = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.fab} onPress={onPress}>
      <MaterialIcons name="add" size={24} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    bottom: 32,
    right: 32,
    backgroundColor: "#6200ee",
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
  },
});
