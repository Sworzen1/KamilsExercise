import { AXIOS_INSTANCE } from "@/api/axiosInstance";
import { showSuccessToast } from "@/utils/showToast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const deleteTaskRequest = async (taskId: string) => {
  await AXIOS_INSTANCE.delete(`/tasks/${taskId}`);
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteTask, isLoading } = useMutation({
    mutationFn: deleteTaskRequest,
    onSuccess: () => {
      showSuccessToast({ description: "Task has been deleted" });
      queryClient.invalidateQueries(["todos"]);
    },
  });

  return {
    deleteTask,
    isLoading,
  };
};
