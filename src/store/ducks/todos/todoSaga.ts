import { PayloadAction } from "@reduxjs/toolkit";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { Todo } from "./types";
import {
  getTodosApi,
  addTodoApi,
  deleteTodoApi,
  editTodoApi,
} from "../../../api/todoApi";
import {
  addTodo,
  deleteTodo,
  updateTodo,
  fetchTodos,
  fetchTodosSuccess,
  apiFail,
  resetError,
} from "./todoSlice";

function* addTodoSaga(action: PayloadAction<Todo>): Generator {
  try {
    yield call(addTodoApi, action.payload);
    yield put(resetError());
  } catch (error) {
    yield put(apiFail("Error: " + (error as Error).message));
  }
}

function* fetchTodosSaga():Generator<any, void, Todo[]> {
  try {
    const todos = yield call(getTodosApi);
    yield put(fetchTodosSuccess(todos));
  } catch (error) {
    yield put(apiFail("Error: " + (error as Error).message));
  }
}

function* deleteTodoSaga(action: PayloadAction<number>): Generator {
  try {
    yield call(deleteTodoApi, action.payload);
    yield put(resetError());
  } catch (error) {
    yield put(apiFail("Error: " + (error as Error).message));
  }
}

function* editTodoSaga(action: PayloadAction<Todo>): Generator {
  try {
    yield call(editTodoApi, action.payload);
    yield put(resetError());
  } catch (error) {
    yield put(apiFail("Error: " + (error as Error).message));
  }
}

function* todoSaga() {
  yield all([
    takeLatest(addTodo.type, addTodoSaga),
    takeLatest(fetchTodos.type, fetchTodosSaga),
    takeLatest(deleteTodo.type, deleteTodoSaga),
    takeLatest(updateTodo.type, editTodoSaga),
  ]);
}

export default todoSaga;
