import { useDispatch, useSelector } from 'react-redux';
import {
    addFavorite,
    clearFavorite,
    addFoodFromFavorite,
} from '../store/action';
import {
    Box,
    TableHead,
    TableContainer,
    Table,
    TableBody,
    IconButton,
    Typography,
    Button,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { StyledTableCell, StyledTableRow } from './const_UI';

export default function Favorites({ active, setActive }) {
    const dispatch = useDispatch();
    const favorite = useSelector((state) => state.favorite);

    const rows = favorite.map((obj) => {
        const cells = obj.rows.map((field) => {
            let elem;
            if (field.field === 'img') {
                elem = (
                    <img
                        alt="Здесь должно было быть изображение продукта"
                        src={field.item}
                    ></img>
                );
            } else {
                elem = <Box>{field.item}</Box>;
            }
            return <StyledTableCell key={field.field}>{elem}</StyledTableCell>;
        });
        return (
            <StyledTableRow key={obj.id}>
                {cells}
                <StyledTableCell>
                    <IconButton onClick={() => dispatch(addFavorite(obj.id))}>
                        {obj.favorite ? (
                            <FavoriteBorderIcon
                                sx={{
                                    width: '4vh',
                                    height: '4vh',
                                    color: 'white',
                                }}
                            />
                        ) : (
                            <FavoriteIcon
                                sx={{
                                    width: '4vh',
                                    height: '4vh',
                                    color: 'white',
                                }}
                            />
                        )}
                    </IconButton>
                </StyledTableCell>
                <StyledTableCell>
                    <IconButton
                        onClick={() => dispatch(addFoodFromFavorite(obj))}
                    >
                        <AddIcon
                            sx={{ width: '4vh', height: '4vh', color: 'white' }}
                        />
                    </IconButton>
                </StyledTableCell>
            </StyledTableRow>
        );
    });
    return (
        <Box
            className={active ? 'modal active' : 'modal'}
            onClick={() => setActive(false)}
        >
            <Box
                className={active ? 'modal__content active' : 'modal__content'}
                onClick={(e) => e.stopPropagation()}
            >
                <Button
                    size="small"
                    color="error"
                    variant="contained"
                    onClick={(pr) => dispatch(clearFavorite(pr))}
                >
                    Очистить избранное
                </Button>

                <Typography variant="h4" lineHeight="2">
                    Продукты в Избранном:
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
        </Box>
    );
}
