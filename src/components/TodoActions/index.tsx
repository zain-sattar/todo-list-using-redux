import { Box, Button, CardActions, Typography, TextField } from "@mui/material";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from "react-query";
import { useEffect } from "react";

import { todoSchema } from "../../utils/data";
import todoActionsStyle from "./styles";
import { TaskType ,useTodoState,todoStateController} from "../../store/todoController";
import { addTodo, editTodo } from "../../api/todoApi";

function TodoActions() {
  const todoState = useTodoState();
  const selectedTodo = todoState.todoTask.get();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(todoSchema),
  });

  const queryClient = useQueryClient();
  const mutation = useMutation(selectedTodo ? editTodo : addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
      todoStateController.setSelectedTodo(undefined);
      reset();
    },
  });

  const onSubmitHandler: SubmitHandler<FieldValues> = (data) => {
    const todoTask: TaskType = {
      task: data.todoTask,
      isCompleted: false,
    };

    if (selectedTodo) {
      const updatedTodo = {
        ...selectedTodo,
        task: data.todoTask,
      } as TaskType;
      todoStateController.setSelectedTodo(updatedTodo);
      mutation.mutate(updatedTodo);
    } else {
      mutation.mutate(todoTask);
    }
  };

  const onCancelHandler = () => {
    todoStateController.setSelectedTodo(undefined);
    setValue("todoTask", "");
  };

  useEffect(() => {
    if (selectedTodo) {
      setValue("todoTask", selectedTodo.task);
    }
  }, [selectedTodo, setValue]);

  const formHeading = selectedTodo ? "Edit todo" : "New todo";
  const submitButtonLabel = selectedTodo ? "Save" : "ADD TODO";
  return (
    <Box sx={todoActionsStyle.todoActionsStyle}>
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={todoActionsStyle.headingStyle}
      >
        {formHeading}
      </Typography>
      <CardActions>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <TextField
            id="standard-basic"
            variant="standard"
            placeholder={selectedTodo ? "Edit todo" : "New todo"}
            sx={
              selectedTodo
                ? todoActionsStyle.editTextFieldStyle
                : todoActionsStyle.addTextFieldStyle
            }
            {...register("todoTask")}
          />
          <Button
            type="submit"
            variant="outlined"
            sx={todoActionsStyle.addTodoButtonStyle}
          >
            {submitButtonLabel}
          </Button>
          {selectedTodo ? (
            <Button
              variant="outlined"
              sx={todoActionsStyle.addTodoButtonStyle}
              onClick={onCancelHandler}
            >
              Cancel
            </Button>
          ) : null}
          <Typography variant="body1" sx={todoActionsStyle.errorStyle}>
            {errors.todoTask?.message?.toString()}
          </Typography>
        </form>
      </CardActions>
    </Box>
  );
}

export default TodoActions;
