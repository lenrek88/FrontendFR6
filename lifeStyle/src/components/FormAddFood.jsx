import { Box, FormControl, TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { SERVER_URL } from './const';
import Favorites from './Favorites';
import { useState } from 'react';
import { changeAvailabilityFood } from '../store/action';
export function FormAddFood({ clearToFood }) {
    const [value, setValue] = useState('');
    const [favorites, setFavorites] = useState(false);

    const addFood = (pr) => dispatch(changeAvailabilityFood(pr));
    const dispatch = useDispatch();
    function changeValue(e) {
        setValue(e.target.value);
    }

    function addToFood(e) {
        e.preventDefault();
        if (value !== '') {
            const url = `${SERVER_URL}${value}`;
            fetch(url)
                .then((responce) => responce.json())
                .then((result) => {
                    const productName = result.product.product_name;
                    const proteins = result.product.nutriments.proteins;
                    const fat = result.product.nutriments.fat;
                    const carbohydrates =
                        result.product.nutriments.carbohydrates;
                    const img = result.product.image_front_thumb_url;
                    const paylaod = [
                        productName,
                        proteins,
                        fat,
                        carbohydrates,
                        img,
                    ];
                    addFood(paylaod);
                    setValue('');
                });
        } else {
            alert('Введите номер штрих-кода!');
        }
    }

    return (
        <Box>
            <FormControl
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'row',
                }}
            >
                <TextField
                    variant="standard"
                    autoFocus
                    label="Введите штриховой код"
                    sx={{
                        '& label': {
                            color: 'white',
                            '&.Mui-focused': {
                                color: '#c8ae04',
                            },
                        },
                        input: {
                            color: '#c8ae04',
                            fontSize: 'calc(10px + 2vmin)',
                            width: 'calc(500px + 2vmin)',
                        },
                    }}
                    value={value}
                    onChange={changeValue}
                />
                <Button size="small" variant="contained" onClick={addToFood}>
                    Добавить еду
                </Button>
                <Button
                    size="small"
                    color="error"
                    variant="contained"
                    onClick={clearToFood}
                >
                    Очистить еду
                </Button>
                <Button
                    size="small"
                    color="warning"
                    variant="contained"
                    onClick={(e) => {
                        e.preventDefault();
                        setFavorites(true);
                    }}
                >
                    Избранное
                </Button>
            </FormControl>
            <Favorites active={favorites} setActive={setFavorites} />
        </Box>
    );
}
