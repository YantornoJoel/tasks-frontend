import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import {
  Task,
  TaskOption,
  TaskOrder,
  TaskState,
  TaskStoreState,
} from "@/models";
import {
  createTaskService,
  deleteTaskService,
  getTasksService,
  orderTasksService,
  searchTasksService,
  updateTaskService,
} from "@/services";
import confetti from "canvas-confetti";

export const useTasksStore = create<TaskStoreState>()(
  devtools(
    persist(
      (set) => ({
        tasks: [],
        taskCreated: false,
        taskUpdated: false,
        taskDeleted: false,
        taskSearched: true,
        taskOrdered: true,
        searchTasks: [],
        loading: true,

        getTasks: async () => {
          set({ loading: true });
          try {
            const tasks: Task[] = await getTasksService();
            set({ tasks, loading: false });
          } catch (error) {
            set({ loading: true });
            throw new Error(String(error));
          }
        },

        createTask: async (
          name: string,
          description: string,
          state: TaskState
        ) => {
          set({ loading: true });
          try {
            const creatingTask = await createTaskService(
              name,
              description,
              state
            );
            if (creatingTask) {
              confetti();
              set({ taskCreated: true, loading: false });
            }
          } catch (error) {
            set({ loading: true, taskCreated: false });
            throw new Error(String(error));
          }
        },

        updateTask: async (id: string, state: TaskState) => {
          set({ loading: true, taskUpdated: false });
          try {
            const updatingTask = await updateTaskService(id, state);
            set({ taskUpdated: !!updatingTask, loading: false });
          } catch (error) {
            set({ loading: true });
            throw new Error(String(error));
          }
        },

        deleteTask: async (id: string) => {
          set({ taskDeleted: false });
          try {
            await deleteTaskService(id);
            set({ taskDeleted: true });
          } catch (error) {
            set({ loading: true, taskDeleted: false });
            throw new Error(String(error));
          }
        },

        searchTask: async (param: string) => {
          set({ taskSearched: true });
          try {
            const tasks = await searchTasksService(param);
            if (!tasks) {
              set({ tasks: [], taskSearched: false });
            }
            set({ tasks, taskSearched: true });
          } catch (error) {
            set({ tasks: [] });
            throw new Error(String(error));
          }
        },

        orderTask: async (order: TaskOrder, option: TaskOption) => {
          set({ taskOrdered: true });
          try {
            const tasks = await orderTasksService(order, option);
            if (!tasks) {
              set({ tasks: [], taskOrdered: false });
            }
            set({ tasks, taskOrdered: true });
          } catch (error) {
            set({ tasks: [] });
            throw new Error(String(error));
          }
        },
      }),
      {
        name: "tasks",
      }
    )
  )
);

export default useTasksStore;
