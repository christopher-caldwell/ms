import { Options } from './interfaces'
import { formatLong, formatShort, parse } from './helpers'

const fallbackOptions: Options = {
  decimal: 0,
}

/**
 * Parse or format the given `val`.
 */
export const ms = (
  val: string | number,
  { decimal = 0, long, preferredUnit }: Options = fallbackOptions
): string | number | undefined => {
  const type = typeof val
  if (type === 'string' && (val as string).length > 0) return parse(val as string)

  if (type === 'number' && isFinite(val as number))
    return long ? formatLong(val as number, decimal, preferredUnit) : formatShort(val as number, decimal, preferredUnit)

  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val))
}

export * from './interfaces'
