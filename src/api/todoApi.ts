import axios from "axios";

import { TaskType } from "../store/";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const todoApi = axios.create({
  baseURL: `${BASE_URL}/todos`,
});

const getTodos = async () => {
  const response = await todoApi.get("/");
  return response.data;
};

const addTodo = async (todo: TaskType) => {
  const response = await todoApi.post("/", todo);
  return response.data;
};

const deleteTodo = async (id: number) => {
  const response = await todoApi.delete(`/${id}`);
  return response.data;
};

const editTodo = async (todo: TaskType) => {
  const response = await todoApi.patch(`/${todo.id}`, todo);
  return response.data;
};

export { getTodos, addTodo, deleteTodo, editTodo };
