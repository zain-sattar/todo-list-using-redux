import { connect } from "react-redux";
import { RootState } from "../store";
import TodoActions from "../components/TodoActions";
import { addTodo, updateTodo, setTodo } from "../store/ducks/todos/todoSlice";

const mapStateToProps = (state: RootState) => ({
  selectedTodo: state.todos.todoItem,
});

const mapDispatchToProps = {
  addTodo,
  updateTodo,
  setTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoActions);
