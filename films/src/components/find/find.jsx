import { FormControl, Box, TextField, Button } from '@mui/material';
import { useState } from 'react';
import getCookie from '../../utils/cookie/getCookie';
import { useDispatch } from 'react-redux';
import { fetchFilm } from '../../redux/asyncActions/fetchFilm';

const Token = getCookie('userToken');

const OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${Token}`,
    },
};

export default function Find() {
    const [text, setText] = useState('');

    const dispatch = useDispatch();

    function findHandler(e) {
        e.preventDefault();
        dispatch(
            fetchFilm(
                `https://api.themoviedb.org/3/search/movie?query=${text}&include_adult=false&language=ru&page=1`,
                OPTIONS
            )
        );
    }

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                height: 35,
                justifyContent: 'space-between',
                padding: '16px',
                marginLeft: '50px',
                marginTop: '30px',
                marginBottom: '20px',
            }}
        >
            <FormControl>
                <TextField
                    fullWidth
                    label="Название фильма"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                ></TextField>
                <Button type="sumbit" onClick={findHandler}>
                    Поиск
                </Button>
            </FormControl>
        </Box>
    );
}
