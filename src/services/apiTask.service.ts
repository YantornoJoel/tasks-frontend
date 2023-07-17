import { AxiosResponse } from "axios";
import { axiosInstanceTasks } from "@/services";
import { ApiTask, Task, TaskOption, TaskOrder, TaskState } from "@/models";
import { BASE_URL } from "@/constants";

/**
 * Obtiene el listado de las imágenes
 * @returns Una promesa que se resuelve en un array de objetos de tipo Task
 */
export const getTasksService = async (): Promise<Task[]> => {
  const { data }: AxiosResponse<ApiTask> = await axiosInstanceTasks.get(
    BASE_URL
  );
  const tasks = data.data;
  return tasks;
};

/**
 * Obtiene el detalle de una imágen según un ID
 * @param id - El ID utilizado para filtrar la tarea.
 * @param state - De tipo TaskState, el estado elegido por el usuario para actualizar la tarea.
 * @returns Una promesa que se devuelve un boolean
 */
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

/**
 * Obtiene el detalle de una tarea según un ID
 * @param id - El ID utilizado para filtrar la tarea.
 * @param state - De tipo TaskState, el estado elegido por el usuario para actualizar la tarea.
 * @returns Una promesa que se devuelve un boolean
 */
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

/**
 * Obtiene el detalle de una imágen según un ID
 * @param id - El ID utilizado para eliminar la tarea.
 * @returns Una promesa que se devuelve un boolean
 */
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
