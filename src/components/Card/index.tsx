import { Typography, Card, CardHeader, Divider } from "@mui/material";

import TodoList from "../../containers/TodoList";
import TodoActions from "../../containers/TodoActions";
import cardStyle from "./styles";

function TodoListCard() {
  return (
    <Card className="genericStyle" sx={cardStyle.cardStyle}>
      <CardHeader
        sx={cardStyle.cardHeadingStyle}
        title={<Typography variant="h3">Todo List</Typography>}
        subheader={
          <Typography variant="body1">A Simple React Todo List App</Typography>
        }
      />
      <Divider sx={cardStyle.dividorStyle} />
      <TodoList />
      <TodoActions />
    </Card>
  );
}

export default TodoListCard;
