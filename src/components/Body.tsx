import CardContent from '@mui/material/CardContent';
import { useEffect } from 'react';
import axios from 'axios';
import { useHookstate } from '@hookstate/core';
import store from '../store/store';

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
        <CardContent>
        
        </CardContent>
    )
}

export default Body;