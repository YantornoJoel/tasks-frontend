import { Link } from "react-router-dom";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useTasksStore } from "@/store";
import { TaskState } from "@/models";
import { namesColumn } from "@/constants";

export const TableDataTask = () => {
  const tasks = useTasksStore((state) => state.tasks);
  const deleteTask = useTasksStore((state) => state.deleteTask);

  const validDate = (createdAt: any) => {
    const date = new Date(createdAt);

    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();

    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
  };

  const handleDeleteTask = (id: string) => {
    deleteTask(id);
  };

  const getTaskStateColor = (state: TaskState) => {
    switch (state) {
      case "Por hacer":
        return "bg-blue-400 text-blue-800";
      case "En progreso":
        return "bg-yellow-400 text-yellow-800";
      case "Hecho":
        return "bg-green-400 text-green-800";
      default:
        return "bg-gray-400 text-gray-800";
    }
  };

  return (
    <table className="w-full text-sm text-gray-500 dark:text-gray-400 text-center">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          {namesColumn.map((column) =>
            Object.values(column).map((value, index) => (
              <th scope="col" className="px-6 py-3" key={index}>
                {value}
              </th>
            ))
          )}
        </tr>
      </thead>
      <tbody>
        {tasks?.map((task) => (
          <tr
            key={task._id}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
          >
            <td className="px-6 py-4 whitespace-no-wrap">
              <div className="text-sm leading-5 font-medium">
                {task.name.length > 35
                  ? `${task.name.substring(0, 35)}...`
                  : task.name}
              </div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap">
              <div className="text-sm leading-5 text-gray-300">
                {task.description.length > 50
                  ? `${task.description.substring(0, 50)}...`
                  : task.description}
              </div>
            </td>

            <td className="px-6 py-4 whitespace-no-wrap w-[10rem]">
              <span
                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getTaskStateColor(
                  task.state
                )}`}
              >
                {task.state}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap">
              <div className="text-sm leading-5 text-gray-500">
                {validDate(task.createdAt)}
              </div>
            </td>
            <td className="px-6 py-4 flex gap-2">
              <Link
                to="/"
                className="font-medium text-purple-600 dark:text-purple-500 hover:text-purple-700"
              >
                <EditNoteIcon />
              </Link>
              <button onClick={() => handleDeleteTask(task._id)}>
                <DeleteForeverIcon
                  color="error"
                  className="hover:text-red-700"
                />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
