import CardHeader from '@mui/material/CardHeader';
import { Typography } from '@mui/material';

function Header(){
    console.log("THis is a header component");
    return(
        <CardHeader
            title={<Typography variant="h4" fontWeight="bold">TODO List</Typography>}
            subheader="A simple todo list app"
        />
    )
}

export default Header;