import { useEffect } from "react";

import { SectionTask } from "@/components";
import { taskSections } from "@/constants";
import { useTasksStore } from "@/store";

export const TaskStatePage: React.FC = () => {
  const getTasks = useTasksStore((state) => state.getTasks);
  const taskUpdated = useTasksStore((state) => state.taskUpdated);

  useEffect(() => {
    getTasks();
  }, [taskUpdated]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {taskSections.map(({ state, title }) => (
        <SectionTask key={title} title={title} state={state} />
      ))}
    </div>
  );
};
