import { Box } from "@mui/material";

import todoActionsStyle from "./styles";
import { useTodoState } from "../../store/todoController";
import AddTodo from "./AddTodo";
import EditTodo from "./EditTodo";

function TodoActions() {
  const todoState = useTodoState();
  const selectedTodo = todoState.todoTask.get();

  return (
    <Box sx={todoActionsStyle.todoActionsStyle}>
      {selectedTodo ? <EditTodo /> : <AddTodo />}
    </Box>
  );
}

export default TodoActions;
