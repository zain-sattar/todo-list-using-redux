export interface Todo {
    id?: number;
    task: string;
    isCompleted: boolean;
  }
  
export interface TodoState {
    todos: Todo[];
    todoItem: Todo | undefined;
    loading:boolean;
    error:string|null
  }
