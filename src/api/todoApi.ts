import axios from "axios";

import { TaskType } from "../store/";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const baseURL = `${BASE_URL}/todos`;

const todoApi = axios.create({
  baseURL,
});

const getTodos = async () => {
  const response = await todoApi.get(baseURL);
  return response.data;
};

const addTodo = async (todo: TaskType) => {
  const response = await todoApi.post(baseURL, todo);
  return response.data;
};

const deleteTodo = async (id: number) => {
  const response = await todoApi.delete(`${baseURL}/${id}`);
  return response.data;
};

const editTodo = async (todo: TaskType) => {
  const response = await todoApi.patch(`${baseURL}/${todo.id}`, todo);
  return response.data;
};

export { getTodos, addTodo, deleteTodo, editTodo };
