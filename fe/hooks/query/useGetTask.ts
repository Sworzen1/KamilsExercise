import { AXIOS_INSTANCE } from "@/api/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const getTaskRequest = async (taskId: string) => {
  const { data } = await AXIOS_INSTANCE.get(`/tasks/${taskId}`);
  return data;
};

export const useGetTask = (taskId?: string) => {
  const {
    data: task,
    isLoading,
    refetch,
    isRefetching,
  } = useQuery({
    queryKey: ["task", taskId],
    queryFn: () => getTaskRequest(taskId ?? ""),
    enabled: !!taskId,
  });

  return { task, isLoading, refetch, isRefetching };
};
