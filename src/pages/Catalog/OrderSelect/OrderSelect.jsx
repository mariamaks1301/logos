import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useParams } from 'react-router-dom';


function OrderSelect({order, setOrder}) {
    
    const {category} = useParams();
  
    const handleChange = (e)=>{
        setOrder(e.target.value)
    }

 

  return (
    <Box  sx={{ minWidth: 120 }}>
      <FormControl  fullWidth>
        <InputLabel id="demo-simple-select-label">Порядок</InputLabel>
        <Select 
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          className='cotalog__aside-select'
          value={order}
          label="Порядок"
          onChange={handleChange}
        >
            
            <MenuItem className='cotalog__aside-item'  value={'default'}>По умолчанию</MenuItem>
            <MenuItem className='cotalog__aside-item'  value={'desc'}>По убыванию</MenuItem>
            <MenuItem className='cotalog__aside-item'  value={'asc'}>По возрастанию</MenuItem>
            <MenuItem className='cotalog__aside-item'  value={'abc'}>По алфавиту</MenuItem>
            <MenuItem className='cotalog__aside-item'  value={'weight'}>По весу</MenuItem>
            <MenuItem className='cotalog__aside-item'  value={'calories'}>По калорийности</MenuItem>

            

        </Select>
      </FormControl>
    </Box>
  );
}
export default OrderSelect