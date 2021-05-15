import { SupportedUnit } from './interfaces'

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
  }
}

const formatShortParser = (ms: number, unitNumberOfMs: number, base: number, timeUnit: SupportedUnit): string => {
  return parseFloat((Math.round((ms / unitNumberOfMs) * base) / base).toFixed(3)) + timeUnit
}

/**
 * Short format for `ms`.
 */
export const formatShort = (ms: number, decimal: number, preferredUnit?: SupportedUnit): string => {
  const msAbs = Math.abs(ms)
  const base = Math.pow(10, decimal)
  if (msAbs >= y && (preferredUnit === 'y' || !preferredUnit)) {
    return formatShortParser(ms, y, base, 'y')
  }
  if (msAbs >= mo && (preferredUnit === 'mo' || !preferredUnit)) {
    return formatShortParser(ms, mo, base, 'mo')
  }
  if (msAbs >= w && (preferredUnit === 'w' || !preferredUnit)) {
    return formatShortParser(ms, w, base, 'w')
  }
  if (msAbs >= d && (preferredUnit === 'd' || !preferredUnit)) {
    return formatShortParser(ms, d, base, 'd')
  }
  if (msAbs >= h && (preferredUnit === 'h' || !preferredUnit)) {
    return formatShortParser(ms, h, base, 'h')
  }
  if (msAbs >= m && (preferredUnit === 'm' || !preferredUnit)) {
    return formatShortParser(ms, m, base, 'm')
  }
  if (msAbs >= s && (preferredUnit === 's' || !preferredUnit)) {
    return formatShortParser(ms, s, base, 's')
  }
  return ms + 'ms'
}

/**
 * Formats the value based on whether or not it's plural
 */
export const handlePluralPossibility = (
  ms: number,
  msAbs: number,
  n: number,
  name: string,
  decimal: number
): string => {
  const isPlural = msAbs >= n * 1.5
  const base = Math.pow(10, decimal)
  return parseFloat((Math.round((ms / n) * base) / base).toFixed(3)) + ' ' + name + (isPlural ? 's' : '')
}

/**
 * Long format for `ms`. Prints the full value of the unit
 * @example "1 year"
 */
export const formatLong = (ms: number, decimal: number, preferredUnit?: SupportedUnit): string => {
  const msAbs = Math.abs(ms)
  if (msAbs >= y && (preferredUnit === 'y' || !preferredUnit)) {
    return handlePluralPossibility(ms, msAbs, y, 'year', decimal)
  }

  if (msAbs >= mo && (preferredUnit === 'mo' || !preferredUnit)) {
    return handlePluralPossibility(ms, msAbs, mo, 'month', decimal)
  }

  if (msAbs >= w && (preferredUnit === 'w' || !preferredUnit)) {
    return handlePluralPossibility(ms, msAbs, w, 'week', decimal)
  }

  if (msAbs >= d && (preferredUnit === 'd' || !preferredUnit)) {
    return handlePluralPossibility(ms, msAbs, d, 'day', decimal)
  }

  if (msAbs >= h && (preferredUnit === 'h' || !preferredUnit)) {
    return handlePluralPossibility(ms, msAbs, h, 'hour', decimal)
  }

  if (msAbs >= m && (preferredUnit === 'm' || !preferredUnit)) {
    return handlePluralPossibility(ms, msAbs, m, 'minute', decimal)
  }

  if (msAbs >= s && (preferredUnit === 's' || !preferredUnit)) {
    return handlePluralPossibility(ms, msAbs, s, 'second', decimal)
  }

  if (msAbs >= ms && (preferredUnit === 'ms' || !preferredUnit)) return ms + ' ms'

  // If the preferred unit doesn't match any of the options, re-run without the unit to give the closest estimate
  return formatLong(ms, decimal, undefined)
}
