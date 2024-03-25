import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import { IconButton, Toolbar, Box } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Header() {
    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar >
                    <Typography variant="h5" sx={{ mr: '180vh' }}>Фильмы</Typography>
                    <IconButton sx={{color: "white"}}><AccountCircleIcon></AccountCircleIcon></IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}