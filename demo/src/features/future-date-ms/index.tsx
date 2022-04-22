import { FC } from 'react'
import { useTextField } from 'use-mui'

import { Display } from '@/components'
import { addMsToCurrentDate } from '@/utils'

// Realizing this has nothing to do with lib
export const FutureDateMs: FC = () => {
  const { value: ms, handleChange } = useTextField({ defaultValue: '' })

  const getConvertedTime = () => {
    if (ms === '') return 'Enter a time to see the result'
    return addMsToCurrentDate(Number(ms))
  }

  return (
    <Display
      title='Future Date: MS'
      subtitle='Will determine the date in x milliseconds from now.'
      textFieldProps={{
        type: 'number',
        label: 'Milliseconds',
        value: ms,
        onChange: handleChange
      }}
      result={getConvertedTime()}
    />
  )
}
