import { CardContent, Box, Typography, IconButton } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { useQuery, useMutation, useQueryClient } from "react-query";

import style from "./todoList";
import { getTodos, deleteTodo, editTodo } from "../../api/todoApi";
import {TaskType}  from "../../store";
import { useGlobalState } from "../../store/todoController";

function TodoList() {
  const todoListState = useGlobalState();
  const queryClient = useQueryClient();

  const {status} = useQuery("todos", getTodos, {
    onSuccess: (data) => {
      todoListState.setTodoList(data);
    },
  });

  const deleteTodoMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const editTodoMutation = useMutation(editTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const editHandler = async (todo: TaskType) => {
    const updatedTodo = { ...todo, isCompleted: !todo.isCompleted };
    editTodoMutation.mutate(updatedTodo);
  };

  const deleteHandler = async (id: number = 0) => {
    deleteTodoMutation.mutate(id);
  };

  if (status === "loading") {
    return (
      <Typography variant="h4" sx={style.todoTaskStyle}>
        Loading...
      </Typography>
    );
  }
  if (status === "error") {
    return (
      <Typography variant="h4" sx={style.todoTaskStyle}>
        Error!
      </Typography>
    );
  }

  const todos = todoListState.getTodoList();
  return (
    <CardContent sx={style.body}>
      {todos &&
        todos.map((todo: TaskType) => (
          <Box key={todo.id} sx={style.todoTaskBoxStyle}>
            <Typography
              variant="h6"
              sx={{
                ...style.todoTaskStyle,
                ...(todo.isCompleted && style.completedTaskStyle),
              }}
            >
              {todo.todo}
            </Typography>
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
