import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Todo, TodoState } from "./types";

const initialState: TodoState = {
  todos: [],
  todoItem: undefined,
  loading: false,
  error: null,
};

export const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    fetchTodos: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchTodosSuccess: (state, action: PayloadAction<Todo[]>) => {
      state.loading = false;
      state.error = null;
      state.todos = action.payload;
    },
    apiFail: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    setTodo: (state, action: PayloadAction<Todo | undefined>) => {
      state.todoItem = action.payload;
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const { id, task, isCompleted } = action.payload;
      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, task, isCompleted } : todo
      );
    },
    resetError: (state) => {
      state.error = null;
    },
    resetLoading: (state) => {
      state.loading = false;
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  updateTodo,
  setTodo,
  fetchTodos,
  fetchTodosSuccess,
  apiFail,
  resetError,
  resetLoading,
} = todoSlice.actions;
export default todoSlice.reducer;
