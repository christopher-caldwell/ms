/** Seconds */
const s = 1000
/** Minutes */
const m = s * 60
/** Hours */
const h = m * 60
/** Days */
const d = h * 24
/** Weeks */
const w = d * 7
/** Months */
const mo = d * 30
/** Years */
const y = d * 365.25

/**
 * Parse the given `str` and return milliseconds.
 */
export const parse = (str: string): number | undefined => {
  str = String(str)
  if (str.length > 100) {
    return
  }
  const match =
    /^(-?\d*\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|month?|months?|mo|years?|yrs?|y)?$/i.exec(
      str
    )
  if (!match) {
    return
  }
  const n = parseFloat(match[1])
  const type = (match[2] || 'ms').toLowerCase()
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y
    case 'months':
    case 'month':
    case 'mo':
      return n * mo
    case 'weeks':
    case 'week':
    case 'w':
      return n * w
    case 'days':
    case 'day':
    case 'd':
      return n * d
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n
    default:
      return undefined
  }
}

/**
 * Short format for `ms`.
 */
export const formatShort = (ms: number, decimal: number): string => {
  const msAbs = Math.abs(ms)
  const base = Math.pow(10, decimal)
  if (msAbs >= d) {
    return parseFloat((Math.round((ms / d) * base) / base).toFixed(3)) + 'd'
  }
  if (msAbs >= h) {
    return parseFloat((Math.round((ms / h) * base) / base).toFixed(3)) + 'h'
  }
  if (msAbs >= m) {
    return parseFloat((Math.round((ms / m) * base) / base).toFixed(3)) + 'm'
  }
  if (msAbs >= s) {
    return parseFloat((Math.round((ms / s) * base) / base).toFixed(3)) + 's'
  }
  return ms + 'ms'
}

/**
 * Pluralization helper.
 */

export const plural = (ms: number, msAbs: number, n: number, name: string, decimal: number): string => {
  const isPlural = msAbs >= n * 1.5
  const base = Math.pow(10, decimal)
  return parseFloat((Math.round((ms / n) * base) / base).toFixed(3)) + ' ' + name + (isPlural ? 's' : '')
}

/**
 * Long format for `ms`.
 */
export const formatLong = (ms: number, decimal: number): string => {
  const msAbs = Math.abs(ms)
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day', decimal)
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour', decimal)
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute', decimal)
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second', decimal)
  }
  return ms + ' ms'
}
