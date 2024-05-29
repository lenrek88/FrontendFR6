import { Box, FormControl, TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { SERVER_URL } from './const';
import Favorites from './Favorites';
import { useState } from 'react';
import { changeAvailabilityFood } from '../store/action';
import FormAddFoodFormControl from './FormAddFoodFormControl';
export function FormAddFood({ clearToFood }) {
    const [value, setValue] = useState('');
    const [favorites, setFavorites] = useState(false);

    const dispatch = useDispatch();
    const addFood = (pr) => dispatch(changeAvailabilityFood(pr));
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
            <FormAddFoodFormControl
                value={value}
                changeValue={changeValue}
                addToFood={addToFood}
                clearToFood={clearToFood}
                setFavorites={setFavorites}
            />
            <Favorites active={favorites} setActive={setFavorites} />
        </Box>
    );
}
