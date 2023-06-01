// import React from 'react';

import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import  style from '../styles/style'
import '../styles/app.css'

function TodoListCard() {
  console.log('This is a card component');

  return (
    <Card sx={style.cardStyle}>
      <Header></Header>
      <Divider/>
      <Body></Body>
      <Footer></Footer>
    </Card>
  );
}

export default TodoListCard;
