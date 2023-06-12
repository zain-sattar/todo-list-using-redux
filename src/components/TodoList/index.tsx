import { CardContent, Box, Typography, IconButton } from "@mui/material";
import { Edit, Delete, Done } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";

import { useEffect } from "react";
import { RootState } from "../../store/store";
import {
  Todo,
  updateTodo,
  deleteTodo,
  setTodoItem,
} from "../../store/todoSlice";
import style from "./styles";

function TodoList() {
  const todos = useSelector((state: RootState) => state.todoList.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "todos/fetchTodos" });
  }, [dispatch]);

  const toggleCompletionHandler = async (todo: Todo) => {
    const updatedTodo = { ...todo, isCompleted: !todo.isCompleted };
    dispatch(updateTodo(updatedTodo));
  };

  const editHandler = async (todo: Todo) => {
    dispatch(setTodoItem(todo));
  };

  const deleteHandler = async (id: number = 0) => {
    dispatch(deleteTodo(id));
  };

  return (
    <CardContent sx={style.body}>
      {todos?.map((todo) => (
        <Box key={todo.id} sx={style.todoTaskBoxStyle}>
          <Typography
            variant="h6"
            sx={{
              ...style.todoTaskStyle,
              ...(todo.isCompleted && style.completedTaskStyle),
            }}
          >
            {todo.task}
          </Typography>
          <IconButton
            aria-label="done"
            onClick={() => {
              toggleCompletionHandler(todo);
            }}
          >
            <Done sx={{ color: "white" }} />
          </IconButton>
          <IconButton
            aria-label="edit"
            onClick={() => {
              editHandler(todo);
            }}
          >
            <Edit sx={{ color: "white" }} />
          </IconButton>
          <IconButton
            aria-label="delete"
            onClick={() => {
              deleteHandler(todo.id);
            }}
          >
            <Delete sx={{ color: "white" }} />
          </IconButton>
        </Box>
      ))}
    </CardContent>
  );
}

export default TodoList;
