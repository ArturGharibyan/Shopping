
import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularProgres() {
  return (
    <Stack sx={{ color: 'grey.500' }} spacing={3} direction="row" display="flex"  justifyContent="center" alignItems="center" marginTop="300px">
      <CircularProgress color="inherit" />
    </Stack>
  );
}