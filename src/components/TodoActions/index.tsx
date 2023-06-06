import { Box, Button, CardActions, Typography, TextField } from "@mui/material";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../utils/data";
import todoActionsStyle from "./todoActions";

function TodoActions() {
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
