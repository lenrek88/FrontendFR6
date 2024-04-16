import Paginations from '../pagination/pagination';
import Select from './select';
import Genres from './genres';
import { useState, useEffect } from 'react';
import { IconButton, Paper, Typography } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import Box from '@mui/material/Box';
import RangeSlider from './range_slider';
import Find from '../find/find';
import { OPTIONS, selectDeafult } from './const';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilm } from '../../redux/asyncActions/fetchFilm';

export default function Filters() {
    const [select, setSelect] = useState(selectDeafult);
    const [clearFiltersKey, setClearFiltersKey] = useState(false);
    const thisPage = useSelector((state) => state.page);
    const urlFind = `https://api.themoviedb.org/3/movie/${select === 'Топ рейтовых' ? 'top_rated' : 'popular'}?language=ru&page=${thisPage}`;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchFilm(urlFind, OPTIONS));
    }, [select, thisPage]);

    function chooseSelect(value) {
        setSelect(value);
    }

    function clearFiltersHandler() {
        setClearFiltersKey(!clearFiltersKey);
    }

    return (
        <Paper
            sx={{ width: '368px', height: '791px', mt: '5px', padding: '25px' }}
            key={clearFiltersKey}
        >
            <Box
                display="flex"
                justifyContent="space-between"
                marginBottom="15px"
            >
                <Typography variant="h6" lineHeight="32px" fontWeight="500">
                    Фильтры
                </Typography>
                <IconButton onClick={clearFiltersHandler}>
                    <ClearIcon></ClearIcon>
                </IconButton>
            </Box>
            <Find />
            <Select
                label={'Сортировать по:'}
                data={['Популярности', 'Топ рейтовых']}
                setSelect={chooseSelect}
            />
            <RangeSlider />
            <Genres />

            <Paginations />
        </Paper>
    );
}
