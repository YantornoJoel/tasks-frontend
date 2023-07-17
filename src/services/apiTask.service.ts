import { AxiosResponse } from "axios";
import { axiosInstanceTasks } from "@/services";
import { ApiTask, Task, TaskOption, TaskOrder, TaskState } from "@/models";
import { BASE_URL } from "@/constants";

export const getTasksService = async (): Promise<Task[]> => {
  const { data }: AxiosResponse<ApiTask> = await axiosInstanceTasks.get(
    BASE_URL
  );
  const tasks = data.data;
  return tasks;
};

export const createTaskService = async (
  name: string,
  description: string,
  state: TaskState
): Promise<boolean> => {
  const { data }: AxiosResponse<ApiTask> = await axiosInstanceTasks.post(
    `${BASE_URL}/new`,
    { name, description, state }
  );
  const tasks = data.ok;
  return tasks;
};

export const updateTaskService = async (
  id: string,
  state: TaskState
): Promise<boolean> => {
  const { data }: AxiosResponse<ApiTask> = await axiosInstanceTasks.put(
    `${BASE_URL}/${id}`,
    { state }
  );
  return data.ok;
};

export const deleteTaskService = async (id: string): Promise<boolean> => {
  const { data }: AxiosResponse<ApiTask> = await axiosInstanceTasks.delete(
    `${BASE_URL}/${id}`
  );
  return data.ok;
};

export const searchTasksService = async (param: string): Promise<Task[]> => {
  try {
    const { data }: AxiosResponse<ApiTask> = await axiosInstanceTasks.get(
      `${BASE_URL}/search?param=${param}`
    );
    if (data.ok) {
      const tasks = data.data;
      return tasks;
    }
    return [];
  } catch (e) {
    return [];
  }
};

export const orderTasksService = async (
  order: TaskOrder,
  option: TaskOption
): Promise<Task[]> => {
  try {
    const { data }: AxiosResponse<ApiTask> = await axiosInstanceTasks.get(
      `${BASE_URL}/order?order=${order}&option=${option}`
    );
    if (data.ok) {
      const tasks = data.data;
      return tasks;
    }
    return [];
  } catch (e) {
    return [];
  }
};
