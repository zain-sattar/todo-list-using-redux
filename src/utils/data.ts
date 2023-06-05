import * as yup from "yup";

const schema = yup.object().shape({
  todoTask: yup.string().required("This field is required"),
});

export { schema };
