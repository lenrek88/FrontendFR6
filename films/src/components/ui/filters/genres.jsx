import { useContext, useEffect, useState } from "react";
import { BearTokenContext } from "../../context/context.js";
import { Autocomplete, Checkbox, Box} from "@mui/material";
import TextField from "@mui/material/TextField";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';


export default function Genres({keyS}) {

    const [genderList, setGenderList] = useState([]);
    const token = useContext(BearTokenContext);


    const icon = <CheckBoxOutlineBlankIcon fontSize="small" />
    const checkedIcon = <CheckBoxIcon fontSize="small" />
    


        useEffect(() => {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer ' + token
                }
                };
                
                fetch('https://api.themoviedb.org/3/genre/movie/list?language=ru', options)
                .then(response => response.json())
                .then(response => {
                    setGenderList(response.genres);
                })
                .catch(err => console.error(err));
        }, []);

        if (genderList) {
            return (
                <Box sx={{width: '350px'}}>
                <Autocomplete
                    multiple
                    id="checkboxes-tags-demo"
                    options={genderList}
                    disableCloseOnSelect
                    getOptionLabel={(option) => option.name}
                    renderOption={(props, option, { selected }) => (
                        <li {...props}>
                        <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            style={{ marginRight: 8 }}
                            checked={selected}
                        />
                        {option.name}
                        </li>
                    )}
                    style={{ width: '350px' }}
                    renderInput={(params) => (
                        <TextField {...params} label="Жанры" placeholder="Выберите жанры..." />
                    )}
                />
                </Box>
            );
        }
      
}