import { Grid, InputAdornment, TextField } from '@mui/material';
import React from 'react';

export default function InputAmount() {
  return (
    <Grid item xs={12} md>
      <TextField
        id='outlined-basic'
        fullWidth
        label='Amount'
        variant='outlined'
        helperText='Please select your currency'
        InputProps={{
          type: 'number',
          startAdornment: <InputAdornment position='start'>$</InputAdornment>,
        }}
      />
    </Grid>
  );
}
