export type TaskState   = "Por hacer" | "En progreso" | "Hecho";
export type TaskOrder   = "asc" | "desc";
export type TaskOption  = "name" | "createdAt";

export interface Task {
  name          : string;
  description   : string;
  state         : TaskState;
  createdAt     : Date;
  _id           : string
}

export interface ApiTask {
  ok  : boolean,
  data: Task[]
}

export interface TaskStoreState {
  tasks       : Task[],
  taskCreated : boolean,
  taskUpdated : boolean,
  taskDeleted : boolean,
  taskSearched: boolean,
  taskOrdered : boolean,
  loading     : boolean,

  getTasks    : () => void,
  createTask  : (name: string, description: string, state: TaskState) => void
  updateTask  : (id: string, state: TaskState) => void,
  deleteTask  : (id: string) => void,
  searchTask  : (param: string) => void
  orderTask   : (order: TaskOrder, option: TaskOption) => void
}