import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { debounce } from '@material-ui/core';

 function TitleSearch({title, setTitle}) {

    const handleChange = (e)=>{
        setTitle(e.target.value)
    }

  return (
    <Box sx={{ minWidth: 210 }}
      component="form"
      className='cotalog__aside-select'
      noValidate
      autoComplete="off"
    >
      <TextField defaultValue={title} onChange={debounce(handleChange, 700)} className='cotalog__aside-item'  id="outlined-basic" label="Название" variant="outlined" />
      
    </Box>
  );
}
export default TitleSearch