import { useForm } from "react-hook-form";
import { TCreateTask, useCreateTask } from "./mutation/useCreateTask";
import { useUpdateTask } from "./mutation/useUpdateTask";
import { handleFormError } from "@/utils/handleFormError";

type TTaskValues = {
  title: string;
  description: string;
  status: string;
};

export const useManageTasksForm = (isEdit?: boolean, taskId?: string) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setError: setFormError,
  } = useForm<TTaskValues>({
    mode: "onChange",
  });

  const { createTask, isCreateTaskLoading } = useCreateTask();
  const { updateTask, isUpdateTaskLoading } = useUpdateTask(true);

  const onSubmit = (data: TTaskValues) => {
    isEdit
      ? updateTask(
          { taskId: taskId ?? "", updatedData: data },
          {
            onError: (e) => {
              handleFormError<keyof TCreateTask>(
                e as unknown as keyof TCreateTask,
                ({ field, description }) => {
                  setFormError(field, { message: description });
                },
              );
            },
          },
        )
      : createTask(data, {
          onError: (e) => {
            handleFormError<keyof TCreateTask>(
              e as unknown as keyof TCreateTask,
              ({ field, description }) => {
                setFormError(field, { message: description });
              },
            );
          },
        });
  };

  return {
    control,
    errors,
    isLoading: isCreateTaskLoading || isUpdateTaskLoading,
    reset,
    submit: handleSubmit(onSubmit),
  };
};
