import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'
import { Box,Typography } from '@mui/material';
import todoListStyle from '../styles/todoList';
import { getTodos } from '../api/todoApi';
import { TaskType } from '../store/store';
import { useQuery,useMutation, useQueryClient } from 'react-query';
import { deleteTodo,editTodo } from '../api/todoApi';
function TodoList(){
  const {data , status} = useQuery('todos', getTodos)

  const queryClient = useQueryClient()
  const deleteTodoMutation=useMutation(deleteTodo,{
        onSuccess:()=>{
            //Invalidate the cache and refetch
            queryClient.invalidateQueries('todos')
        }
  })
  const editTodoMutation=useMutation(editTodo,{
    onSuccess:()=>{
        //Invalidate the cache and refetch
        queryClient.invalidateQueries('todos')
    }
  })

  const editHandler=async(todo:TaskType)=>{
    todo.isCompleted=!todo.isCompleted;
    editTodoMutation.mutate(todo)
  }

  const deleteHandler=async(id:number=0)=>{
    deleteTodoMutation.mutate(id);
  }
  
  if(status==='loading'){
    return <Typography variant='h4' sx={todoListStyle.todoTaskStyle}>Loading...</Typography>
  }
  if (status==='error'){
    console.log("error");
    return <Typography variant='h4' sx={todoListStyle.todoTaskStyle}>Error!</Typography>
  }

  
  // console.log(data);
    return(
      <CardContent sx={todoListStyle.body}>
        {data && data.map((todo:TaskType)=>(
          <Box key={todo.id} sx={todoListStyle.todoTaskBoxStyle}>
            <Typography variant="h6"
              sx={{...todoListStyle.todoTaskStyle , ...(todo.isCompleted && todoListStyle.completedTaskStyle)}}>{todo.todo}
            </Typography>
            <IconButton aria-label="edit" onClick={()=>{editHandler(todo)}}>
              <EditIcon  sx={{ color: 'white' }}/>
            </IconButton>
            <IconButton aria-label="delete" onClick={()=>{deleteHandler(todo.id)}}>
              <DeleteIcon sx={{ color: 'white' }}/>
            </IconButton>
          </Box>
        ))}
      </CardContent>
    )
    
}

export default TodoList;