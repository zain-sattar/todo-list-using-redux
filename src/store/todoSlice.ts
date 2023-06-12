import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id?: number;
  task: string;
  isCompleted: boolean;
}

interface TodoState {
  todos: Todo[];
  todoItem: Todo | undefined;
}

const initialState: TodoState = {
  todos: [],
  todoItem: undefined,
};

export const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    setTodoList: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    },
    setTodoItem: (state, action: PayloadAction<Todo | undefined>) => {
      state.todoItem = action.payload;
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const { id, task, isCompleted } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.task = task;
        todo.isCompleted = isCompleted;
      }
    },
  },
});

export const { addTodo, deleteTodo, setTodoList, setTodoItem, updateTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
