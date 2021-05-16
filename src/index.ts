import { Options } from './interfaces'
import { formatLong, formatShort, parse } from './helpers'

/** Convert a logical time unit to milliseconds */
export const convertTimeToMs = (time: string): number | undefined => {
  if (typeof time === 'string' && time.length > 0) return parse(time as string)
  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(time))
}

/** Convert milliseconds to a logical time unit  */
export const convertMsToTime = (ms: number, { long, preferredUnit }: Options = {}): string | undefined => {
  if (typeof ms !== 'number' || !isFinite(ms)) {
    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(ms))
  }
  return long ? formatLong(ms, preferredUnit) : formatShort(ms, preferredUnit)
}

export * from './interfaces'
