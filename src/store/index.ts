import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import todoReducer from "./ducks/todos/todoSlice";
import { rootSaga } from "./ducks";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
