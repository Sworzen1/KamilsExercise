import { router } from "expo-router";
import { useCallback } from "react";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";

import { FAB } from "@/components/FAB";
import { Task } from "@/components/Task";
import { Spacer } from "@/components/Spacer";
import { ListEmptyComponent } from "@/components/ListEmptyComponent";
import { useScreenOptions } from "@/hooks/useScreenOptions";
import { useGetTasks } from "@/hooks/query/useGetTasks";
import { useDeleteTask } from "@/hooks/mutation/useDeleteTask";
import { TCreateTask } from "@/hooks/mutation/useCreateTask";
import { useUpdateTask } from "@/hooks/mutation/useUpdateTask";

const keyExtractor = (item: any) => item.id.toString();
const ItemSeparatorComponent = () => <Spacer y={3} />;

export type TTask = TCreateTask & {
  createdAt: string;
  id: string;
};

const { push } = router;

const navigateToManageTask = (id?: string) =>
  push({ pathname: "/manage-task", params: { id } });

const navigateToDetails = (task: TTask) =>
  push({ pathname: "/task-details", params: { ...task } });

export default function TasksScreen() {
  useScreenOptions({ title: "ToDo List" });

  const { data, isLoading } = useGetTasks();
  const { deleteTask } = useDeleteTask();
  const { updateTask } = useUpdateTask();

  const renderItem = useCallback(
    ({ item }: { item: any }) => (
      <Task
        {...item}
        onCheckboxPress={() =>
          updateTask({
            taskId: item.id,
            updatedData: {
              ...item,
              status: item.status !== "done" ? "done" : "todo",
            },
          })
        }
        onDeletePress={() => deleteTask(item.id)}
        onEditPress={() => navigateToManageTask(item.id)}
        onTaskPress={() => navigateToDetails(item)}
      />
    ),
    [],
  );

  return (
    <>
      {isLoading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator color="black" size="large" />
        </View>
      ) : (
        <>
          <FlatList
            {...{
              data,
              keyExtractor,
              renderItem,
              ListEmptyComponent,
              ItemSeparatorComponent,
            }}
            contentContainerStyle={styles.container}
          />
          <FAB onPress={() => navigateToManageTask()} />
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 16 },
  loaderContainer: { alignItems: "center", flex: 1, justifyContent: "center" },
});
