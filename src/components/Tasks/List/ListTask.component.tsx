import { useTasksStore } from "@/store";
import { Loading, TableTask } from "@/components";

export const ListTask = () => {

  const loading = useTasksStore((state) => state.loading);

  return(
    <>
      {loading ? <Loading /> : <TableTask />}
    </>
  );
};
