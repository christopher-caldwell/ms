import { FC } from 'react'
import { Grid, styled } from '@mui/material'
import { TimeToMs, MsToTime, FutureDateTime, FutureDateMs } from './features'

const App: FC = () => {
  return (
    <Root>
      <Grid container sx={{ padding: '0 50px' }}>
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
