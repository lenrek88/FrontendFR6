import Paginations from "../pagination/pagination";
import Select from "./select";
import Genres from "./genres";
import { useReducer } from "react";
import { filtersReducer } from "../../reducer/reducer";
import { initalState } from "../../reducer/reducer";
import { BearTokenContext } from "../../context/context";
import { IconButton, Paper, Typography } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import Box from "@mui/material/Box";
import RangeSlider from "./range_slider";

const bearToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZWVjYzlmZjljMTIxY2YwYmE4MmY3MTMwZDI3ZGM0ZSIsInN1YiI6IjY0ZGU1NDYzNTllOGE5MDBhYzA4YWVjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Pam84glnTcCGawnbZGp__aoXmtoPIa6DV-jHqO6z0bc';

export default function Filters() {

    const [filters, dispatch] = useReducer(filtersReducer, initalState);


    function clearFiltersHandler() {
        dispatch({type: 'clear'})
    }

    return(
        <Paper sx={{width: '368px', height: '791px', mt: '40px', ml: '15px', padding: '25px'}} key={filters.keyS}>
            <Box display='flex' justifyContent='space-between' marginBottom="15px">
                <Typography variant="h6" lineHeight="32px" fontWeight="500">Фильтры</Typography>
                <IconButton onClick={clearFiltersHandler}><ClearIcon></ClearIcon></IconButton>
            </Box>
          
            <BearTokenContext.Provider value={bearToken}>
                <Select label={"Сортировать по:"} data={['Популярности','Убыванию']}/>
                <RangeSlider />
                <Genres />

                <Paginations/>
            </BearTokenContext.Provider>
        </Paper>
    );
}