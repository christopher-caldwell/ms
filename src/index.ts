import { Options } from './interfaces'
import { formatLong, formatShort, parse } from './helpers'

/**
 * Parse or format the given `val`.
 */
export const ms = (val: string | number, { long, preferredUnit }: Options = {}): string | number | undefined => {
  const type = typeof val
  if (type === 'string' && (val as string).length > 0) return parse(val as string)

  if (type === 'number' && isFinite(val as number))
    return long ? formatLong(val as number, preferredUnit) : formatShort(val as number, preferredUnit)

  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val))
}

export * from './interfaces'
