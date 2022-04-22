import format from 'date-fns/format'
import addMs from 'date-fns/addMilliseconds'

export const formatSafely = (time: string | number): string => {
  try {
    const date = new Date(time)
    return format(date, 'MMMM do, yyyy')
  } catch (e) {
    return 'Invalid date'
  }
}

export const addMsToCurrentDate = (ms: number) => {
  try {
    const futureDate = addMs(new Date(), ms)
    return format(futureDate, 'MMMM do, yyyy : hh:mm aaaa')
  } catch (e) {
    return 'Invalid date'
  }
}
