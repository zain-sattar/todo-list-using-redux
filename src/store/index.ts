import { hookstate } from "@hookstate/core";

export type TaskType = {
  task: String;
  isCompleted: boolean;
  id?: number;
};

const initialState = {
  todoTask: undefined as TaskType | undefined,
  todoList: [] as TaskType[],
};
export const globalState = hookstate(initialState);
