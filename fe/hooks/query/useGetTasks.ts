import { AXIOS_INSTANCE } from "@/api/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const getTasksRequest = async () => {
  const { data } = await AXIOS_INSTANCE.get("/tasks");
  return data;
};

export const useGetTasks = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: getTasksRequest,
  });

  return { data, isLoading };
};
