import { FC } from 'react'
import { Typography, Grid, styled } from '@mui/material'

import { TimeToMs, MsToTime, FutureDateTime, FutureDateMs } from './features'

const App: FC = () => {
  return (
    <Root>
      <Grid container sx={{ padding: '0 50px' }}>
        <Grid item xs={12}>
          <Typography variant='h4'>@caldwell619/ms</Typography>
          <Typography sx={{ marginBottom: '10vh' }} variant='subtitle1'>
            Tiny time formatting utility forked from vercel/ms
          </Typography>
        </Grid>
        <TimeToMs />
        <MsToTime />
        <FutureDateMs />
        <FutureDateTime />
      </Grid>
    </Root>
  )
}

const Root = styled('div')`
  padding: 1% 2% 10vh 2%;
  width: 100%;
  min-height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & a {
    text-decoration: none;
    color: ${({ theme: { palette } }) => palette.primary.main};
  }
`

export default App
