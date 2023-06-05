import { hookstate } from "@hookstate/core";

type Task = {
  task: String;
  isCompleted: boolean;
  id: number;
};

const taskList: Task[] = [];

export const store = hookstate({
  taskList,
});
