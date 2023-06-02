import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'
import { Box,Typography } from '@mui/material';
import { useEffect } from 'react';
import axios from 'axios';
import { useHookstate } from '@hookstate/core';
import store from '../store/store';
import style from '../styles/style'
function Body(){
    const { taskList } = useHookstate(store);

     
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:8000/todos');
            taskList.set(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      });

    return(
      <div>
      <CardContent sx={style.body}>
        <Box sx={style.boxStyle}>
            <Typography variant="h6" sx={style.typographyStyle}>Hello world</Typography>
            <IconButton aria-label="edit">
              <EditIcon  sx={{ color: 'white' }}/>
            </IconButton>
            <IconButton aria-label="delete">
              <DeleteIcon sx={{ color: 'white' }}/>
            </IconButton>
        </Box>

        <Box sx={style.boxStyle}>
            <Typography variant="h6" sx={{ ...style.typographyStyle, ...style.completedTaskStyle }}>Hello world</Typography>
            <IconButton aria-label="edit">
              <EditIcon  sx={{ color: 'white' }}/>
            </IconButton>
            <IconButton aria-label="delete">
              <DeleteIcon sx={{ color: 'white' }}/>
            </IconButton>
        </Box>

      </CardContent>
      </div>
    )
    
}

export default Body;