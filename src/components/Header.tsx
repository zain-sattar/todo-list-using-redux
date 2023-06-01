import CardHeader from '@mui/material/CardHeader';
import { Typography } from '@mui/material';

function Header(){
    return(
        <CardHeader
            title={<Typography variant="h4" fontWeight="bold">TODO List</Typography>}
            subheader={<Typography variant="body1" >A Simple React Todo List App</Typography>}
        />
    )
}

export default Header;