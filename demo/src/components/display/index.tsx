import { FC } from 'react'
import { TextField, Typography, Grid, TextFieldProps } from '@mui/material'

export const Display: FC<Props> = ({ title, subtitle, textFieldProps, result, children }) => {
  return (
    <Grid item xs={12} md={6} sx={{ marginBottom: '170px' }}>
      <Typography variant='h4'>{title}</Typography>
      <Typography variant='subtitle1'>{subtitle}</Typography>
      {children}
      <TextField sx={{ marginTop: '40px', width: '60%' }} {...textFieldProps} />
      <Typography sx={{ marginTop: '40px' }} variant='h5'>
        {result}
      </Typography>
    </Grid>
  )
}

interface Props {
  title: string
  subtitle: string
  textFieldProps: TextFieldProps
  result: string | number
}
