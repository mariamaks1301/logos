import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { menuData } from '../../../utils/menuData';
import { useNavigate, useParams } from 'react-router-dom';
import './categorySelect.scss';

function CategoySelect() {
    const navigate = useNavigate();
    const {category} = useParams();
  
    const handleChange = (e)=>{
        navigate(`/cotalog/${e.target.value}`)
    }

 

  return (
    <Box  sx={{ minWidth: 120 }}>
      <FormControl  fullWidth>
        <InputLabel id="demo-simple-select-label">Категория</InputLabel>
        <Select 
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          className='cotalog__aside-select'
          value={category}
          label="Категория"
          onChange={handleChange}
        >
            
            <MenuItem    value="all">Все категории</MenuItem>

                {
                menuData.map((item)=>(
                    <MenuItem   key={item.en} value={item.en}>{item.ru}</MenuItem>
                ))
                } 
          
        </Select>
      </FormControl>
    </Box>
  );
}
export default CategoySelect