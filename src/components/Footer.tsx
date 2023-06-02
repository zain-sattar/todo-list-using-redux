
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import  style from '../styles/style'
import '../styles/app.css'
import store from '../store/store'
import { useHookstate } from '@hookstate/core';

const schema = yup.object().shape({
    todoTask:yup.string().required('This field is required'),
});
  
function Footer(){
    const {taskList}=useHookstate(store);

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });
    
    const onSubmitHandler: SubmitHandler<FieldValues>= async(data) => {

        try {
          const response = await axios.post('http://localhost:8000/todos', {
            todoTask: data.todoTask,
            isCompleted: false // Set the completed value to false initially
          });
            taskList.merge([response.data]); //Append the new todo task to the tasks state
            reset();
            // console.log('Task List:', taskList.get());
        } catch (error) {
          console.error(error);
        }
    };

    return(
        <Box sx={style.footerStyle}>
            <Typography variant="h6" fontWeight="bold">New todo</Typography>
            <CardActions >
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <TextField id="standard-basic"  variant="standard" placeholder='New todo' sx={style.TextFieldStyle} {...register("todoTask")}/>
                <Button type="submit" variant="outlined" sx={style.buttonStyle} >ADD TODO</Button>
                <Typography variant="body1" sx={style.errorStyle}>{errors.todoTask?.message?.toString()}</Typography>
            </form>
            </CardActions>
      </Box>
    )
}

export default Footer;