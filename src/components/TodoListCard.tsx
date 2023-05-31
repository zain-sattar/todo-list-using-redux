import React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const cardStyle = {
  width: 500,
  height: 700,
  margin: 'auto',
  marginTop: '100px',
  display: 'flex',
  flexDirection: 'column',
};
const footerStyle = {
  marginTop: 'auto',
  border:"1px solid red"
};

function TodoListCard() {
  return (
    <Card sx={{...cardStyle}}>
      <CardHeader
       title="TODO List"
       subheader="A simple todo list app"
      />

      <Divider/>

      <CardContent>
        
      </CardContent>
      
      <Box sx={footerStyle}>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Box>
      
    </Card>
  );
}

export default TodoListCard;
