import { SupportedUnit } from './interfaces'

export const createMsFromSeconds = (numberOfSeconds: number): number => numberOfSeconds * 1000
export const createMsFromMinutes = (numberOfMinutes: number): number => numberOfMinutes * createMsFromSeconds(60)
export const createMsFromHours = (numberOfHours: number): number => numberOfHours * createMsFromMinutes(60)
export const createMsFromDays = (numberOfDays: number): number => numberOfDays * createMsFromHours(24)
export const createMsFromWeeks = (numberOfWeeks: number): number => numberOfWeeks * createMsFromDays(7)
export const createMsFromMonths = (numberOfMonths: number): number => numberOfMonths * createMsFromDays(30)
export const createMsFromYears = (numberOfYears: number): number => numberOfYears * createMsFromDays(365.25)

/** Seconds */
const s = createMsFromSeconds(1)
/** Minutes */
const m = createMsFromMinutes(1)
/** Hours */
const h = createMsFromHours(1)
/** Days */
const d = createMsFromDays(1)
/** Weeks */
const w = createMsFromWeeks(1)
/** Months */
const mo = createMsFromDays(30)
/** Years */
const y = createMsFromYears(1)

export const maximumInputLength = 100

/**
 * Parse the given `str` and return milliseconds.
 */
export const parse = (str: string): number | undefined => {
  str = String(str)
  if (str.length > maximumInputLength) {
    return
  }
  const match =
    /^(-?\d*\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|wk?|wks?|w|month?|months?|mon?|mo|years?|yrs?|y)?$/i.exec(
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
    case 'mon':
    case 'mo':
      return n * mo
    case 'weeks':
    case 'week':
    case 'wks':
    case 'wk':
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

const formatShortParser = (ms: number, unitNumberOfMs: number, timeUnit: SupportedUnit): string => {
  return Math.round(ms / unitNumberOfMs) + timeUnit
}

/**
 * Short format for `ms`.
 */
export const formatShort = (ms: number, preferredUnit?: SupportedUnit): string => {
  const msAbs = Math.abs(ms)
  if (msAbs >= y && (preferredUnit === 'y' || !preferredUnit)) {
    return formatShortParser(ms, y, 'y')
  }
  if (msAbs >= mo && (preferredUnit === 'mo' || !preferredUnit)) {
    return formatShortParser(ms, mo, 'mo')
  }
  if (msAbs >= w && (preferredUnit === 'w' || !preferredUnit)) {
    return formatShortParser(ms, w, 'w')
  }
  if (msAbs >= d && (preferredUnit === 'd' || !preferredUnit)) {
    return formatShortParser(ms, d, 'd')
  }
  if (msAbs >= h && (preferredUnit === 'h' || !preferredUnit)) {
    return formatShortParser(ms, h, 'h')
  }
  if (msAbs >= m && (preferredUnit === 'm' || !preferredUnit)) {
    return formatShortParser(ms, m, 'm')
  }
  if (msAbs >= s && (preferredUnit === 's' || !preferredUnit)) {
    return formatShortParser(ms, s, 's')
  }

  if (msAbs >= ms && (preferredUnit === 'ms' || !preferredUnit)) return ms + 'ms'
  // If the preferred unit doesn't match any of the options, re-run without the unit to give the closest estimate
  return formatShort(ms)
}

/**
 * Formats the value based on whether or not it's plural
 */
export const handlePluralPossibility = (ms: number, msAbs: number, n: number, name: string): string => {
  const isPlural = msAbs >= n * 1.5
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '')
}

/**
 * Long format for `ms`. Prints the full value of the unit
 * @example "1 year"
 */
export const formatLong = (ms: number, preferredUnit?: SupportedUnit): string => {
  const msAbs = Math.abs(ms)
  if (msAbs >= y && (preferredUnit === 'y' || !preferredUnit)) {
    return handlePluralPossibility(ms, msAbs, y, 'year')
  }

  if (msAbs >= mo && (preferredUnit === 'mo' || !preferredUnit)) {
    return handlePluralPossibility(ms, msAbs, mo, 'month')
  }

  if (msAbs >= w && (preferredUnit === 'w' || !preferredUnit)) {
    return handlePluralPossibility(ms, msAbs, w, 'week')
  }

  if (msAbs >= d && (preferredUnit === 'd' || !preferredUnit)) {
    return handlePluralPossibility(ms, msAbs, d, 'day')
  }

  if (msAbs >= h && (preferredUnit === 'h' || !preferredUnit)) {
    return handlePluralPossibility(ms, msAbs, h, 'hour')
  }

  if (msAbs >= m && (preferredUnit === 'm' || !preferredUnit)) {
    return handlePluralPossibility(ms, msAbs, m, 'minute')
  }

  if (msAbs >= s && (preferredUnit === 's' || !preferredUnit)) {
    return handlePluralPossibility(ms, msAbs, s, 'second')
  }

  if (msAbs >= ms && (preferredUnit === 'ms' || !preferredUnit)) return ms + ' ms'

  // If the preferred unit doesn't match any of the options, re-run without the unit to give the closest estimate
  return formatLong(ms)
}
