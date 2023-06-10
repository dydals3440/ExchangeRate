import './App.css'
import { Box, Container, Grid, Typography } from '@mui/material'
import InputAmount from './components/InputAmount'
import SelectCountry from './components/SelectCountry'
import SwitchCurrency from './components/SwitchCurrency'
import { useContext, useEffect, useState } from 'react'
import { CurrencyContext } from './context/CurrencyContext'
import axios from 'axios'

function App() {
  const {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    firstAmount,
  } = useContext(CurrencyContext)
  // ['🇶🇦', 'QAR', '-', 'Qatar'] +[1] = QAR
  const [resultCurrency, setResultCurrency] = useState(0)
  const codeFromCurrency = fromCurrency.split(' ')[1]
  const codeToCurrency = toCurrency.split(' ')[1]
  console.log(fromCurrency.toString().split(' '))

  useEffect(() => {
    if (firstAmount) {
      axios('https://api.currencyapi.com/v3/latest', {
        params: {
          apikey: process.env.REACT_APP_VITE_API_KEY,
          base_currency: codeFromCurrency,
          currencies: codeToCurrency,
        },
      })
        .then((response) =>
          setResultCurrency(response.data.data[codeToCurrency].value)
        )
        .catch((error) => console.log(error))
    }
  }, [firstAmount, fromCurrency, toCurrency])

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
  }
  return (
    <Container maxWidth='md' sx={boxStyles}>
      <Typography variant='h5' fontWeight='bold' sx={{ marginBottom: '2rem' }}>
        실시간 환율 계산기
      </Typography>
      <Grid container spacing={2}>
        <InputAmount />
        <SelectCountry
          label='From'
          value={fromCurrency}
          setValue={setFromCurrency}
        />
        <SwitchCurrency />
        <SelectCountry label='To' value={toCurrency} setValue={setToCurrency} />
      </Grid>
      {firstAmount ? (
        <Box sx={{ textAlign: 'left', marginTop: '1rem' }}>
          <Typography>
            {firstAmount} {fromCurrency}
          </Typography>
          <Typography
            variant='h5'
            sx={{ marginTop: '5px', fontWeight: 'bold' }}
          >
            {resultCurrency * firstAmount} {toCurrency}
          </Typography>
        </Box>
      ) : (
        ' '
      )}
    </Container>
  )
}

export default App
