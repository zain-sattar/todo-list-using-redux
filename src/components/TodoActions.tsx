import { Box, Button, CardActions, Typography, TextField } from "@mui/material";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { schema } from "../utils/data";
import { yupResolver } from "@hookform/resolvers/yup";
import todoActionsStyle from "./todoActions";
import { store } from "../store/store";
import { useHookstate } from "@hookstate/core";

function TodoActions() {
  const { taskList } = useHookstate(store);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler: SubmitHandler<FieldValues> = async (data) => {
    //make request to post data on json-server and update the taskListSTate
  };

  return (
    <Box sx={todoActionsStyle.todoActionsStyle}>
      <Typography variant="h6" fontWeight="bold">
        New todo
      </Typography>
      <CardActions>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <TextField
            id="standard-basic"
            variant="standard"
            placeholder="New todo"
            sx={todoActionsStyle.textFieldStyle}
            {...register("todoTask")}
          />
          <Button
            type="submit"
            variant="outlined"
            sx={todoActionsStyle.addTodoButtonStyle}
          >
            ADD TODO
          </Button>
          <Typography variant="body1" sx={todoActionsStyle.errorStyle}>
            {errors.todoTask?.message?.toString()}
          </Typography>
        </form>
      </CardActions>
    </Box>
  );
}
export default TodoActions;
