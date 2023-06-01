
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

const schema = yup.object().shape({
    todoTask:yup.string().required('This field is required'),
});
  
function Footer(){
    console.log("THis is a footer component");
    
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });
    
    const onSubmitHandler: SubmitHandler<FieldValues>= async(data) => {
        try {
          const response = await axios.post('http://localhost:8000/todos', {
            todoTask: data.todoTask,
            isCompleted: false // Set the completed value to false initially
          });
          console.log(response.data); // Handle the response data here
          reset();
        } catch (error) {
          console.error(error); // Handle any errors that occur during the request
        }
    };

    return(
        <Box sx={style.footerStyle}>
            <Typography variant="h6" fontWeight="bold">New todo</Typography>
            <CardActions >
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <TextField id="outlined-basic" placeholder='New todo' variant="outlined" {...register("todoTask")}/>
                <Button type="submit" variant="outlined" sx={style.buttonStyle} >ADD TODO</Button>
                <Typography variant="body1" sx={{ color: 'red' }}>{errors.todoTask?.message?.toString()}</Typography>
            </form>
            </CardActions>
      </Box>
    )
}

export default Footer;