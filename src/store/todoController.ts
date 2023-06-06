import { useHookstate } from "@hookstate/core";
import { TaskType, store } from "./";

export const useGlobalState = () => {
  const todoListState = useHookstate(store);

  return {
    getTodoList: () => todoListState.todoList.get(),
    setTodoList: (data: TaskType[]) => {
      todoListState.todoList.set(data);
    },
  };
};
