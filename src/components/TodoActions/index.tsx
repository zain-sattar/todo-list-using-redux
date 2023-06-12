import { Box, Button, CardActions, Typography, TextField } from "@mui/material";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";

import { todoSchema } from "../../utils/data";
import todoActionsStyle from "./styles";
import { Todo, addTodo, setTodoItem, updateTodo } from "../../store/todoSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";

function TodoActions() {
  const selectedTodo = useSelector(
    (state: RootState) => state.todoList.todoItem
  );
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(todoSchema),
  });

  const onSubmitHandler: SubmitHandler<FieldValues> = (data) => {
    if (selectedTodo) {
      const updatedTodo = {
        ...selectedTodo,
        task: data.todoTask,
      } as Todo;
      dispatch(updateTodo(updatedTodo));
    } else {
      const todoTask: Todo = {
        task: data.todoTask,
        isCompleted: false,
      };
      dispatch(addTodo(todoTask));
    }
    dispatch(setTodoItem(undefined));
  };

  const onCancelHandler = () => {
    dispatch(setTodoItem(undefined));
  };

  useEffect(() => {
    if (selectedTodo) setValue("todoTask", selectedTodo.task);
    else setValue("todoTask", null);
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
