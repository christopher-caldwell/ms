import { FC } from 'react'
import { useTextField } from 'use-mui'
import { convertTimeToMs } from '@caldwell619/ms'

import { Display } from '@/components'
import { addMsToCurrentDate } from '@/utils'

export const FutureDateTime: FC = () => {
  const { value: time, handleChange } = useTextField({ defaultValue: '' })

  const getConvertedTime = () => {
    if (time === '') return 'Enter a time to see the result'
    try {
      const ms = convertTimeToMs(time)!
      const date = addMsToCurrentDate(ms)
      return date
    } catch (e) {
      return 'Invalid time unit'
    }
  }

  return (
    <Display
      title='Future Date: Time'
      subtitle='Will determine the date in x time from from now.'
      textFieldProps={{
        label: 'Logical time unit',
        value: time,
        onChange: handleChange
      }}
      result={getConvertedTime()}
    />
  )
}
