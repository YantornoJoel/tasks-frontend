import { useMemo } from "react";

import { CardTask } from ".";
import { useTasksStore } from "@/store";
import { Link } from "react-router-dom";

import AddBoxIcon from "@mui/icons-material/AddBox";

interface Props {
  title: string;
  state: string;
}

export const SectionTask: React.FC<Props> = ({ title, state }) => {
  const taskList = useTasksStore((state) => state.tasks);

  const filteredTasks = useMemo(
    () => taskList.filter((task) => task.state === state),
    [taskList, state]
  );

  return (
    <div className="w-[300px] mx-auto">
      <h2 className="text-lg font-medium mb-4 text-center">{title}</h2>

      {filteredTasks.length === 0 ? (
        <div className="text-center max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link to="/new">
            <AddBoxIcon />
          </Link>
        </div>
      ) : (
        <>
          {filteredTasks.map((task) => (
            <CardTask key={task._id} task={task} />
          ))}
        </>
      )}
    </div>
  );
};
