import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import {changeGenre} from "../../../redux/reducers/cinema";
import {useDispatch} from "react-redux";

const FilmsSort = () => {
    const dispatch = useDispatch()
    const handleChange = (event) => {
        dispatch(changeGenre(event.target.value))
    };
    return (
        <Box className="films__filter-box" sx={{ minWidth: 250 }}>
            <FormControl fullWidth>
                <InputLabel style={{color: 'white'}} id="demo-simple-select-label">Жанр</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value=''
                    label="fasf"
                    onChange={handleChange}
                >
                            <MenuItem className="films__filter-item"  value="">По умолчанию</MenuItem>
                            <MenuItem className="films__filter-item"  value="Приключения">Приключения</MenuItem>
                            <MenuItem className="films__filter-item"  value="Комедия">Комедия</MenuItem>
                            <MenuItem className="films__filter-item"  value="Криминал">Криминал</MenuItem>
                            <MenuItem className="films__filter-item"  value="Фантастика">Фантастика</MenuItem>
                            <MenuItem className="films__filter-item"  value="Боевик">Боевик</MenuItem>
                            <MenuItem className="films__filter-item"  value="драма">Драма</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default FilmsSort;