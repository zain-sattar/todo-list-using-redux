import { hookstate } from "@hookstate/core";

export type TaskType = {
  todo: String;
  isCompleted: boolean;
  id?: number;
};

const todoList: TaskType[] = []; //initial state

export const store = hookstate({
  todoList,
});
