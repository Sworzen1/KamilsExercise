import { AXIOS_INSTANCE } from "@/api/axiosInstance";
import { handleFormError } from "@/utils/handleFormError";
import { showSuccessToast } from "@/utils/showToast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export type TCreateTask = {
  title: string;
  description: string;
  status: string;
};

const createTaskRequest = async (newTask: TCreateTask) => {
  const { data } = await AXIOS_INSTANCE.post("/tasks", newTask);
  return data;
};

export const useCreateTask = () => {
  const queryClient = useQueryClient();

  const { mutate: createTask, isLoading: isCreateTaskLoading } = useMutation({
    mutationFn: createTaskRequest,
    onSuccess: () => {
      showSuccessToast({ description: "Task has been created" });
      queryClient.invalidateQueries(["todos"]);
    },
  });

  return {
    createTask,
    isCreateTaskLoading,
  };
};
