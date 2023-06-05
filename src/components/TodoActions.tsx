import {Box, Typography, TextField, Button, CardActions} from '@mui/material'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import schema from '../utils/data';
import { yupResolver } from '@hookform/resolvers/yup';
import todoActionsStyle from './todoActions';
import {TaskType} from "../store/store"
import {  useMutation, useQueryClient } from 'react-query';
import { addTodo } from '../api/todoApi';

function TodoActions(){

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });

    const queryClient = useQueryClient()

    const addTodoMutation=useMutation(addTodo,{
        onSuccess:()=>{
            queryClient.invalidateQueries('todos')
        }
    })
    
    const onSubmitHandler: SubmitHandler<FieldValues>=(data) => {
        const todoTask:TaskType={
            todo: data.todoTask,
            isCompleted: false // Set the completed value to false initially
        }
        addTodoMutation.mutate(todoTask)
        reset();

    };

    return(
        <Box sx={todoActionsStyle.todoActionsStyle}>
            <Typography variant="h6" fontWeight="bold">New todo</Typography>
            <CardActions >
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <TextField id="standard-basic"  variant="standard" placeholder='New todo' sx={todoActionsStyle.textFieldStyle} {...register("todoTask")}/>
                <Button type="submit" variant="outlined" sx={todoActionsStyle.addTodoButtonStyle} >ADD TODO</Button>
                <Typography variant="body1" sx={todoActionsStyle.errorStyle}> {errors.todoTask?.message?.toString()} </Typography>
            </form>
            </CardActions>
      </Box>
    )
}

export default TodoActions;
