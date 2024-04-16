import {
    Paper,
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions,
    Button,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { addUserToken } from '../../redux/actions';
import { useDispatch } from 'react-redux';

export default function PostToken() {
    const [Token, setToken] = useState('');
    const dispatch = useDispatch();
    function handlerSetToken() {
        document.cookie = `userToken = ${Token}`;
        console.log(Token);
        dispatch(addUserToken(Token));
    }

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer ' + Token,
            },
        };

        fetch('https://api.themoviedb.org/3/account/account_id', options)
            .then((response) => response.json())
            .then((response) => (document.cookie = `userId = ${response.id}`))
            .catch((err) => console.error(err));
    }, []);

    return (
        <Paper>
            <Box
                display="flex"
                width="444px"
                flexdirection="column"
                alignitems="flex-start"
            >
                <Dialog open={true}>
                    <DialogTitle>{'Введите токен'}</DialogTitle>
                    <DialogContent>
                        <TextField
                            value={Token}
                            onChange={(e) => setToken(e.target.value)}
                            sx={{ width: '422px' }}
                            autoFocus
                            fullWidth
                            label="токен"
                        ></TextField>
                    </DialogContent>
                    <DialogActions>
                        <Link to="/">
                            <Button>Отмена</Button>
                        </Link>
                        <Link to="/">
                            <Button onClick={handlerSetToken}>Ок</Button>
                        </Link>
                    </DialogActions>
                </Dialog>
            </Box>
        </Paper>
    );
}
