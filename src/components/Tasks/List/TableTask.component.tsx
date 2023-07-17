import { useTasksStore } from "@/store";
import { NoTaskList, OrderTask, SearchTask, TableDataTask } from ".";

export const TableTask = () => {
  const tasks = useTasksStore((state) => state.tasks);

  return (
    <>
      {tasks ? (
        <div className="max-w-4xl mx-auto relative overflow-x-auto shadow-md sm:rounded-lg mb-8">
          <div className="max-w-4xl mx-auto mb-4 flex items-center justify-between">
            {/* <h1 className="text-2xl font-bold mb-4 uppercase">Tareas</h1> */}
            <OrderTask />
            <SearchTask />
          </div>
          {tasks.length > 0 ? (
            <TableDataTask />
          ) : (
            <h1 className="text-center mb-4">No hay resultados</h1>
          )}
        </div>
      ) : (
        <NoTaskList />
      )}
    </>
  );
};
