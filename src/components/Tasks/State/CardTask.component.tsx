import { SwalAlert } from "@/helpers/swal";
import { TaskState, Task } from "@/models";
import { useTasksStore } from "@/store";

interface Props {
  task: Task;
}

export const CardTask: React.FC<Props> = ({ task }) => {
  const updateTask = useTasksStore((state) => state.updateTask);

  const handleMoveTask = (id: string, state: TaskState, name: string) => {
    updateTask(id, state);
    SwalAlert(`<i><b>${name}</b></i> fue actualizada correctamente`);
  };

  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {task.name}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {task.description.length > 250
          ? `${task.description.substring(0, 250)}...`
          : task.description}
      </p>

      <div className="mt-4">
        <button
          className={`bg-blue-500 text-white px-3 py-1 rounded mr-3 border hover:bg-blue-600 transition duration-500 ${
            task.state === "Por hacer" && "hidden"
          }`}
          onClick={() => handleMoveTask(task._id, "Por hacer", task.name)}
        >
          Por hacer
        </button>
        <button
          className={`bg-yellow-500 text-white px-3 py-1 rounded mr-3 border hover:bg-yellow-600 transition duration-500 ${
            task.state === "En progreso" && "hidden"
          }`}
          onClick={() => handleMoveTask(task._id, "En progreso", task.name)}
        >
          En progreso
        </button>
        <button
          className={`bg-green-500 text-white px-3 py-1 rounded mr-3 border hover:bg-green-600 transition duration-500 ${
            task.state === "Hecho" && "hidden"
          }`}
          onClick={() => handleMoveTask(task._id, "Hecho", task.name)}
        >
          Hecho
        </button>
      </div>
    </div>
  );
};
