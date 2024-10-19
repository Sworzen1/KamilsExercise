import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import React from "react";
import { View, StyleSheet } from "react-native";

import { ThemedText } from "./ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";

export const ListEmptyComponent = () => {
  const iconColor = useThemeColor({}, "icon");

  return (
    <View style={styles.container}>
      <FontAwesome5 name="inbox" size={100} color={iconColor} />
      <ThemedText style={{ marginBottom: 16, marginTop: 16 }} type="title">
        List is empty
      </ThemedText>
      <ThemedText type="subtitle">You dont have any tasks</ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
