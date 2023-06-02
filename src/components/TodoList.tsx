import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'
import { Box,Typography } from '@mui/material';
import todoListStyle from '../styles/todoList';
function TodoList(){

    return(
      <div>
      <CardContent sx={todoListStyle.body}>
        <Box sx={todoListStyle.todoTaskBoxStyle}>
            <Typography variant="h6" sx={todoListStyle.todoTaskStyle}>Hello world</Typography>
            <IconButton aria-label="edit">
              <EditIcon  sx={{ color: 'white' }}/>
            </IconButton>
            <IconButton aria-label="delete">
              <DeleteIcon sx={{ color: 'white' }}/>
            </IconButton>
        </Box>

        <Box sx={todoListStyle.todoTaskBoxStyle}>
            <Typography variant="h6" sx={{ ...todoListStyle.todoTaskStyle, ...todoListStyle.completedTaskStyle }}>Hello world</Typography>
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

export default TodoList;