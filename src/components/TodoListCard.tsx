// import React from 'react';

import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import CardHeader from '@mui/material/CardHeader';
import { Typography } from '@mui/material';
import TodoList from './TodoList';
import TodoActions from './TodoActions';
import  cardStyle from '../styles/card'

function TodoListCard() {
  
  return (
    <Card className='genericStyle' sx={cardStyle.cardStyle}>
      <CardHeader
            title={<Typography variant="h4" fontWeight="bold">TODO List</Typography>}
            subheader={<Typography variant="body1" >A Simple React Todo List App</Typography>}
      />
      <Divider sx={cardStyle.dividorStyle}/>
      <TodoList></TodoList>
      <TodoActions></TodoActions>
    </Card>
  );
}

export default TodoListCard;
