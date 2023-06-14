import TodoListCard from "./components/Card";
import { Provider } from "react-redux";
import "./App.css";
import store from "./store"

function App() {
  return (
    <Provider store={store}>
      <TodoListCard />
    </Provider>
  );
}
export default App;
