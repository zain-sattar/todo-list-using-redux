// import React from 'react';

import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import  style from '../styles/style'

function TodoListCard() {
  
  return (
    <Card className='genericStyle' sx={style.cardStyle}>
      <Header></Header>
      <Divider sx={style.dividorStyle}/>
      <Body></Body>
      <Footer></Footer>
    </Card>
  );
}

export default TodoListCard;
