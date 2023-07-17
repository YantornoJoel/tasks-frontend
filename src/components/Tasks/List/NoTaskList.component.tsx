import { Link } from "react-router-dom";
import AddBoxIcon from "@mui/icons-material/AddBox";

export const NoTaskList = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto overflow-x-auto shadow-md sm:rounded-lg mb-8 ">
        <h1 className="text-2xl font-bold mb-4 text-center uppercase">
          No hay Tareas para mostrar
        </h1>
      </div>
      <div className="w-[200px]  mx-auto text-center max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to="/new">
          <AddBoxIcon />
        </Link>
      </div>
    </>
  );
};
