import { TaskState } from "@/models";
import { ChangeEvent } from "react";

interface Props {
  errors: { [key: string]: string };
  name: string;
  description: string;
  state: TaskState;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleNameChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleDescriptionChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  handleStateChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const FormTask = ({
  errors,
  name,
  description,
  state,
  handleSubmit,
  handleNameChange,
  handleDescriptionChange,
  handleStateChange,
}: Props) => {
  return (
    <form
      className="max-w-2xl mx-auto relative overflow-x-auto shadow-md sm:rounded-lg bg-gray-800 p-5"
      onSubmit={handleSubmit}
    >
      <div className="mb-6">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Nombre
        </label>
        <input
          type="text"
          id="name"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Cerrar la ventana"
          value={name}
          onChange={handleNameChange}
          autoComplete="off"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-2">{errors.name}</p>
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Descripción
        </label>
        <textarea
          id="description"
          rows={4}
          className="min-h-[45px] max-h-[250px] block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Esta lloviendo..."
          value={description}
          onChange={handleDescriptionChange}
        ></textarea>
        {errors.description && (
          <p className="text-red-500 text-sm mt-2">{errors.description}</p>
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="state"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Seleccione el estado
        </label>
        <select
          id="state"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={state}
          onChange={handleStateChange}
        >
          <option value="" disabled>
            Seleccionar...
          </option>
          <option value="Por hacer">Por hacer</option>
          <option value="En progreso">En progreso</option>
          <option value="Hecho">Hecho</option>
        </select>
        {errors.state && (
          <p className="text-red-500 text-sm mt-2">{errors.state}</p>
        )}
      </div>

      <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
          <input
            id="terms"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            required
          />
        </div>
        <label
          htmlFor="terms"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Estoy de acuerdo con los{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline dark:text-blue-500"
          >
            terminos y condiciones
          </a>
        </label>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Crear
        </button>
      </div>
    </form>
  );
};
