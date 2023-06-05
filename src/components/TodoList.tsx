import {CardContent,Box,Typography,IconButton } from '@mui/material'
import {Delete,Edit} from '@mui/icons-material';
import style from './todoList';
import { getTodos } from '../api/todoApi';
import { TaskType,store} from '../store/store';
import { useQuery,useMutation, useQueryClient } from 'react-query';
import { deleteTodo,editTodo } from '../api/todoApi';
import { useHookstate } from '@hookstate/core';
import { EOF } from 'dns';

function TodoList(){

  const { taskList } = useHookstate(store);

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
    const updatedTodo = { ...todo, isCompleted: !todo.isCompleted };
    editTodoMutation.mutate(updatedTodo)
  }

  const deleteHandler=async(id:number=0)=>{
    deleteTodoMutation.mutate(id);
  }
  
  if(status==='loading'){
    return <Typography variant='h4' sx={style.todoTaskStyle}>Loading...</Typography>
  }
  if (status==='error'){
    console.log("error");
    return <Typography variant='h4' sx={style.todoTaskStyle}>Error!</Typography>
  }

  taskList.set(data)

    return(
      <CardContent sx={style.body}>
        {taskList.get() && taskList.get().map((todo:TaskType)=>(
          <Box key={todo.id} sx={style.todoTaskBoxStyle}>
            <Typography variant="h6"
              sx={{...style.todoTaskStyle , ...(todo.isCompleted && style.completedTaskStyle)}}>{todo.todo}
            </Typography>
            <IconButton aria-label="edit" onClick={()=>{editHandler(todo)}}>
              <Edit sx={{ color: 'white' }}/>
            </IconButton>
            <IconButton aria-label="delete" onClick={()=>{deleteHandler(todo.id)}}>
              <Delete sx={{ color: 'white' }}/>
            </IconButton>
          </Box>
        ))}
      </CardContent>
    )    
}
export default TodoList;
