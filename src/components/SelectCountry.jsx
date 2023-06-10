import { Autocomplete, Grid, Skeleton, TextField } from '@mui/material'
import React from 'react'
import useAxios from '../hooks/useAxios'

export default function SelectCountry(props) {
  const { value, setValue, label } = props
  const [data, loaded, error] = useAxios('https://restcountries.com/v3.1/all')
  // 로딩시
  if (loaded) {
    return (
      <Grid item xs={12} md={3}>
        <Skeleton variant='rounded' height={60} />
      </Grid>
    )
  }
  if (error) {
    return '에러가 발생했습니다!'
  }

  const dataFilter = data.filter((item) => 'currencies' in item)
  const dataCountries = dataFilter.map((item) => {
    return `${item.flag} ${Object.keys(item.currencies)[0]} - ${
      item.name.common
    }`
  })

  return (
    <Grid item xs={12} md={3}>
      <Autocomplete
        disableClearable
        value={value}
        onChange={(newValue, e) => {
          setValue(e)
          console.log(value)
        }}
        options={dataCountries}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    </Grid>
  )
}
