import { useHookstate } from "@hookstate/core";
import { TaskType, globalState } from "./";

export const setTodoList = (data: TaskType[]) => {
  globalState.todoList.set(data);
};

export const getTodoList = () => globalState.todoList.get();

export const getSelectedTodo = () => globalState.todoTask.get();

export const setSelectedTodo = (todo: TaskType | undefined) => {
  if (todo) globalState.todoTask.set(JSON.parse(JSON.stringify(todo)));
  else globalState.todoTask.set(todo);
};

export const useTodoState = () => {
  return useHookstate(globalState);
};
