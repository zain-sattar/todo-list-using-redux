import { Button, CardActions, Typography, TextField } from "@mui/material";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from "react-query";

import { todoSchema } from "../../utils/data";
import todoActionsStyle from "./styles";
import { TaskType } from "../../store/";
import { addTodo } from "../../api/todoApi";

function AddTodo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(todoSchema),
    defaultValues: {
      todoTask: "",
    },
  });

  const queryClient = useQueryClient();

  const addTodoMutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const onSubmitHandler: SubmitHandler<FieldValues> = (data) => {
    const todoTask: TaskType = {
      task: data.todoTask,
      isCompleted: false,
    };
    addTodoMutation.mutate(todoTask);
    reset();
  };

  return (
    <>
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={todoActionsStyle.headingStyle}
      >
        New todo
      </Typography>
      <CardActions>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <TextField
            id="standard-basic"
            variant="standard"
            placeholder="New todo"
            sx={todoActionsStyle.addTextFieldStyle}
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
    </>
  );
}

export default AddTodo;
