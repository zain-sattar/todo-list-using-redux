import { PayloadAction } from "@reduxjs/toolkit";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  getTodosApi,
  addTodoApi,
  deleteTodoApi,
  editTodoApi,
} from "../api/todoApi";
import {
  Todo,
  setTodoList,
  addTodo,
  deleteTodo,
  updateTodo,
} from "./todoSlice";

function* addTodoSaga(action: PayloadAction<Todo>): Generator<any, void, any> {
  try {
    yield call(addTodoApi, action.payload);
  } catch (error) {
    console.error("Error adding todo:", error);
  }
}

function* fetchTodosSaga(): Generator<any, void, any> {
  try {
    const todos = yield call(getTodosApi);
    yield put(setTodoList(todos));
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
}

function* deleteTodoSaga(
  action: PayloadAction<number>
): Generator<any, void, any> {
  try {
    yield call(deleteTodoApi, action.payload);
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
}

function* editTodoSaga(action: PayloadAction<Todo>): Generator<any, void, any> {
  try {
    yield call(editTodoApi, action.payload);
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
}

function* todoSaga() {
  yield all([
    takeLatest(addTodo.type, addTodoSaga),
    takeLatest("todos/fetchTodos", fetchTodosSaga),
    takeLatest(deleteTodo.type, deleteTodoSaga),
    takeLatest(updateTodo.type, editTodoSaga),
  ]);
}

export default todoSaga;
