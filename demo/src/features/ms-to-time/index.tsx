import { FC, useState, ChangeEvent } from 'react'
import { TextField, MenuItem } from '@mui/material'
import { useTextField } from 'use-mui'
import { convertMsToTime, SupportedUnit } from '@caldwell619/ms'
import numeral from 'numeral'

import { Display } from '@/components'

export const MsToTime: FC = () => {
  const { value: ms, handleChange } = useTextField({ defaultValue: '' })
  const [preferredUnit, setPreferredUnit] = useState<SupportedUnit | undefined>()
  const handlePreferredUnitUpdate = ({ target: { value } }: ChangeEvent<HTMLTextAreaElement>) => {
    setPreferredUnit(value as SupportedUnit)
  }
  const getConvertedTime = () => {
    if (ms === '') return 'Enter milliseconds'
    try {
      return numeral(convertMsToTime(Number(ms), { preferredUnit })!).format('0,0')
    } catch (e) {
      return 'Invalid entry'
    }
  }

  return (
    <Display
      title='MS to Time'
      subtitle='Converts milliseconds into a logical time unit'
      textFieldProps={{
        type: 'number',
        label: 'Milliseconds',
        value: ms,
        onChange: handleChange
      }}
      result={getConvertedTime()}
    >
      <TextField
        sx={{ marginTop: '40px', width: '60%' }}
        select
        label='Preferred Unit'
        value={preferredUnit}
        onChange={handlePreferredUnitUpdate}
        helperText='Best effort will be made to return the time in this unit'
      >
        {supportedUnits.map(({ unit, text }) => (
          <MenuItem key={unit} value={unit}>
            {text}
          </MenuItem>
        ))}
      </TextField>
    </Display>
  )
}

interface SupportedUnitOption {
  unit: SupportedUnit
  text: string
}
const supportedUnits: SupportedUnitOption[] = [
  {
    unit: 'ms',
    text: 'Milliseconds'
  },
  {
    unit: 's',
    text: 'Seconds'
  },
  {
    unit: 'm',
    text: 'Minutes'
  },
  {
    unit: 'h',
    text: 'Hours'
  },
  {
    unit: 'w',
    text: 'Weeks'
  },
  {
    unit: 'd',
    text: 'Days'
  },
  {
    unit: 'mo',
    text: 'Months'
  },
  {
    unit: 'y',
    text: 'Years'
  }
]
