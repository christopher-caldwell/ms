import { ms } from '@/index'

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

describe('ms(number, { long: true })', () => {
  it('should not throw an error', () => {
    expect(() => {
      ms(500, { long: true })
    }).not.toThrowError()
  })

  it('should support milliseconds', () => {
    expect(ms(500, { long: true })).toBe('500 ms')
    expect(ms(1100, { long: true, preferredUnit: 'ms' })).toBe('1100 ms')
    expect(ms(1100, { long: true })).toBe('1 second')

    expect(ms(-500, { long: true })).toBe('-500 ms')
    expect(ms(-1100, { long: true, preferredUnit: 'ms' })).toBe('-1100 ms')
    expect(ms(-1100, { long: true })).toBe('-1 second')
  })

  it('should support seconds', () => {
    expect(ms(createMsFromSeconds(1), { long: true })).toBe('1 second')
    expect(ms(createMsFromSeconds(1.2), { long: true })).toBe('1 second')
    expect(ms(createMsFromSeconds(10), { long: true })).toBe('10 seconds')
    expect(ms(createMsFromSeconds(65), { long: true, preferredUnit: 's' })).toBe('65 seconds')
    expect(ms(createMsFromSeconds(65), { long: true })).toBe('1 minute')

    expect(ms(createMsFromSeconds(-1), { long: true })).toBe('-1 second')
    expect(ms(createMsFromSeconds(-1.2), { long: true })).toBe('-1 second')
    expect(ms(createMsFromSeconds(-10), { long: true })).toBe('-10 seconds')
    expect(ms(createMsFromSeconds(-65), { long: true, preferredUnit: 's' })).toBe('-65 seconds')
    expect(ms(createMsFromSeconds(-65), { long: true })).toBe('-1 minute')
  })

  it('should support minutes', () => {
    expect(ms(createMsFromMinutes(1), { long: true })).toBe('1 minute')
    expect(ms(createMsFromMinutes(1.2), { long: true })).toBe('1 minute')
    expect(ms(createMsFromMinutes(10), { long: true })).toBe('10 minutes')
    expect(ms(createMsFromMinutes(65), { long: true, preferredUnit: 'm' })).toBe('65 minutes')
    expect(ms(createMsFromMinutes(65), { long: true })).toBe('1 hour')

    expect(ms(createMsFromMinutes(-1), { long: true })).toBe('-1 minute')
    expect(ms(createMsFromMinutes(-1.2), { long: true })).toBe('-1 minute')
    expect(ms(createMsFromMinutes(-10), { long: true })).toBe('-10 minutes')
    expect(ms(createMsFromMinutes(-65), { long: true, preferredUnit: 'm' })).toBe('-65 minutes')
    expect(ms(createMsFromMinutes(-65), { long: true })).toBe('-1 hour')
  })

  it('should support hours', () => {
    expect(ms(createMsFromHours(1), { long: true })).toBe('1 hour')
    expect(ms(createMsFromHours(1.2), { long: true })).toBe('1 hour')
    expect(ms(createMsFromHours(10), { long: true })).toBe('10 hours')
    expect(ms(createMsFromHours(25), { long: true, preferredUnit: 'h' })).toBe('25 hours')
    expect(ms(createMsFromHours(25), { long: true })).toBe('1 day')

    expect(ms(createMsFromHours(-1), { long: true })).toBe('-1 hour')
    expect(ms(createMsFromHours(-1.2), { long: true })).toBe('-1 hour')
    expect(ms(createMsFromHours(-10), { long: true })).toBe('-10 hours')
    expect(ms(createMsFromHours(-25), { long: true, preferredUnit: 'h' })).toBe('-25 hours')
    expect(ms(createMsFromHours(-25), { long: true })).toBe('-1 day')
  })

  it('should support days', () => {
    expect(ms(createMsFromDays(1), { long: true })).toBe('1 day')
    expect(ms(createMsFromDays(1.2), { long: true })).toBe('1 day')
    expect(ms(createMsFromDays(10), { long: true, preferredUnit: 'd' })).toBe('10 days')
    // Without unit, rounded down is still one week
    expect(ms(createMsFromDays(10), { long: true })).toBe('1 week')

    expect(ms(createMsFromDays(-1), { long: true })).toBe('-1 day')
    expect(ms(createMsFromDays(-1.2), { long: true })).toBe('-1 day')
    expect(ms(createMsFromDays(-10), { long: true, preferredUnit: 'd' })).toBe('-10 days')
    // Without unit, rounded down is still one week
    expect(ms(createMsFromDays(-10), { long: true })).toBe('-1 week')
  })

  it('should support weeks', () => {
    expect(ms(createMsFromWeeks(1), { long: true })).toBe('1 week')
    expect(ms(createMsFromWeeks(1.2), { long: true })).toBe('1 week')
    expect(ms(createMsFromWeeks(10), { long: true, preferredUnit: 'w' })).toBe('10 weeks')
    expect(ms(createMsFromWeeks(10), { long: true })).toBe('2 months')

    expect(ms(createMsFromWeeks(-1), { long: true })).toBe('-1 week')
    expect(ms(createMsFromWeeks(-1.2), { long: true })).toBe('-1 week')
    expect(ms(createMsFromWeeks(-10), { long: true, preferredUnit: 'w' })).toBe('-10 weeks')
    expect(ms(createMsFromWeeks(-10), { long: true })).toBe('-2 months')
  })

  it('should support months', () => {
    expect(ms(createMsFromMonths(1), { long: true })).toBe('1 month')
    expect(ms(createMsFromMonths(1.2), { long: true })).toBe('1 month')
    expect(ms(createMsFromMonths(10), { long: true })).toBe('10 months')
    expect(ms(createMsFromMonths(13), { long: true, preferredUnit: 'mo' })).toBe('13 months')
    expect(ms(createMsFromMonths(13), { long: true })).toBe('1 year')

    expect(ms(createMsFromMonths(-1), { long: true })).toBe('-1 month')
    expect(ms(createMsFromMonths(-1.2), { long: true })).toBe('-1 month')
    expect(ms(createMsFromMonths(-10), { long: true })).toBe('-10 months')
    expect(ms(createMsFromMonths(-13), { long: true, preferredUnit: 'mo' })).toBe('-13 months')
    expect(ms(createMsFromMonths(-13), { long: true })).toBe('-1 year')
  })

  it('should support years', () => {
    expect(ms(createMsFromYears(1), { long: true })).toBe('1 year')
    expect(ms(createMsFromYears(1.025), { long: true })).toBe('1 year')
    expect(ms(createMsFromYears(1.2), { long: true })).toBe('1 year')
    expect(ms(createMsFromYears(10), { long: true })).toBe('10 years')

    expect(ms(createMsFromYears(-1), { long: true })).toBe('-1 year')
    expect(ms(createMsFromYears(-1.2), { long: true })).toBe('-1 year')
    expect(ms(createMsFromYears(-10), { long: true })).toBe('-10 years')
  })

  it('should round', () => {
    expect(ms(roundingInputMs, { long: true })).toBe('3 days')

    expect(ms(-roundingInputMs, { long: true })).toBe('-3 days')
  })
})

describe('ms(number)', () => {
  it('should not throw an error', () => {
    expect(() => {
      ms(500)
    }).not.toThrowError()
  })

  it('should support milliseconds', () => {
    expect(ms(500)).toBe('500ms')

    expect(ms(-500)).toBe('-500ms')
  })

  it('should support seconds', () => {
    expect(ms(createMsFromSeconds(1))).toBe('1s')
    expect(ms(createMsFromSeconds(10))).toBe('10s')

    expect(ms(createMsFromSeconds(-1))).toBe('-1s')
    expect(ms(createMsFromSeconds(-10))).toBe('-10s')
  })

  it('should support minutes', () => {
    expect(ms(createMsFromMinutes(1))).toBe('1m')
    expect(ms(createMsFromMinutes(10))).toBe('10m')

    expect(ms(createMsFromMinutes(-1))).toBe('-1m')
    expect(ms(createMsFromMinutes(-10))).toBe('-10m')
  })

  it('should support hours', () => {
    expect(ms(createMsFromHours(1))).toBe('1h')
    expect(ms(createMsFromHours(10))).toBe('10h')

    expect(ms(createMsFromHours(-1))).toBe('-1h')
    expect(ms(createMsFromHours(-10))).toBe('-10h')
  })

  it('should support days', () => {
    expect(ms(createMsFromDays(1))).toBe('1d')
    expect(ms(createMsFromDays(1.2))).toBe('1d')
    expect(ms(createMsFromDays(10), { preferredUnit: 'd' })).toBe('10d')
    // Without preferred unit, this is over 1 week
    expect(ms(createMsFromDays(10))).toBe('1w')

    expect(ms(createMsFromDays(-1))).toBe('-1d')
    expect(ms(createMsFromDays(-1.2))).toBe('-1d')
    expect(ms(createMsFromDays(-10), { preferredUnit: 'd' })).toBe('-10d')
    // Without preferred unit, this is over 1 week
    expect(ms(createMsFromDays(-10))).toBe('-1w')
  })

  it('should support weeks', () => {
    expect(ms(createMsFromWeeks(1))).toBe('1w')
    expect(ms(createMsFromWeeks(1.2))).toBe('1w')
    expect(ms(createMsFromWeeks(10), { preferredUnit: 'w' })).toBe('10w')
    expect(ms(createMsFromWeeks(10))).toBe('2mo')

    expect(ms(createMsFromWeeks(-1))).toBe('-1w')
    expect(ms(createMsFromWeeks(-1.2))).toBe('-1w')
    expect(ms(createMsFromWeeks(-10), { preferredUnit: 'w' })).toBe('-10w')
    expect(ms(createMsFromWeeks(-10))).toBe('-2mo')
  })

  it('should support months', () => {
    expect(ms(createMsFromMonths(1))).toBe('1mo')
    expect(ms(createMsFromMonths(1.2))).toBe('1mo')
    expect(ms(createMsFromMonths(10))).toBe('10mo')

    expect(ms(createMsFromMonths(-1))).toBe('-1mo')
    expect(ms(createMsFromMonths(-1.2))).toBe('-1mo')
    expect(ms(createMsFromMonths(-10))).toBe('-10mo')
  })

  it('should support years', () => {
    expect(ms(createMsFromYears(1))).toBe('1y')
    expect(ms(createMsFromYears(1.2))).toBe('1y')
    expect(ms(createMsFromYears(10))).toBe('10y')

    expect(ms(createMsFromYears(-1))).toBe('-1y')
    expect(ms(createMsFromYears(-1.2))).toBe('-1y')
    expect(ms(createMsFromYears(-10))).toBe('-10y')
  })

  it('should round', () => {
    expect(ms(roundingInputMs)).toBe('3d')

    expect(ms(-roundingInputMs)).toBe('-3d')
  })
})

describe("Asking for a unit that doesn't qualify", () => {
  test('Asking for seconds', () => {
    expect(ms(800, { long: true, preferredUnit: 's' })).toBe('800 ms')
    expect(ms(800, { preferredUnit: 's' })).toBe('800ms')
    expect(ms(-800, { long: true, preferredUnit: 's' })).toBe('-800 ms')
    expect(ms(-800, { preferredUnit: 's' })).toBe('-800ms')
  })
  test('Asking for minutes', () => {
    expect(ms(createMsFromSeconds(-45), { long: true, preferredUnit: 'm' })).toBe('-45 seconds')
    expect(ms(createMsFromSeconds(-45), { preferredUnit: 'm' })).toBe('-45s')
    expect(ms(createMsFromSeconds(45), { long: true, preferredUnit: 'm' })).toBe('45 seconds')
    expect(ms(createMsFromSeconds(45), { preferredUnit: 'm' })).toBe('45s')
  })
  test('Asking for hours', () => {
    expect(ms(createMsFromMinutes(-15), { long: true, preferredUnit: 'h' })).toBe('-15 minutes')
    expect(ms(createMsFromMinutes(-15), { preferredUnit: 'h' })).toBe('-15m')
    expect(ms(createMsFromMinutes(15), { long: true, preferredUnit: 'h' })).toBe('15 minutes')
    expect(ms(createMsFromMinutes(15), { preferredUnit: 'h' })).toBe('15m')
  })
  test('Asking for days', () => {
    expect(ms(createMsFromHours(-15), { long: true, preferredUnit: 'd' })).toBe('-15 hours')
    expect(ms(createMsFromHours(-15), { preferredUnit: 'd' })).toBe('-15h')
    expect(ms(createMsFromHours(15), { long: true, preferredUnit: 'd' })).toBe('15 hours')
    expect(ms(createMsFromHours(15), { preferredUnit: 'd' })).toBe('15h')
  })
  test('Asking for weeks', () => {
    expect(ms(createMsFromDays(-6), { long: true, preferredUnit: 'w' })).toBe('-6 days')
    expect(ms(createMsFromDays(-6), { preferredUnit: 'w' })).toBe('-6d')
    expect(ms(createMsFromDays(6), { long: true, preferredUnit: 'w' })).toBe('6 days')
    expect(ms(createMsFromDays(6), { preferredUnit: 'w' })).toBe('6d')
  })
  test('Asking for months', () => {
    expect(ms(createMsFromWeeks(-3), { long: true, preferredUnit: 'mo' })).toBe('-3 weeks')
    expect(ms(createMsFromWeeks(-3), { preferredUnit: 'mo' })).toBe('-3w')
    expect(ms(createMsFromWeeks(3), { long: true, preferredUnit: 'mo' })).toBe('3 weeks')
    expect(ms(createMsFromWeeks(3), { preferredUnit: 'mo' })).toBe('3w')
  })
  test('Asking for years', () => {
    expect(ms(createMsFromMonths(-3), { long: true, preferredUnit: 'mo' })).toBe('-3 months')
    expect(ms(createMsFromMonths(-3), { preferredUnit: 'y' })).toBe('-3mo')
    expect(ms(createMsFromMonths(3), { long: true, preferredUnit: 'mo' })).toBe('3 months')
    expect(ms(createMsFromMonths(3), { preferredUnit: 'y' })).toBe('3mo')
  })
})
