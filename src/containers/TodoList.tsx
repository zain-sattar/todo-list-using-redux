import { connect } from "react-redux";
import { RootState } from "../store";
import TodoList from "../components/TodoList";
import { fetchTodos, updateTodo, deleteTodo, setTodo } from "../store/ducks/todos/todoSlice";


const mapStateToProps = (state: RootState) => ({
  todos: state.todos.todos,
  loading:state.todos.loading,
  error:state.todos.error,
});

const mapDispatchToProps = {
  fetchTodos,
  updateTodo,
  deleteTodo,
  setTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
