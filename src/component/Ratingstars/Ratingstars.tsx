import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const labels: { [index: string]: string } = {
  0.5: ' 0.5  Useless',
  1: ' 1  Useless+',
  1.5: '1.5  Poor',
  2: '2  Poor+',
  2.5: '2.5  Ok',
  3: '3  Ok+',
  3.5: '3.5  Good',
  4: '4  Good+',
  4.5: ' 4.5   Excellent',
  5: ' 5  Excellent+',
};

 const Ratingstars=()=> {
  const value = 3.5;

  return (
    <Box
      sx={{
        width: 300,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2, display:"inline-flex",fontWeight:"bolder",color:"#DBDBDB" }}>{labels[value]}</Box>
    </Box>
  );
}


export default Ratingstars