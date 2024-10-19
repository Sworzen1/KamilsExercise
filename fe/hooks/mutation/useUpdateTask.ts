import { useMutation, useQueryClient } from "@tanstack/react-query";
import { router } from "expo-router";

import { AXIOS_INSTANCE } from "@/api/axiosInstance";
import { showSuccessToast } from "@/utils/showToast";

import { TCreateTask } from "./useCreateTask";

const { back } = router;

const updateTaskRequest = async ({
  taskId,
  updatedData,
}: {
  taskId: string;
  updatedData: TCreateTask;
}) => {
  await AXIOS_INSTANCE.patch(`/tasks/${taskId}`, updatedData);
};

export const useUpdateTask = (isGoBack?: boolean) => {
  const queryClient = useQueryClient();

  const { mutate: updateTask, isLoading: isUpdateTaskLoading } = useMutation({
    mutationFn: updateTaskRequest,
    onSuccess: () => {
      showSuccessToast({ description: "Task has been updated" });
      queryClient.invalidateQueries(["todos"]);
      isGoBack && back();
    },
  });

  return {
    updateTask,
    isUpdateTaskLoading,
  };
};
