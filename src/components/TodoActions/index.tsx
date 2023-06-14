import { Box, Button, CardActions, Typography, TextField } from "@mui/material";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";

import { todoSchema } from "../../utils/data";
import todoActionsStyle from "./styles";
import { Todo } from "../../store/ducks/todos/types";

interface TodoActionsProps {
  selectedTodo: Todo | undefined;
  addTodo: (todo: Todo) => void;
  updateTodo: (todo: Todo) => void;
  setTodo: (todo: Todo | undefined) => void;
}

const TodoActions: React.FC<TodoActionsProps> = (props) => {
  const { selectedTodo, addTodo, updateTodo, setTodo } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(todoSchema),
  });

  const onSubmitHandler: SubmitHandler<FieldValues> = (data) => {
    if (selectedTodo) {
      const updatedTodo = {
        ...selectedTodo,
        task: data.todoTask,
      } as Todo;
      updateTodo(updatedTodo);
      setTodo(undefined);
    } else {
      const todoTask: Todo = {
        task: data.todoTask,
        isCompleted: false,
      };
      addTodo(todoTask);
    }
    reset();
  };

  const onCancelHandler = () => {
    setTodo(undefined);
  };

  useEffect(() => {
    if (selectedTodo) setValue("todoTask", selectedTodo.task);
    else setValue("todoTask", null);
  }, [selectedTodo, setValue]);

  enum TodoFormLabels {
    Edit = "Edit todo",
    New = "New todo",
  }
  
  enum TodoFormButtonLabels {
    Save = "Save",
    AddTodo = "ADD TODO",
  }
  const formHeading = selectedTodo ? TodoFormLabels.Edit : TodoFormLabels.New;
  const submitButtonLabel = selectedTodo ? TodoFormButtonLabels.Save:TodoFormButtonLabels.AddTodo;
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
            placeholder={formHeading}
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
};

export default TodoActions;
