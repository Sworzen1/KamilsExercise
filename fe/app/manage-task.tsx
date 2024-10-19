import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Button } from "@/components/Button";
import { ControlledInput } from "@/components/ControlledInput";
import { useGetTask } from "@/hooks/query/useGetTask";
import { useManageTasksForm } from "@/hooks/useManageTasksForm";
import { useScreenOptions } from "@/hooks/useScreenOptions";
import { Spacer } from "@/components/Spacer";
import { ControlledSelect } from "@/components/ControlledSelect";

export default function ManageTaskScreen() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const isEdit = !!id;
  useScreenOptions({ title: isEdit ? "Edit task" : "Create task" });

  const { control, errors, reset, submit } = useManageTasksForm(!!isEdit, id);
  const { task } = useGetTask(id);

  useEffect(() => reset(task), [task]);

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <View style={styles.form}>
        <ControlledInput {...{ control, errors }} name="title" label="Title" />
        <Spacer y={3} />
        <ControlledInput
          {...{ control, errors }}
          name="description"
          label="Description"
        />
        <Spacer y={3} />
        <ControlledSelect
          {...{ control, errors }}
          name="status"
          label="Status"
          options={[
            { value: "todo", label: "To do" },
            { value: "inProgress", label: "In progress" },
            { value: "done", label: "Done" },
          ]}
        />
      </View>
      <Button
        label={isEdit ? "Save" : "Create"}
        onPress={submit}
        style={styles.button}
      />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  button: { marginBottom: 12 },
  container: {
    flexGrow: 1,
    padding: 16,
  },
  errorMessage: { color: "red" },
  form: { flex: 1 },
});
