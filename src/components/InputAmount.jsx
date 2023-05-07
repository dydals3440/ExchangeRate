import { Grid, InputAdornment, TextField } from '@mui/material';
import React, { useContext } from 'react';
import { CurrencyContext } from '../context/CurrencyContext';

export default function InputAmount() {
  const { firstAmount, setFirstAmount } = useContext(CurrencyContext);
  return (
    // 그냥 md라고 하면, md사이즈일때 남은 크기를 설정함
    <Grid item xs={12} md>
      <TextField
        value={firstAmount}
        onChange={(e) => setFirstAmount(e.target.value)}
        id='outlined-basic'
        fullWidth
        label='Amount'
        variant='outlined'
        helperText='통화를 선택해주세요!'
        InputProps={{
          type: 'number',
          startAdornment: <InputAdornment position='start'>₩</InputAdornment>,
        }}
      />
    </Grid>
  );
}
