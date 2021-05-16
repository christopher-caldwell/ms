import { convertMsToTime } from '@/index'

import {
  createMsFromSeconds,
  createMsFromMinutes,
  createMsFromHours,
  createMsFromWeeks,
  createMsFromMonths,
  createMsFromYears,
  createMsFromDays,
} from '@/helpers'

/** Should resolve to 3d */
const roundingInputMs = 234234234

describe('convertMsToTime(number, { long: true })', () => {
  it('should not throw an error', () => {
    expect(() => {
      convertMsToTime(500, { long: true })
    }).not.toThrowError()
  })

  it('should support milliseconds', () => {
    expect(convertMsToTime(500, { long: true })).toBe('500 ms')
    expect(convertMsToTime(1100, { long: true, preferredUnit: 'ms' })).toBe('1100 ms')
    expect(convertMsToTime(1100, { long: true })).toBe('1 second')

    expect(convertMsToTime(-500, { long: true })).toBe('-500 ms')
    expect(convertMsToTime(-1100, { long: true, preferredUnit: 'ms' })).toBe('-1100 ms')
    expect(convertMsToTime(-1100, { long: true })).toBe('-1 second')
  })

  it('should support seconds', () => {
    expect(convertMsToTime(createMsFromSeconds(1), { long: true })).toBe('1 second')
    expect(convertMsToTime(createMsFromSeconds(1.2), { long: true })).toBe('1 second')
    expect(convertMsToTime(createMsFromSeconds(10), { long: true })).toBe('10 seconds')
    expect(convertMsToTime(createMsFromSeconds(65), { long: true, preferredUnit: 's' })).toBe('65 seconds')
    expect(convertMsToTime(createMsFromSeconds(65), { long: true })).toBe('1 minute')

    expect(convertMsToTime(createMsFromSeconds(-1), { long: true })).toBe('-1 second')
    expect(convertMsToTime(createMsFromSeconds(-1.2), { long: true })).toBe('-1 second')
    expect(convertMsToTime(createMsFromSeconds(-10), { long: true })).toBe('-10 seconds')
    expect(convertMsToTime(createMsFromSeconds(-65), { long: true, preferredUnit: 's' })).toBe('-65 seconds')
    expect(convertMsToTime(createMsFromSeconds(-65), { long: true })).toBe('-1 minute')
  })

  it('should support minutes', () => {
    expect(convertMsToTime(createMsFromMinutes(1), { long: true })).toBe('1 minute')
    expect(convertMsToTime(createMsFromMinutes(1.2), { long: true })).toBe('1 minute')
    expect(convertMsToTime(createMsFromMinutes(10), { long: true })).toBe('10 minutes')
    expect(convertMsToTime(createMsFromMinutes(65), { long: true, preferredUnit: 'm' })).toBe('65 minutes')
    expect(convertMsToTime(createMsFromMinutes(65), { long: true })).toBe('1 hour')

    expect(convertMsToTime(createMsFromMinutes(-1), { long: true })).toBe('-1 minute')
    expect(convertMsToTime(createMsFromMinutes(-1.2), { long: true })).toBe('-1 minute')
    expect(convertMsToTime(createMsFromMinutes(-10), { long: true })).toBe('-10 minutes')
    expect(convertMsToTime(createMsFromMinutes(-65), { long: true, preferredUnit: 'm' })).toBe('-65 minutes')
    expect(convertMsToTime(createMsFromMinutes(-65), { long: true })).toBe('-1 hour')
  })

  it('should support hours', () => {
    expect(convertMsToTime(createMsFromHours(1), { long: true })).toBe('1 hour')
    expect(convertMsToTime(createMsFromHours(1.2), { long: true })).toBe('1 hour')
    expect(convertMsToTime(createMsFromHours(10), { long: true })).toBe('10 hours')
    expect(convertMsToTime(createMsFromHours(25), { long: true, preferredUnit: 'h' })).toBe('25 hours')
    expect(convertMsToTime(createMsFromHours(25), { long: true })).toBe('1 day')

    expect(convertMsToTime(createMsFromHours(-1), { long: true })).toBe('-1 hour')
    expect(convertMsToTime(createMsFromHours(-1.2), { long: true })).toBe('-1 hour')
    expect(convertMsToTime(createMsFromHours(-10), { long: true })).toBe('-10 hours')
    expect(convertMsToTime(createMsFromHours(-25), { long: true, preferredUnit: 'h' })).toBe('-25 hours')
    expect(convertMsToTime(createMsFromHours(-25), { long: true })).toBe('-1 day')
  })

  it('should support days', () => {
    expect(convertMsToTime(createMsFromDays(1), { long: true })).toBe('1 day')
    expect(convertMsToTime(createMsFromDays(1.2), { long: true })).toBe('1 day')
    expect(convertMsToTime(createMsFromDays(10), { long: true, preferredUnit: 'd' })).toBe('10 days')
    // Without unit, rounded down is still one week
    expect(convertMsToTime(createMsFromDays(10), { long: true })).toBe('1 week')

    expect(convertMsToTime(createMsFromDays(-1), { long: true })).toBe('-1 day')
    expect(convertMsToTime(createMsFromDays(-1.2), { long: true })).toBe('-1 day')
    expect(convertMsToTime(createMsFromDays(-10), { long: true, preferredUnit: 'd' })).toBe('-10 days')
    // Without unit, rounded down is still one week
    expect(convertMsToTime(createMsFromDays(-10), { long: true })).toBe('-1 week')
  })

  it('should support weeks', () => {
    expect(convertMsToTime(createMsFromWeeks(1), { long: true })).toBe('1 week')
    expect(convertMsToTime(createMsFromWeeks(1.2), { long: true })).toBe('1 week')
    expect(convertMsToTime(createMsFromWeeks(10), { long: true, preferredUnit: 'w' })).toBe('10 weeks')
    expect(convertMsToTime(createMsFromWeeks(10), { long: true })).toBe('2 months')

    expect(convertMsToTime(createMsFromWeeks(-1), { long: true })).toBe('-1 week')
    expect(convertMsToTime(createMsFromWeeks(-1.2), { long: true })).toBe('-1 week')
    expect(convertMsToTime(createMsFromWeeks(-10), { long: true, preferredUnit: 'w' })).toBe('-10 weeks')
    expect(convertMsToTime(createMsFromWeeks(-10), { long: true })).toBe('-2 months')
  })

  it('should support months', () => {
    expect(convertMsToTime(createMsFromMonths(1), { long: true })).toBe('1 month')
    expect(convertMsToTime(createMsFromMonths(1.2), { long: true })).toBe('1 month')
    expect(convertMsToTime(createMsFromMonths(10), { long: true })).toBe('10 months')
    expect(convertMsToTime(createMsFromMonths(13), { long: true, preferredUnit: 'mo' })).toBe('13 months')
    expect(convertMsToTime(createMsFromMonths(13), { long: true })).toBe('1 year')

    expect(convertMsToTime(createMsFromMonths(-1), { long: true })).toBe('-1 month')
    expect(convertMsToTime(createMsFromMonths(-1.2), { long: true })).toBe('-1 month')
    expect(convertMsToTime(createMsFromMonths(-10), { long: true })).toBe('-10 months')
    expect(convertMsToTime(createMsFromMonths(-13), { long: true, preferredUnit: 'mo' })).toBe('-13 months')
    expect(convertMsToTime(createMsFromMonths(-13), { long: true })).toBe('-1 year')
  })

  it('should support years', () => {
    expect(convertMsToTime(createMsFromYears(1), { long: true })).toBe('1 year')
    expect(convertMsToTime(createMsFromYears(1.025), { long: true })).toBe('1 year')
    expect(convertMsToTime(createMsFromYears(1.2), { long: true })).toBe('1 year')
    expect(convertMsToTime(createMsFromYears(10), { long: true })).toBe('10 years')

    expect(convertMsToTime(createMsFromYears(-1), { long: true })).toBe('-1 year')
    expect(convertMsToTime(createMsFromYears(-1.2), { long: true })).toBe('-1 year')
    expect(convertMsToTime(createMsFromYears(-10), { long: true })).toBe('-10 years')
  })

  it('should round', () => {
    expect(convertMsToTime(roundingInputMs, { long: true })).toBe('3 days')

    expect(convertMsToTime(-roundingInputMs, { long: true })).toBe('-3 days')
  })
})

describe('convertMsToTime(number)', () => {
  it('should not throw an error', () => {
    expect(() => {
      convertMsToTime(500)
    }).not.toThrowError()
  })

  it('should support milliseconds', () => {
    expect(convertMsToTime(500)).toBe('500ms')

    expect(convertMsToTime(-500)).toBe('-500ms')
  })

  it('should support seconds', () => {
    expect(convertMsToTime(createMsFromSeconds(1))).toBe('1s')
    expect(convertMsToTime(createMsFromSeconds(10))).toBe('10s')

    expect(convertMsToTime(createMsFromSeconds(-1))).toBe('-1s')
    expect(convertMsToTime(createMsFromSeconds(-10))).toBe('-10s')
  })

  it('should support minutes', () => {
    expect(convertMsToTime(createMsFromMinutes(1))).toBe('1m')
    expect(convertMsToTime(createMsFromMinutes(10))).toBe('10m')

    expect(convertMsToTime(createMsFromMinutes(-1))).toBe('-1m')
    expect(convertMsToTime(createMsFromMinutes(-10))).toBe('-10m')
  })

  it('should support hours', () => {
    expect(convertMsToTime(createMsFromHours(1))).toBe('1h')
    expect(convertMsToTime(createMsFromHours(10))).toBe('10h')

    expect(convertMsToTime(createMsFromHours(-1))).toBe('-1h')
    expect(convertMsToTime(createMsFromHours(-10))).toBe('-10h')
  })

  it('should support days', () => {
    expect(convertMsToTime(createMsFromDays(1))).toBe('1d')
    expect(convertMsToTime(createMsFromDays(1.2))).toBe('1d')
    expect(convertMsToTime(createMsFromDays(10), { preferredUnit: 'd' })).toBe('10d')
    // Without preferred unit, this is over 1 week
    expect(convertMsToTime(createMsFromDays(10))).toBe('1w')

    expect(convertMsToTime(createMsFromDays(-1))).toBe('-1d')
    expect(convertMsToTime(createMsFromDays(-1.2))).toBe('-1d')
    expect(convertMsToTime(createMsFromDays(-10), { preferredUnit: 'd' })).toBe('-10d')
    // Without preferred unit, this is over 1 week
    expect(convertMsToTime(createMsFromDays(-10))).toBe('-1w')
  })

  it('should support weeks', () => {
    expect(convertMsToTime(createMsFromWeeks(1))).toBe('1w')
    expect(convertMsToTime(createMsFromWeeks(1.2))).toBe('1w')
    expect(convertMsToTime(createMsFromWeeks(10), { preferredUnit: 'w' })).toBe('10w')
    expect(convertMsToTime(createMsFromWeeks(10))).toBe('2mo')

    expect(convertMsToTime(createMsFromWeeks(-1))).toBe('-1w')
    expect(convertMsToTime(createMsFromWeeks(-1.2))).toBe('-1w')
    expect(convertMsToTime(createMsFromWeeks(-10), { preferredUnit: 'w' })).toBe('-10w')
    expect(convertMsToTime(createMsFromWeeks(-10))).toBe('-2mo')
  })

  it('should support months', () => {
    expect(convertMsToTime(createMsFromMonths(1))).toBe('1mo')
    expect(convertMsToTime(createMsFromMonths(1.2))).toBe('1mo')
    expect(convertMsToTime(createMsFromMonths(10))).toBe('10mo')

    expect(convertMsToTime(createMsFromMonths(-1))).toBe('-1mo')
    expect(convertMsToTime(createMsFromMonths(-1.2))).toBe('-1mo')
    expect(convertMsToTime(createMsFromMonths(-10))).toBe('-10mo')
  })

  it('should support years', () => {
    expect(convertMsToTime(createMsFromYears(1))).toBe('1y')
    expect(convertMsToTime(createMsFromYears(1.2))).toBe('1y')
    expect(convertMsToTime(createMsFromYears(10))).toBe('10y')

    expect(convertMsToTime(createMsFromYears(-1))).toBe('-1y')
    expect(convertMsToTime(createMsFromYears(-1.2))).toBe('-1y')
    expect(convertMsToTime(createMsFromYears(-10))).toBe('-10y')
  })

  it('should round', () => {
    expect(convertMsToTime(roundingInputMs)).toBe('3d')

    expect(convertMsToTime(-roundingInputMs)).toBe('-3d')
  })
})

describe("Asking for a unit that doesn't qualify", () => {
  test('Asking for seconds', () => {
    expect(convertMsToTime(800, { long: true, preferredUnit: 's' })).toBe('800 ms')
    expect(convertMsToTime(800, { preferredUnit: 's' })).toBe('800ms')
    expect(convertMsToTime(-800, { long: true, preferredUnit: 's' })).toBe('-800 ms')
    expect(convertMsToTime(-800, { preferredUnit: 's' })).toBe('-800ms')
  })
  test('Asking for minutes', () => {
    expect(convertMsToTime(createMsFromSeconds(-45), { long: true, preferredUnit: 'm' })).toBe('-45 seconds')
    expect(convertMsToTime(createMsFromSeconds(-45), { preferredUnit: 'm' })).toBe('-45s')
    expect(convertMsToTime(createMsFromSeconds(45), { long: true, preferredUnit: 'm' })).toBe('45 seconds')
    expect(convertMsToTime(createMsFromSeconds(45), { preferredUnit: 'm' })).toBe('45s')
  })
  test('Asking for hours', () => {
    expect(convertMsToTime(createMsFromMinutes(-15), { long: true, preferredUnit: 'h' })).toBe('-15 minutes')
    expect(convertMsToTime(createMsFromMinutes(-15), { preferredUnit: 'h' })).toBe('-15m')
    expect(convertMsToTime(createMsFromMinutes(15), { long: true, preferredUnit: 'h' })).toBe('15 minutes')
    expect(convertMsToTime(createMsFromMinutes(15), { preferredUnit: 'h' })).toBe('15m')
  })
  test('Asking for days', () => {
    expect(convertMsToTime(createMsFromHours(-15), { long: true, preferredUnit: 'd' })).toBe('-15 hours')
    expect(convertMsToTime(createMsFromHours(-15), { preferredUnit: 'd' })).toBe('-15h')
    expect(convertMsToTime(createMsFromHours(15), { long: true, preferredUnit: 'd' })).toBe('15 hours')
    expect(convertMsToTime(createMsFromHours(15), { preferredUnit: 'd' })).toBe('15h')
  })
  test('Asking for weeks', () => {
    expect(convertMsToTime(createMsFromDays(-6), { long: true, preferredUnit: 'w' })).toBe('-6 days')
    expect(convertMsToTime(createMsFromDays(-6), { preferredUnit: 'w' })).toBe('-6d')
    expect(convertMsToTime(createMsFromDays(6), { long: true, preferredUnit: 'w' })).toBe('6 days')
    expect(convertMsToTime(createMsFromDays(6), { preferredUnit: 'w' })).toBe('6d')
  })
  test('Asking for months', () => {
    expect(convertMsToTime(createMsFromWeeks(-3), { long: true, preferredUnit: 'mo' })).toBe('-3 weeks')
    expect(convertMsToTime(createMsFromWeeks(-3), { preferredUnit: 'mo' })).toBe('-3w')
    expect(convertMsToTime(createMsFromWeeks(3), { long: true, preferredUnit: 'mo' })).toBe('3 weeks')
    expect(convertMsToTime(createMsFromWeeks(3), { preferredUnit: 'mo' })).toBe('3w')
  })
  test('Asking for years', () => {
    expect(convertMsToTime(createMsFromMonths(-3), { long: true, preferredUnit: 'mo' })).toBe('-3 months')
    expect(convertMsToTime(createMsFromMonths(-3), { preferredUnit: 'y' })).toBe('-3mo')
    expect(convertMsToTime(createMsFromMonths(3), { long: true, preferredUnit: 'mo' })).toBe('3 months')
    expect(convertMsToTime(createMsFromMonths(3), { preferredUnit: 'y' })).toBe('3mo')
  })
})
