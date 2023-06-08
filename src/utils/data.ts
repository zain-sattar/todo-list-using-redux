import * as yup from "yup";

const todoSchema = yup.object().shape({
  todoTask: yup.string().required("This field is required"),
});

export { todoSchema };
