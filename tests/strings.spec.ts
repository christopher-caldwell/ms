import { convertTimeToMs } from '@/index'
import {
  createMsFromSeconds,
  createMsFromMinutes,
  createMsFromHours,
  createMsFromDays,
  createMsFromMonths,
  createMsFromYears,
  createMsFromWeeks,
} from '@/helpers'

describe('Uncommon short inputs', () => {
  it('should not throw an error', () => {
    expect(() => {
      convertTimeToMs('1m')
    }).not.toThrowError()
  })

  it('should preserve ms', () => {
    expect(convertTimeToMs('100')).toBe(100)
  })

  it('should convert ms to ms', () => {
    expect(convertTimeToMs('100ms')).toBe(100)
  })

  it('should work with decimals', () => {
    expect(convertTimeToMs('1.5h')).toBe(5400000)
  })

  it('should work with multiple spaces', () => {
    expect(convertTimeToMs('1   s')).toBe(1000)
  })

  it('should return NaN if invalid', () => {
    expect(isNaN(convertTimeToMs('☃') as number)).toBe(true)
    expect(isNaN(convertTimeToMs('10-.5') as number)).toBe(true)
  })

  it('should be case-insensitive', () => {
    expect(convertTimeToMs('1.5H')).toBe(5400000)
  })

  it('should work with numbers starting with .', () => {
    expect(convertTimeToMs('.5ms')).toBe(0.5)
  })

  it('should work with negative integers', () => {
    expect(convertTimeToMs('-100ms')).toBe(-100)
  })

  it('should work with negative decimals', () => {
    expect(convertTimeToMs('-1.5h')).toBe(-5400000)
    expect(convertTimeToMs('-10.5h')).toBe(-37800000)
  })

  it('should work with negative decimals starting with "."', () => {
    expect(convertTimeToMs('-.5h')).toBe(-1800000)
  })
})

describe('Uncommon long inputs', () => {
  it('should not throw an error', () => {
    expect(() => {
      convertTimeToMs('53 milliseconds')
    }).not.toThrowError()
  })

  it('should work with decimals', () => {
    expect(convertTimeToMs('1.5 hours')).toBe(5400000)
  })

  it('should work with negative integers', () => {
    expect(convertTimeToMs('-100 milliseconds')).toBe(-100)
  })

  it('should work with negative decimals', () => {
    expect(convertTimeToMs('-1.5 hours')).toBe(-5400000)
  })

  it('should work with negative decimals starting with "."', () => {
    expect(convertTimeToMs('-.5 hr')).toBe(-1800000)
  })
})

describe('Keep milliseconds as MS', () => {
  it('should keep ms as ms', () => {
    expect(convertTimeToMs('1ms')).toBe(1)
    expect(convertTimeToMs('1 ms')).toBe(1)
    expect(convertTimeToMs('2ms')).toBe(2)
    expect(convertTimeToMs('2 ms')).toBe(2)
  })

  it('should keep msec as ms', () => {
    expect(convertTimeToMs('1msec')).toBe(1)
    expect(convertTimeToMs('1 msec')).toBe(1)
    expect(convertTimeToMs('2msec')).toBe(2)
    expect(convertTimeToMs('2 msec')).toBe(2)
  })

  it('should keep msec as ms', () => {
    expect(convertTimeToMs('1msec')).toBe(1)
    expect(convertTimeToMs('1 msec')).toBe(1)
    expect(convertTimeToMs('2msec')).toBe(2)
    expect(convertTimeToMs('2 msec')).toBe(2)
  })

  it('should keep msecs as ms', () => {
    expect(convertTimeToMs('1msecs')).toBe(1)
    expect(convertTimeToMs('1 msecs')).toBe(1)
    expect(convertTimeToMs('2msecs')).toBe(2)
    expect(convertTimeToMs('2 msecs')).toBe(2)
  })

  it('should keep millisecond as ms', () => {
    expect(convertTimeToMs('1millisecond')).toBe(1)
    expect(convertTimeToMs('1 millisecond')).toBe(1)
    expect(convertTimeToMs('2millisecond')).toBe(2)
    expect(convertTimeToMs('2 millisecond')).toBe(2)
  })

  it('should keep milliseconds as ms', () => {
    expect(convertTimeToMs('1milliseconds')).toBe(1)
    expect(convertTimeToMs('1 milliseconds')).toBe(1)
    expect(convertTimeToMs('2milliseconds')).toBe(2)
    expect(convertTimeToMs('2 milliseconds')).toBe(2)
  })
})

describe('Converting seconds to MS', () => {
  it('should convert s to ms', () => {
    expect(convertTimeToMs('1s')).toBe(createMsFromSeconds(1))
    expect(convertTimeToMs('1 s')).toBe(createMsFromSeconds(1))
    expect(convertTimeToMs('2s')).toBe(createMsFromSeconds(2))
    expect(convertTimeToMs('2 s')).toBe(createMsFromSeconds(2))
  })

  it('should convert sec to ms', () => {
    expect(convertTimeToMs('1sec')).toBe(createMsFromSeconds(1))
    expect(convertTimeToMs('1 sec')).toBe(createMsFromSeconds(1))
    expect(convertTimeToMs('2sec')).toBe(createMsFromSeconds(2))
    expect(convertTimeToMs('2 sec')).toBe(createMsFromSeconds(2))
  })

  it('should convert secs to ms', () => {
    expect(convertTimeToMs('1secs')).toBe(createMsFromSeconds(1))
    expect(convertTimeToMs('1 secs')).toBe(createMsFromSeconds(1))
    expect(convertTimeToMs('2secs')).toBe(createMsFromSeconds(2))
    expect(convertTimeToMs('2 secs')).toBe(createMsFromSeconds(2))
  })

  it('should convert second to ms', () => {
    expect(convertTimeToMs('1second')).toBe(createMsFromSeconds(1))
    expect(convertTimeToMs('1 second')).toBe(createMsFromSeconds(1))
    expect(convertTimeToMs('2second')).toBe(createMsFromSeconds(2))
    expect(convertTimeToMs('2 second')).toBe(createMsFromSeconds(2))
  })

  it('should convert seconds to ms', () => {
    expect(convertTimeToMs('1seconds')).toBe(createMsFromSeconds(1))
    expect(convertTimeToMs('1 seconds')).toBe(createMsFromSeconds(1))
    expect(convertTimeToMs('2seconds')).toBe(createMsFromSeconds(2))
    expect(convertTimeToMs('2 seconds')).toBe(createMsFromSeconds(2))
  })
})

describe('Converting minutes to MS', () => {
  it('should convert m to ms', () => {
    expect(convertTimeToMs('1m')).toBe(createMsFromMinutes(1))
    expect(convertTimeToMs('1 m')).toBe(createMsFromMinutes(1))
    expect(convertTimeToMs('2m')).toBe(createMsFromMinutes(2))
    expect(convertTimeToMs('2 m')).toBe(createMsFromMinutes(2))
  })

  it('should convert min to ms', () => {
    expect(convertTimeToMs('1min')).toBe(createMsFromMinutes(1))
    expect(convertTimeToMs('1 min')).toBe(createMsFromMinutes(1))
    expect(convertTimeToMs('2min')).toBe(createMsFromMinutes(2))
    expect(convertTimeToMs('2 min')).toBe(createMsFromMinutes(2))
  })

  it('should convert mins to ms', () => {
    expect(convertTimeToMs('1mins')).toBe(createMsFromMinutes(1))
    expect(convertTimeToMs('1 mins')).toBe(createMsFromMinutes(1))
    expect(convertTimeToMs('2mins')).toBe(createMsFromMinutes(2))
    expect(convertTimeToMs('2 mins')).toBe(createMsFromMinutes(2))
  })

  it('should convert minute to ms', () => {
    expect(convertTimeToMs('1minute')).toBe(createMsFromMinutes(1))
    expect(convertTimeToMs('1 minute')).toBe(createMsFromMinutes(1))
    expect(convertTimeToMs('2minute')).toBe(createMsFromMinutes(2))
    expect(convertTimeToMs('2 minute')).toBe(createMsFromMinutes(2))
  })

  it('should convert minutes to ms', () => {
    expect(convertTimeToMs('1minutes')).toBe(createMsFromMinutes(1))
    expect(convertTimeToMs('1 minutes')).toBe(createMsFromMinutes(1))
    expect(convertTimeToMs('2minutes')).toBe(createMsFromMinutes(2))
    expect(convertTimeToMs('2 minutes')).toBe(createMsFromMinutes(2))
  })
})

describe('Converting hours to ms', () => {
  it('should convert h to ms', () => {
    expect(convertTimeToMs('1h')).toBe(createMsFromHours(1))
    expect(convertTimeToMs('1 h')).toBe(createMsFromHours(1))
    expect(convertTimeToMs('2h')).toBe(createMsFromHours(2))
    expect(convertTimeToMs('2 h')).toBe(createMsFromHours(2))
  })

  it('should convert hr to ms', () => {
    expect(convertTimeToMs('1hr')).toBe(createMsFromHours(1))
    expect(convertTimeToMs('1 hr')).toBe(createMsFromHours(1))
    expect(convertTimeToMs('2hr')).toBe(createMsFromHours(2))
    expect(convertTimeToMs('2 hr')).toBe(createMsFromHours(2))
  })

  it('should convert hrs to ms', () => {
    expect(convertTimeToMs('1hrs')).toBe(createMsFromHours(1))
    expect(convertTimeToMs('1 hrs')).toBe(createMsFromHours(1))
    expect(convertTimeToMs('2hrs')).toBe(createMsFromHours(2))
    expect(convertTimeToMs('2 hrs')).toBe(createMsFromHours(2))
  })

  it('should convert hour to ms', () => {
    expect(convertTimeToMs('1 hour')).toBe(createMsFromHours(1))
    expect(convertTimeToMs('1 hour')).toBe(createMsFromHours(1))
    expect(convertTimeToMs('2hour')).toBe(createMsFromHours(2))
    expect(convertTimeToMs('2 hour')).toBe(createMsFromHours(2))
  })

  it('should convert hours to ms', () => {
    expect(convertTimeToMs('1 hours')).toBe(createMsFromHours(1))
    expect(convertTimeToMs('1 hours')).toBe(createMsFromHours(1))
    expect(convertTimeToMs('2hours')).toBe(createMsFromHours(2))
    expect(convertTimeToMs('2 hours')).toBe(createMsFromHours(2))
  })
})

describe('Converting days to MS', () => {
  it('should convert d to ms', () => {
    expect(convertTimeToMs('1d')).toBe(createMsFromDays(1))
    expect(convertTimeToMs('1 d')).toBe(createMsFromDays(1))
    expect(convertTimeToMs('2d')).toBe(createMsFromDays(2))
    expect(convertTimeToMs('2 d')).toBe(createMsFromDays(2))
  })

  it('should convert day to ms', () => {
    expect(convertTimeToMs('1day')).toBe(createMsFromDays(1))
    expect(convertTimeToMs('1 day')).toBe(createMsFromDays(1))
  })

  it('should convert days to ms', () => {
    expect(convertTimeToMs('1days')).toBe(createMsFromDays(1))
    expect(convertTimeToMs('1 days')).toBe(createMsFromDays(1))
    expect(convertTimeToMs('2days')).toBe(createMsFromDays(2))
    expect(convertTimeToMs('2 days')).toBe(createMsFromDays(2))
  })
})

describe('Converting weeks to MS', () => {
  it('should convert w to ms', () => {
    expect(convertTimeToMs('1w')).toBe(createMsFromWeeks(1))
    expect(convertTimeToMs('1 w')).toBe(createMsFromWeeks(1))
    expect(convertTimeToMs('2w')).toBe(createMsFromWeeks(2))
    expect(convertTimeToMs('2 w')).toBe(createMsFromWeeks(2))
  })

  it('should convert wk to ms', () => {
    expect(convertTimeToMs('1wk')).toBe(createMsFromWeeks(1))
    expect(convertTimeToMs('1 wk')).toBe(createMsFromWeeks(1))
  })

  it('should convert wks to ms', () => {
    expect(convertTimeToMs('1wks')).toBe(createMsFromWeeks(1))
    expect(convertTimeToMs('1 wks')).toBe(createMsFromWeeks(1))
    expect(convertTimeToMs('2wks')).toBe(createMsFromWeeks(2))
    expect(convertTimeToMs('2 wks')).toBe(createMsFromWeeks(2))
  })

  it('should convert week to ms', () => {
    expect(convertTimeToMs('1week')).toBe(createMsFromWeeks(1))
    expect(convertTimeToMs('1 week')).toBe(createMsFromWeeks(1))
  })

  it('should convert weeks to ms', () => {
    expect(convertTimeToMs('1weeks')).toBe(createMsFromWeeks(1))
    expect(convertTimeToMs('1 weeks')).toBe(createMsFromWeeks(1))
    expect(convertTimeToMs('2weeks')).toBe(createMsFromWeeks(2))
    expect(convertTimeToMs('2 weeks')).toBe(createMsFromWeeks(2))
  })
})

describe('Converting months to MS', () => {
  it('should convert m to ms', () => {
    expect(convertTimeToMs('1mo')).toBe(createMsFromMonths(1))
    expect(convertTimeToMs('1 mo')).toBe(createMsFromMonths(1))
    expect(convertTimeToMs('2mo')).toBe(createMsFromMonths(2))
    expect(convertTimeToMs('2 mo')).toBe(createMsFromMonths(2))
  })

  it('should convert mon to ms', () => {
    expect(convertTimeToMs('1mon')).toBe(createMsFromMonths(1))
    expect(convertTimeToMs('1 mon')).toBe(createMsFromMonths(1))
  })

  it('should convert months to ms', () => {
    expect(convertTimeToMs('1months')).toBe(createMsFromMonths(1))
    expect(convertTimeToMs('1 months')).toBe(createMsFromMonths(1))
    expect(convertTimeToMs('2months')).toBe(createMsFromMonths(2))
    expect(convertTimeToMs('2 months')).toBe(createMsFromMonths(2))
  })

  it('should convert month to ms', () => {
    expect(convertTimeToMs('1month')).toBe(createMsFromMonths(1))
    expect(convertTimeToMs('1 month')).toBe(createMsFromMonths(1))
  })
})

describe('Converting years to MS', () => {
  it('should convert y to ms', () => {
    expect(convertTimeToMs('1y')).toBe(createMsFromYears(1))
    expect(convertTimeToMs('1 y')).toBe(createMsFromYears(1))
    expect(convertTimeToMs('2y')).toBe(createMsFromYears(2))
    expect(convertTimeToMs('2 y')).toBe(createMsFromYears(2))
  })

  it('should convert yr to ms', () => {
    expect(convertTimeToMs('1yr')).toBe(createMsFromYears(1))
    expect(convertTimeToMs('1 yr')).toBe(createMsFromYears(1))
  })

  it('should convert yrs to ms', () => {
    expect(convertTimeToMs('1yrs')).toBe(createMsFromYears(1))
    expect(convertTimeToMs('1 yrs')).toBe(createMsFromYears(1))
    expect(convertTimeToMs('2yrs')).toBe(createMsFromYears(2))
    expect(convertTimeToMs('2 yrs')).toBe(createMsFromYears(2))
  })

  it('should convert year to ms', () => {
    expect(convertTimeToMs('1year')).toBe(createMsFromYears(1))
    expect(convertTimeToMs('1 year')).toBe(createMsFromYears(1))
  })

  it('should convert years to ms', () => {
    expect(convertTimeToMs('1years')).toBe(createMsFromYears(1))
    expect(convertTimeToMs('1 years')).toBe(createMsFromYears(1))
    expect(convertTimeToMs('2years')).toBe(createMsFromYears(2))
    expect(convertTimeToMs('2 years')).toBe(createMsFromYears(2))
  })
})
