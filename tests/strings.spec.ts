import { ms } from '@/index'
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
      ms('1m')
    }).not.toThrowError()
  })

  it('should preserve ms', () => {
    expect(ms('100')).toBe(100)
  })

  it('should convert ms to ms', () => {
    expect(ms('100ms')).toBe(100)
  })

  it('should work with decimals', () => {
    expect(ms('1.5h')).toBe(5400000)
  })

  it('should work with multiple spaces', () => {
    expect(ms('1   s')).toBe(1000)
  })

  it('should return NaN if invalid', () => {
    expect(isNaN(ms('☃') as number)).toBe(true)
    expect(isNaN(ms('10-.5') as number)).toBe(true)
  })

  it('should be case-insensitive', () => {
    expect(ms('1.5H')).toBe(5400000)
  })

  it('should work with numbers starting with .', () => {
    expect(ms('.5ms')).toBe(0.5)
  })

  it('should work with negative integers', () => {
    expect(ms('-100ms')).toBe(-100)
  })

  it('should work with negative decimals', () => {
    expect(ms('-1.5h')).toBe(-5400000)
    expect(ms('-10.5h')).toBe(-37800000)
  })

  it('should work with negative decimals starting with "."', () => {
    expect(ms('-.5h')).toBe(-1800000)
  })
})

describe('Uncommon long inputs', () => {
  it('should not throw an error', () => {
    expect(() => {
      ms('53 milliseconds')
    }).not.toThrowError()
  })

  it('should work with decimals', () => {
    expect(ms('1.5 hours')).toBe(5400000)
  })

  it('should work with negative integers', () => {
    expect(ms('-100 milliseconds')).toBe(-100)
  })

  it('should work with negative decimals', () => {
    expect(ms('-1.5 hours')).toBe(-5400000)
  })

  it('should work with negative decimals starting with "."', () => {
    expect(ms('-.5 hr')).toBe(-1800000)
  })
})

describe('Keep milliseconds as MS', () => {
  it('should keep ms as ms', () => {
    expect(ms('1ms')).toBe(1)
    expect(ms('1 ms')).toBe(1)
    expect(ms('2ms')).toBe(2)
    expect(ms('2 ms')).toBe(2)
  })

  it('should keep msec as ms', () => {
    expect(ms('1msec')).toBe(1)
    expect(ms('1 msec')).toBe(1)
    expect(ms('2msec')).toBe(2)
    expect(ms('2 msec')).toBe(2)
  })

  it('should keep msec as ms', () => {
    expect(ms('1msec')).toBe(1)
    expect(ms('1 msec')).toBe(1)
    expect(ms('2msec')).toBe(2)
    expect(ms('2 msec')).toBe(2)
  })

  it('should keep msecs as ms', () => {
    expect(ms('1msecs')).toBe(1)
    expect(ms('1 msecs')).toBe(1)
    expect(ms('2msecs')).toBe(2)
    expect(ms('2 msecs')).toBe(2)
  })

  it('should keep millisecond as ms', () => {
    expect(ms('1millisecond')).toBe(1)
    expect(ms('1 millisecond')).toBe(1)
    expect(ms('2millisecond')).toBe(2)
    expect(ms('2 millisecond')).toBe(2)
  })

  it('should keep milliseconds as ms', () => {
    expect(ms('1milliseconds')).toBe(1)
    expect(ms('1 milliseconds')).toBe(1)
    expect(ms('2milliseconds')).toBe(2)
    expect(ms('2 milliseconds')).toBe(2)
  })
})

describe('Converting seconds to MS', () => {
  it('should convert s to ms', () => {
    expect(ms('1s')).toBe(createMsFromSeconds(1))
    expect(ms('1 s')).toBe(createMsFromSeconds(1))
    expect(ms('2s')).toBe(createMsFromSeconds(2))
    expect(ms('2 s')).toBe(createMsFromSeconds(2))
  })

  it('should convert sec to ms', () => {
    expect(ms('1sec')).toBe(createMsFromSeconds(1))
    expect(ms('1 sec')).toBe(createMsFromSeconds(1))
    expect(ms('2sec')).toBe(createMsFromSeconds(2))
    expect(ms('2 sec')).toBe(createMsFromSeconds(2))
  })

  it('should convert secs to ms', () => {
    expect(ms('1secs')).toBe(createMsFromSeconds(1))
    expect(ms('1 secs')).toBe(createMsFromSeconds(1))
    expect(ms('2secs')).toBe(createMsFromSeconds(2))
    expect(ms('2 secs')).toBe(createMsFromSeconds(2))
  })

  it('should convert second to ms', () => {
    expect(ms('1second')).toBe(createMsFromSeconds(1))
    expect(ms('1 second')).toBe(createMsFromSeconds(1))
    expect(ms('2second')).toBe(createMsFromSeconds(2))
    expect(ms('2 second')).toBe(createMsFromSeconds(2))
  })

  it('should convert seconds to ms', () => {
    expect(ms('1seconds')).toBe(createMsFromSeconds(1))
    expect(ms('1 seconds')).toBe(createMsFromSeconds(1))
    expect(ms('2seconds')).toBe(createMsFromSeconds(2))
    expect(ms('2 seconds')).toBe(createMsFromSeconds(2))
  })
})

describe('Converting minutes to MS', () => {
  it('should convert m to ms', () => {
    expect(ms('1m')).toBe(createMsFromMinutes(1))
    expect(ms('1 m')).toBe(createMsFromMinutes(1))
    expect(ms('2m')).toBe(createMsFromMinutes(2))
    expect(ms('2 m')).toBe(createMsFromMinutes(2))
  })

  it('should convert min to ms', () => {
    expect(ms('1min')).toBe(createMsFromMinutes(1))
    expect(ms('1 min')).toBe(createMsFromMinutes(1))
    expect(ms('2min')).toBe(createMsFromMinutes(2))
    expect(ms('2 min')).toBe(createMsFromMinutes(2))
  })

  it('should convert mins to ms', () => {
    expect(ms('1mins')).toBe(createMsFromMinutes(1))
    expect(ms('1 mins')).toBe(createMsFromMinutes(1))
    expect(ms('2mins')).toBe(createMsFromMinutes(2))
    expect(ms('2 mins')).toBe(createMsFromMinutes(2))
  })

  it('should convert minute to ms', () => {
    expect(ms('1minute')).toBe(createMsFromMinutes(1))
    expect(ms('1 minute')).toBe(createMsFromMinutes(1))
    expect(ms('2minute')).toBe(createMsFromMinutes(2))
    expect(ms('2 minute')).toBe(createMsFromMinutes(2))
  })

  it('should convert minutes to ms', () => {
    expect(ms('1minutes')).toBe(createMsFromMinutes(1))
    expect(ms('1 minutes')).toBe(createMsFromMinutes(1))
    expect(ms('2minutes')).toBe(createMsFromMinutes(2))
    expect(ms('2 minutes')).toBe(createMsFromMinutes(2))
  })
})

describe('Converting hours to MS', () => {
  it('should convert h to ms', () => {
    expect(ms('1h')).toBe(createMsFromHours(1))
    expect(ms('1 h')).toBe(createMsFromHours(1))
    expect(ms('2h')).toBe(createMsFromHours(2))
    expect(ms('2 h')).toBe(createMsFromHours(2))
  })

  it('should convert hr to ms', () => {
    expect(ms('1hr')).toBe(createMsFromHours(1))
    expect(ms('1 hr')).toBe(createMsFromHours(1))
    expect(ms('2hr')).toBe(createMsFromHours(2))
    expect(ms('2 hr')).toBe(createMsFromHours(2))
  })

  it('should convert hrs to ms', () => {
    expect(ms('1hrs')).toBe(createMsFromHours(1))
    expect(ms('1 hrs')).toBe(createMsFromHours(1))
    expect(ms('2hrs')).toBe(createMsFromHours(2))
    expect(ms('2 hrs')).toBe(createMsFromHours(2))
  })

  it('should convert hour to ms', () => {
    expect(ms('1 hour')).toBe(createMsFromHours(1))
    expect(ms('1 hour')).toBe(createMsFromHours(1))
    expect(ms('2hour')).toBe(createMsFromHours(2))
    expect(ms('2 hour')).toBe(createMsFromHours(2))
  })

  it('should convert hours to ms', () => {
    expect(ms('1 hours')).toBe(createMsFromHours(1))
    expect(ms('1 hours')).toBe(createMsFromHours(1))
    expect(ms('2hours')).toBe(createMsFromHours(2))
    expect(ms('2 hours')).toBe(createMsFromHours(2))
  })
})

describe('Converting days to MS', () => {
  it('should convert d to ms', () => {
    expect(ms('1d')).toBe(createMsFromDays(1))
    expect(ms('1 d')).toBe(createMsFromDays(1))
    expect(ms('2d')).toBe(createMsFromDays(2))
    expect(ms('2 d')).toBe(createMsFromDays(2))
  })

  it('should convert day to ms', () => {
    expect(ms('1day')).toBe(createMsFromDays(1))
    expect(ms('1 day')).toBe(createMsFromDays(1))
  })

  it('should convert days to ms', () => {
    expect(ms('1days')).toBe(createMsFromDays(1))
    expect(ms('1 days')).toBe(createMsFromDays(1))
    expect(ms('2days')).toBe(createMsFromDays(2))
    expect(ms('2 days')).toBe(createMsFromDays(2))
  })
})

describe('Converting weeks to MS', () => {
  it('should convert w to ms', () => {
    expect(ms('1w')).toBe(createMsFromWeeks(1))
    expect(ms('1 w')).toBe(createMsFromWeeks(1))
    expect(ms('2w')).toBe(createMsFromWeeks(2))
    expect(ms('2 w')).toBe(createMsFromWeeks(2))
  })

  it('should convert wk to ms', () => {
    expect(ms('1wk')).toBe(createMsFromWeeks(1))
    expect(ms('1 wk')).toBe(createMsFromWeeks(1))
  })

  it('should convert wks to ms', () => {
    expect(ms('1wks')).toBe(createMsFromWeeks(1))
    expect(ms('1 wks')).toBe(createMsFromWeeks(1))
    expect(ms('2wks')).toBe(createMsFromWeeks(2))
    expect(ms('2 wks')).toBe(createMsFromWeeks(2))
  })

  it('should convert week to ms', () => {
    expect(ms('1week')).toBe(createMsFromWeeks(1))
    expect(ms('1 week')).toBe(createMsFromWeeks(1))
  })

  it('should convert weeks to ms', () => {
    expect(ms('1weeks')).toBe(createMsFromWeeks(1))
    expect(ms('1 weeks')).toBe(createMsFromWeeks(1))
    expect(ms('2weeks')).toBe(createMsFromWeeks(2))
    expect(ms('2 weeks')).toBe(createMsFromWeeks(2))
  })
})

describe('Converting months to MS', () => {
  it('should convert m to ms', () => {
    expect(ms('1mo')).toBe(createMsFromMonths(1))
    expect(ms('1 mo')).toBe(createMsFromMonths(1))
    expect(ms('2mo')).toBe(createMsFromMonths(2))
    expect(ms('2 mo')).toBe(createMsFromMonths(2))
  })

  it('should convert mon to ms', () => {
    expect(ms('1mon')).toBe(createMsFromMonths(1))
    expect(ms('1 mon')).toBe(createMsFromMonths(1))
  })

  it('should convert months to ms', () => {
    expect(ms('1months')).toBe(createMsFromMonths(1))
    expect(ms('1 months')).toBe(createMsFromMonths(1))
    expect(ms('2months')).toBe(createMsFromMonths(2))
    expect(ms('2 months')).toBe(createMsFromMonths(2))
  })

  it('should convert month to ms', () => {
    expect(ms('1month')).toBe(createMsFromMonths(1))
    expect(ms('1 month')).toBe(createMsFromMonths(1))
  })
})

describe('Converting years to MS', () => {
  it('should convert y to ms', () => {
    expect(ms('1y')).toBe(createMsFromYears(1))
    expect(ms('1 y')).toBe(createMsFromYears(1))
    expect(ms('2y')).toBe(createMsFromYears(2))
    expect(ms('2 y')).toBe(createMsFromYears(2))
  })

  it('should convert yr to ms', () => {
    expect(ms('1yr')).toBe(createMsFromYears(1))
    expect(ms('1 yr')).toBe(createMsFromYears(1))
  })

  it('should convert yrs to ms', () => {
    expect(ms('1yrs')).toBe(createMsFromYears(1))
    expect(ms('1 yrs')).toBe(createMsFromYears(1))
    expect(ms('2yrs')).toBe(createMsFromYears(2))
    expect(ms('2 yrs')).toBe(createMsFromYears(2))
  })

  it('should convert year to ms', () => {
    expect(ms('1year')).toBe(createMsFromYears(1))
    expect(ms('1 year')).toBe(createMsFromYears(1))
  })

  it('should convert years to ms', () => {
    expect(ms('1years')).toBe(createMsFromYears(1))
    expect(ms('1 years')).toBe(createMsFromYears(1))
    expect(ms('2years')).toBe(createMsFromYears(2))
    expect(ms('2 years')).toBe(createMsFromYears(2))
  })
})
