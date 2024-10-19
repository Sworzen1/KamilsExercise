import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

import { ThemedText } from "@/components/ThemedText";
import { useScreenOptions } from "@/hooks/useScreenOptions";

import { TTask } from ".";

export default function TaskDetailsScreen() {
  useScreenOptions({ title: "Details" });
  const { title, description, status, createdAt } =
    useLocalSearchParams<TTask>();

  return (
    <ScrollView style={styles.container}>
      <ThemedText type="subtitle">Title:</ThemedText>
      <ThemedText type="default">{title}</ThemedText>
      <ThemedText style={styles.spacer} type="subtitle">
        Description:
      </ThemedText>
      <ThemedText type="default">{description}</ThemedText>
      <ThemedText style={styles.spacer} type="subtitle">
        Status:
      </ThemedText>
      <ThemedText type="default">{status}</ThemedText>
      <ThemedText style={styles.spacer} type="subtitle">
        Created At:
      </ThemedText>
      <ThemedText type="default">
        {new Date(createdAt).toLocaleString()}
      </ThemedText>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  spacer: { marginTop: 12 },
});
