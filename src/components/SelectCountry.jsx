import { Autocomplete, Grid, TextField } from '@mui/material';
import React from 'react';

export default function SelectCountry({ text }) {
  return (
    <Grid item xs={12} md={3}>
      <Autocomplete
        value='국가1'
        options={['국가1', '국가2']}
        renderInput={(params) => <TextField {...params} label={text} />}
      />
    </Grid>
  );
}
