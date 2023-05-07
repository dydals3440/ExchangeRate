import logo from './logo.svg';
import './App.css';
import { Button, Container, Grid, Typography } from '@mui/material';
import InputAmount from './components/InputAmount';
import SelectCountry from './components/SelectCountry';
import SwitchCurrency from './components/SwitchCurrency';

function App({ text }) {
  const boxStyles = {
    background: '#fdfdfd',
    marginTop: '10rem',
    textAlign: 'center',
    color: '#222',
    minHeight: '20rem',
    borderRadius: 2,
    padding: '4rem 2rem',
    // https://box-shadow.dev/
    boxShadow:
      '19px 22px 6px -7px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1)',
    position: 'relative',
  };
  return (
    <Container maxWidth='md' sx={boxStyles}>
      <Typography variant='h5' sx={{ marginBottom: '2rem' }}>
        Stay Ahead with Accurate Conversions
      </Typography>
      <Grid container spacing={2}>
        <InputAmount />
        <SelectCountry text='from' />
        <SwitchCurrency />
        <SelectCountry text='to' />
      </Grid>
    </Container>
  );
}

export default App;
