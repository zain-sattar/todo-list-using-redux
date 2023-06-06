import {CardContent, Box, Typography,IconButton } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import style from "./todoList";

function TodoList() {
  const todoItems = [
    { text: "Hello world", completed: false },
    { text: "Hello world", completed: true },
  ];
  return (
    <div>
      <CardContent sx={style.body}>
        {todoItems.map((todo, index) => (
          <Box key={index} sx={style.todoTaskBoxStyle}>
            <Typography
              variant="h6"
              sx={{
                ...style.todoTaskStyle,
                ...(todo.completed && style.completedTaskStyle),
              }}
            >
              {todo.text}
            </Typography>
            <IconButton aria-label="edit">
              <Edit sx={{ color: "white" }} />
            </IconButton>
            <IconButton aria-label="delete">
              <Delete sx={{ color: "white" }} />
            </IconButton>
          </Box>
        ))}
      </CardContent>
    </div>
  );
}

export default TodoList;
