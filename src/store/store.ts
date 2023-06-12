import { configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import todoReducer from "./todoSlice";
import todoSaga from "./todoSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    todoList: todoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(todoSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
