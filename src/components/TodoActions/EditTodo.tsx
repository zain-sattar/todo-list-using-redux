import { Button, CardActions, Typography, TextField } from "@mui/material";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from "react-query";

import { todoSchema } from "../../utils/data";
import todoActionsStyle from "./styles";
import { TaskType } from "../../store/";
import { editTodo } from "../../api/todoApi";
import {
  setSelectedTodo,
  useTodoState,
  getSelectedTodo,
} from "../../store/todoController";

function EditTodo() {
  const todoState = useTodoState();
  const selectedTodo = getSelectedTodo();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(todoSchema),
    defaultValues: {
      todoTask: selectedTodo?.task,
    },
  });

  const queryClient = useQueryClient();

  const editTodoMutation = useMutation(editTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
      setSelectedTodo(undefined);
    },
  });

  const onSubmitHandler: SubmitHandler<FieldValues> = (data) => {
    const updatedTodo = {
      ...getSelectedTodo(),
      task: data.todoTask,
    } as TaskType;
    setSelectedTodo(updatedTodo);
    console.log(getSelectedTodo());
    editTodoMutation.mutate(updatedTodo);
    reset();
  };

  const onCancelHandler = () => {
    todoState.todoTask.set(undefined);
  };

  return (
    <>
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={todoActionsStyle.headingStyle}
      >
        Edit todo
      </Typography>
      <CardActions>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <TextField
            id="standard-basic"
            variant="standard"
            placeholder="Edit todo"
            sx={todoActionsStyle.editTextFieldStyle}
            {...register("todoTask")}
          />
          <Button
            type="submit"
            variant="outlined"
            sx={todoActionsStyle.addTodoButtonStyle}
          >
            Save
          </Button>
          <Button
            variant="outlined"
            sx={todoActionsStyle.addTodoButtonStyle}
            onClick={onCancelHandler}
          >
            Cancel
          </Button>
          <Typography variant="body1" sx={todoActionsStyle.errorStyle}>
            {errors.todoTask?.message?.toString()}
          </Typography>
        </form>
      </CardActions>
    </>
  );
}

export default EditTodo;
