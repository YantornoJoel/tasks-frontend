import { ListTask } from "@/components";
import { useTasksStore } from "@/store";
import { useEffect } from "react";

export const TaskListPage = () => {
  const getTasks = useTasksStore((state) => state.getTasks);
  const taskDeleted = useTasksStore((state) => state.taskDeleted);
  const taskSearched = useTasksStore((state) => state.taskSearched);

  useEffect(() => {
    getTasks();
  }, [taskDeleted, taskSearched]);

  return <ListTask />;
};
