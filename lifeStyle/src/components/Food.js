import { useDispatch, useSelector } from 'react-redux';
import {
    changeAvailabilityFood,
    changeCellItem,
    clearAvailabilityFood,
    clearAvailabilityFoodItem,
    editCellItemSEnd,
    editCellItemStart,
    addFavorite,
} from '../store/action';
import { useEffect, useState } from 'react';
import Favorites from './Favorites';
import { SERVER_URL } from './const';
import {
    Box,
    TextField,
    TableContainer,
    TableHead,
    TableBody,
    Table,
    FormControl,
    Button,
    Typography,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import { StyledTableCell, StyledTableRow } from './const_UI';

export function Food() {
    const dispatch = useDispatch();
    const addFood = (pr) => dispatch(changeAvailabilityFood(pr));
    const clearFood = (pr) => dispatch(clearAvailabilityFood(pr));
    const clearFoodItem = (pr) => dispatch(clearAvailabilityFoodItem(pr));
    const food = useSelector((state) => state.food);
    const favorite = useSelector((state) => state.favorite);
    const [value, setValue] = useState('');
    const [favorites, setFavorites] = useState(false);

    useEffect(() => {
        localStorage.setItem('state_food', JSON.stringify(food));
        localStorage.setItem('state_favorite', JSON.stringify(favorite));
    }, [food]);

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

    function clearToFood(e) {
        e.preventDefault();
        clearFood();
    }

    const rows = food.map((obj) => {
        const cells = obj.rows.map((field) => {
            let elem;
            if (!field.isEdit) {
                if (field.field === 'img') {
                    elem = (
                        <img
                            alt="Здесь должно было быть изображение продукта"
                            src={field.item}
                        ></img>
                    );
                } else {
                    elem = (
                        <Box
                            onClick={() =>
                                dispatch(editCellItemStart(obj.id, field.field))
                            }
                        >
                            {field.item}
                        </Box>
                    );
                }
            } else {
                elem = (
                    <TextField
                        variant="standard"
                        autoFocus
                        sx={{
                            input: {
                                color: '#c8ae04',
                                fontSize: 'calc(10px + 2vmin)',
                                width: 'calc(200px + 2vmin)',
                                textAlign: 'center',
                            },
                        }}
                        type="text"
                        value={field.item}
                        onChange={(event) =>
                            dispatch(
                                changeCellItem(
                                    event.target.value,
                                    obj.id,
                                    field.field
                                )
                            )
                        }
                        onBlur={() =>
                            dispatch(editCellItemSEnd(obj.id, field.field))
                        }
                    />
                );
            }
            return <StyledTableCell key={field.field}>{elem}</StyledTableCell>;
        });

        return (
            <StyledTableRow key={obj.id}>
                {cells}
                <StyledTableCell>
                    <Box onClick={() => clearFoodItem(obj.id)}>
                        <DeleteIcon
                            sx={{
                                width: '4vh',
                                height: '4vh',
                                color: 'white',
                            }}
                        />
                    </Box>
                </StyledTableCell>
                <StyledTableCell align="center">
                    <Box onClick={() => dispatch(addFavorite(obj.id))}>
                        {obj.favorite ? (
                            <FavoriteIcon
                                sx={{
                                    width: '4vh',
                                    height: '4vh',
                                    color: 'white',
                                }}
                            />
                        ) : (
                            <FavoriteBorderIcon
                                sx={{
                                    width: '4vh',
                                    height: '4vh',
                                    color: 'white',
                                }}
                            />
                        )}
                    </Box>
                </StyledTableCell>
            </StyledTableRow>
        );
    });
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

            <Typography variant="h3" lineHeight="3">
                Продукты в наличии:
            </Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>Наименование:</StyledTableCell>
                            <StyledTableCell>Изображение:</StyledTableCell>
                            <StyledTableCell>Количество:</StyledTableCell>
                            <StyledTableCell>Белки:</StyledTableCell>
                            <StyledTableCell>Жиры:</StyledTableCell>
                            <StyledTableCell>Углеводы:</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>{rows}</TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
