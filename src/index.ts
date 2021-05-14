import { Options } from './interfaces'
import { formatLong, formatShort, parse } from './helpers'

/**
 * Parse or format the given `val`.
 */
export const ms = (val: string | number, options: Options = {}): string | number | undefined => {
  const decimal = options.decimal || 0
  const type = typeof val
  if (type === 'string' && (val as string).length > 0) {
    return parse(val as string)
  } else if (type === 'number' && isFinite(val as number)) {
    return options.long ? formatLong(val as number, decimal) : formatShort(val as number, decimal)
  }
  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val))
}

export * from './interfaces'
