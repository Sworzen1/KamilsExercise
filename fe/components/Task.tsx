import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Checkbox } from "./Checkbox";

type TaskProps = {
  onCheckboxPress: () => void;
  onDeletePress: () => void;
  onEditPress: () => void;
  onTaskPress: () => void;
  status: string;
  title: string;
};

export const Task = ({
  onCheckboxPress,
  onDeletePress,
  onEditPress,
  onTaskPress,
  status,
  title,
}: TaskProps) => {
  const isDone = status === "done";

  return (
    <TouchableOpacity
      onPress={onTaskPress}
      style={[
        styles.taskContainer,
        {
          borderColor:
            status === "done"
              ? "green"
              : status === "inProgress"
                ? "orange"
                : "lightblue",
        },
      ]}
    >
      <View style={styles.leftSide}>
        <Checkbox checked={isDone} onChange={onCheckboxPress} />
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
          {title}
        </Text>
      </View>
      <View style={styles.actions}>
        <MaterialCommunityIcons
          name="pencil-outline"
          size={24}
          color="black"
          onPress={onEditPress}
        />
        <AntDesign
          name="delete"
          size={24}
          color="black"
          onPress={onDeletePress}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    alignItems: "center",
    backgroundColor: "#a9a9a9",
    borderRadius: 8,
    borderWidth: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  title: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 18,
  },
  leftSide: { gap: 8, flexDirection: "row", flex: 3 },
  actions: {
    gap: 16,
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end",
  },
});
