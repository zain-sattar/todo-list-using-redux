import { CardContent, Box, Typography, IconButton } from "@mui/material";
import { Edit, Delete, Done } from "@mui/icons-material";
import { useEffect } from "react";

import { Todo } from "../../store/ducks/todos/types";
import style from "./styles";

interface TodoListProps {
  todos: Todo[];
  loading: boolean;
  error: string | null;
  fetchTodos: () => void;
  updateTodo: (todo: Todo) => void;
  deleteTodo: (id: number) => void;
  setTodo: (todo: Todo) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  const {
    todos,
    loading,
    error,
    fetchTodos,
    updateTodo,
    deleteTodo,
    setTodo,
  } = props;

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const toggleCompletionHandler = async (todo: Todo) => {
    const updatedTodo = { ...todo, isCompleted: !todo.isCompleted };
    updateTodo(updatedTodo);
  };

  const editHandler = async (todo: Todo) => {
    setTodo(todo);
  };

  const deleteHandler = async (id: number = 0) => {
    deleteTodo(id);
  };

  if (loading)
    return (
      <CardContent sx={style.body}>
        <Typography variant="h5" sx={style.errorStyle}>
          Loading...
        </Typography>
      </CardContent>
    );
  if (error)
    return (
      <CardContent sx={style.body}>
        <Typography variant="h5" sx={style.errorStyle}>
          {error}
        </Typography>
      </CardContent>
    );

  return (
    <CardContent sx={style.body}>
      {todos?.map((todo: Todo) => (
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
};

export default TodoList;
