import { all, fork } from "redux-saga/effects";
import todoSaga from "./todos/todoSaga";

export function* rootSaga() {
 yield all([fork(todoSaga)]);
}
