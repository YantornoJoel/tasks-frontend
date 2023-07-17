import { ChangeEvent, useState } from "react";

import { TaskOption, TaskOrder } from "@/models";
import { useTasksStore } from "@/store";

export const OrderTask = () => {
  const orderTask = useTasksStore((state) => state.orderTask);

  const [orderTerm, setOrderTerm] = useState("");
  const getTasks = useTasksStore((state) => state.getTasks);

  const handleOrderChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    const [order, option] = value.split("-") as [TaskOrder, TaskOption];
    if (order.includes("none")) {
      getTasks();
    }
    setOrderTerm(value);
    orderTask(order, option);
  };

  return (
    <div>
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={orderTerm}
        onChange={handleOrderChange}
      >
        <option value="none-none">Sin ordenar</option>
        <option value="asc-name">Nombre [A-Z]</option>
        <option value="desc-name">Nombre [Z-A]</option>
        <option value="desc-createdAt">Más recientes</option>
        <option value="asc-createdAt">Más antiguos</option>
      </select>
    </div>
  );
};
