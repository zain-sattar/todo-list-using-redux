import { TaskType } from "../store/";
import axios from "axios";

const todoApi = axios.create({
  baseURL: "http://localhost:8000",
});

const getTodos = async () => {
  const response = await todoApi.get("/todos");
  return response.data;
};

const addTodo = async (todo: TaskType) => {
  const response = await todoApi.post("/todos", todo);
  return response.data;
};

const deleteTodo = async (id: number) => {
  const response = await todoApi.delete(`/todos/${id}`);
  return response.data;
};

const editTodo = async (todo: TaskType) => {
  const response = await todoApi.patch(`/todos/${todo.id}`, todo);
  return response.data;
};

export { getTodos, addTodo, deleteTodo, editTodo };
