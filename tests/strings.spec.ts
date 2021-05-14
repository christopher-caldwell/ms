import { ms } from '@/index'

describe('ms(string)', function () {
  it('should not throw an error', function () {
    expect(function () {
      ms('1m')
    }).not.toThrowError()
  })

  it('should preserve ms', function () {
    expect(ms('100')).toBe(100)
  })

  it('should convert from m to ms', function () {
    expect(ms('1m')).toBe(60000)
  })

  it('should convert from h to ms', function () {
    expect(ms('1h')).toBe(3600000)
  })

  it('should convert d to ms', function () {
    expect(ms('2d')).toBe(172800000)
  })

  it('should convert w to ms', function () {
    expect(ms('3w')).toBe(1814400000)
  })

  it('should convert s to ms', function () {
    expect(ms('1s')).toBe(1000)
  })

  it('should convert ms to ms', function () {
    expect(ms('100ms')).toBe(100)
  })

  it('should work with decimals', function () {
    expect(ms('1.5h')).toBe(5400000)
  })

  it('should work with multiple spaces', function () {
    expect(ms('1   s')).toBe(1000)
  })

  it('should return NaN if invalid', function () {
    expect(isNaN(ms('☃') as number)).toBe(true)
    expect(isNaN(ms('10-.5') as number)).toBe(true)
  })

  it('should be case-insensitive', function () {
    expect(ms('1.5H')).toBe(5400000)
  })

  it('should work with numbers starting with .', function () {
    expect(ms('.5ms')).toBe(0.5)
  })

  it('should work with negative integers', function () {
    expect(ms('-100ms')).toBe(-100)
  })

  it('should work with negative decimals', function () {
    expect(ms('-1.5h')).toBe(-5400000)
    expect(ms('-10.5h')).toBe(-37800000)
  })

  it('should work with negative decimals starting with "."', function () {
    expect(ms('-.5h')).toBe(-1800000)
  })
})

describe('ms(long string)', function () {
  it('should not throw an error', function () {
    expect(function () {
      ms('53 milliseconds')
    }).not.toThrowError()
  })

  it('should convert milliseconds to ms', function () {
    expect(ms('53 milliseconds')).toBe(53)
  })

  it('should convert msecs to ms', function () {
    expect(ms('17 msecs')).toBe(17)
  })

  it('should convert sec to ms', function () {
    expect(ms('1 sec')).toBe(1000)
  })

  it('should convert from min to ms', function () {
    expect(ms('1 min')).toBe(60000)
  })

  it('should convert from hr to ms', function () {
    expect(ms('1 hr')).toBe(3600000)
  })

  it('should convert days to ms', function () {
    expect(ms('2 days')).toBe(172800000)
  })

  it('should work with decimals', function () {
    expect(ms('1.5 hours')).toBe(5400000)
  })

  it('should work with negative integers', function () {
    expect(ms('-100 milliseconds')).toBe(-100)
  })

  it('should work with negative decimals', function () {
    expect(ms('-1.5 hours')).toBe(-5400000)
  })

  it('should work with negative decimals starting with "."', function () {
    expect(ms('-.5 hr')).toBe(-1800000)
  })
})
