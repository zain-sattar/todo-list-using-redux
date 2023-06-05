import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Typography } from "@mui/material";
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
              <EditIcon sx={{ color: "white" }} />
            </IconButton>
            <IconButton aria-label="delete">
              <DeleteIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>
        ))}
      </CardContent>
    </div>
  );
}

export default TodoList;
