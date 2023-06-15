import axios, { AxiosResponse }  from "axios";
import { Todo } from "../store/ducks/todos/types";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const todoApi = axios.create({
  baseURL: `${BASE_URL}/todos`,
});

const getTodosApi = async (): Promise<Todo[]> => {
  const response: AxiosResponse<Todo[]> = await todoApi.get("/");
  return response.data;
};

const addTodoApi = async (todo: Todo): Promise<Todo> => {
  const response: AxiosResponse<Todo> = await todoApi.post("/", todo);
  return response.data;
};

const deleteTodoApi = async (id: number): Promise<Todo> => {
  const response: AxiosResponse<Todo> = await todoApi.delete(`/${id}`);
  return response.data;
};

const editTodoApi = async (todo: Todo): Promise<Todo> => {
  const response: AxiosResponse<Todo> = await todoApi.patch(`/${todo.id}`, todo);
  return response.data;
};

export { getTodosApi, addTodoApi, deleteTodoApi, editTodoApi };
