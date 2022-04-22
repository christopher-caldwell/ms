import { FC } from 'react'
import { useTextField } from 'use-mui'
import { convertTimeToMs } from '@caldwell619/ms'
import numeral from 'numeral'

import { Display } from '@/components'

export const TimeToMs: FC = () => {
  const { value: time, handleChange } = useTextField({ defaultValue: '' })

  const getConvertedTime = () => {
    if (time === '') return 'Enter a time to see the result'
    try {
      const result = convertTimeToMs(time)
      const formattedMs = numeral(result).format('0,0')
      return `Result: ${formattedMs}ms`
    } catch (e) {
      return 'Invalid time unit'
    }
  }

  return (
    <Display
      title='Time to MS'
      subtitle='Converts a logical time unit to milliseconds.'
      textFieldProps={{
        label: 'Logical time unit',
        value: time,
        onChange: handleChange
      }}
      result={getConvertedTime()}
    />
  )
}
