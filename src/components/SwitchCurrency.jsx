import { Button, Grid } from '@mui/material';
import React from 'react';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

export default function SwitchCurrency() {
  return (
    <Grid item xs={12} md='auto'>
      <Button
        sx={{
          borderRadius: 1,
          height: '100%',
        }}
      >
        <CompareArrowsIcon sx={{ fontSize: 30 }} />
      </Button>
    </Grid>
  );
}