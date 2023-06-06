import { QueryClient, QueryClientProvider } from "react-query";
import TodoListCard from "./components/Card";
import "./App.css";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TodoListCard />
    </QueryClientProvider>
  );
}
export default App;
