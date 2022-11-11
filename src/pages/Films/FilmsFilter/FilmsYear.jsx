import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import {changeYear} from "../../../redux/reducers/cinema";
import {useDispatch} from "react-redux";

const FilmsYear = () => {

    const dispatch = useDispatch()
    const handleChange = (event) => {
        dispatch(changeYear(event.target.value))
    };

    return (
        <Box className="films__filter-box" sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel style={{color: 'white'}} id="demo-simple-select-label">Год</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value=''
                    label="fasf"
                    onChange={handleChange}
                >
                    <MenuItem className="films__filter-item"  value="">По умолчанию</MenuItem>
                    <MenuItem className="films__filter-item"  value={2022}>2022</MenuItem>
                    <MenuItem className="films__filter-item"  value={2021}>2021</MenuItem>
                    <MenuItem className="films__filter-item"  value={2019}>2019</MenuItem>
                    <MenuItem className="films__filter-item"  value={2018}>2018</MenuItem>
                    <MenuItem className="films__filter-item"  value={2017}>2017</MenuItem>
                    <MenuItem className="films__filter-item"  value={2016}>2016</MenuItem>
                    <MenuItem className="films__filter-item"  value={2011}>2011</MenuItem>
                    <MenuItem className="films__filter-item"  value={2010}>2010</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default FilmsYear;