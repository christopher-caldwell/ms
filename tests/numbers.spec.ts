import { ms } from '@/index'

describe('ms(number, { long: true })', function () {
  it('should not throw an error', function () {
    expect(function () {
      ms(500, { long: true })
    }).not.toThrowError()
  })

  it('should support milliseconds', function () {
    expect(ms(500, { long: true })).toBe('500 ms')

    expect(ms(-500, { long: true })).toBe('-500 ms')
  })

  it('should support seconds', function () {
    expect(ms(1000, { long: true })).toBe('1 second')
    expect(ms(1200, { long: true })).toBe('1 second')
    expect(ms(10000, { long: true })).toBe('10 seconds')

    expect(ms(-1000, { long: true })).toBe('-1 second')
    expect(ms(-1200, { long: true })).toBe('-1 second')
    expect(ms(-10000, { long: true })).toBe('-10 seconds')
  })

  it('should support minutes', function () {
    expect(ms(60 * 1000, { long: true })).toBe('1 minute')
    expect(ms(60 * 1200, { long: true })).toBe('1 minute')
    expect(ms(60 * 10000, { long: true })).toBe('10 minutes')

    expect(ms(-1 * 60 * 1000, { long: true })).toBe('-1 minute')
    expect(ms(-1 * 60 * 1200, { long: true })).toBe('-1 minute')
    expect(ms(-1 * 60 * 10000, { long: true })).toBe('-10 minutes')
  })

  it('should support hours', function () {
    expect(ms(60 * 60 * 1000, { long: true })).toBe('1 hour')
    expect(ms(60 * 60 * 1200, { long: true })).toBe('1 hour')
    expect(ms(60 * 60 * 10000, { long: true })).toBe('10 hours')

    expect(ms(-1 * 60 * 60 * 1000, { long: true })).toBe('-1 hour')
    expect(ms(-1 * 60 * 60 * 1200, { long: true })).toBe('-1 hour')
    expect(ms(-1 * 60 * 60 * 10000, { long: true })).toBe('-10 hours')
  })

  it('should support days', function () {
    expect(ms(24 * 60 * 60 * 1000, { long: true })).toBe('1 day')
    expect(ms(24 * 60 * 60 * 1200, { long: true })).toBe('1 day')
    expect(ms(24 * 60 * 60 * 10000, { long: true })).toBe('10 days')

    expect(ms(-1 * 24 * 60 * 60 * 1000, { long: true })).toBe('-1 day')
    expect(ms(-1 * 24 * 60 * 60 * 1200, { long: true })).toBe('-1 day')
    expect(ms(-1 * 24 * 60 * 60 * 10000, { long: true })).toBe('-10 days')
  })

  it('should round', function () {
    expect(ms(234234234, { long: true })).toBe('3 days')

    expect(ms(-234234234, { long: true })).toBe('-3 days')
  })
})

// numbers

describe('ms(number)', function () {
  it('should not throw an error', function () {
    expect(function () {
      ms(500)
    }).not.toThrowError()
  })

  it('should support milliseconds', function () {
    expect(ms(500)).toBe('500ms')

    expect(ms(-500)).toBe('-500ms')
  })

  it('should support seconds', function () {
    expect(ms(1000)).toBe('1s')
    expect(ms(10000)).toBe('10s')

    expect(ms(-1000)).toBe('-1s')
    expect(ms(-10000)).toBe('-10s')
  })

  it('should support minutes', function () {
    expect(ms(60 * 1000)).toBe('1m')
    expect(ms(60 * 10000)).toBe('10m')

    expect(ms(-1 * 60 * 1000)).toBe('-1m')
    expect(ms(-1 * 60 * 10000)).toBe('-10m')
  })

  it('should support hours', function () {
    expect(ms(60 * 60 * 1000)).toBe('1h')
    expect(ms(60 * 60 * 10000)).toBe('10h')

    expect(ms(-1 * 60 * 60 * 1000)).toBe('-1h')
    expect(ms(-1 * 60 * 60 * 10000)).toBe('-10h')
  })

  it('should support days', function () {
    expect(ms(24 * 60 * 60 * 1000)).toBe('1d')
    expect(ms(24 * 60 * 60 * 10000)).toBe('10d')

    expect(ms(-1 * 24 * 60 * 60 * 1000)).toBe('-1d')
    expect(ms(-1 * 24 * 60 * 60 * 10000)).toBe('-10d')
  })

  it('should round', function () {
    expect(ms(234234234)).toBe('3d')

    expect(ms(-234234234)).toBe('-3d')
  })
})

describe('ms(number, { long: true, decimal: n })', function () {
  it('should not throw an error', function () {
    expect(function () {
      ms(500, { long: true, decimal: 1 })
    }).not.toThrowError()
  })

  it('should support milliseconds', function () {
    expect(ms(500, { long: true, decimal: 1 })).toBe('500 ms')

    expect(ms(-500, { long: true, decimal: 1 })).toBe('-500 ms')
  })

  it('should support seconds', function () {
    expect(ms(1000, { long: true, decimal: 1 })).toBe('1 second')
    expect(ms(1200, { long: true, decimal: 1 })).toBe('1.2 second')
    expect(ms(1234, { long: true, decimal: 2 })).toBe('1.23 second')
    expect(ms(10000, { long: true, decimal: 1 })).toBe('10 seconds')

    expect(ms(-1000, { long: true, decimal: 1 })).toBe('-1 second')
    expect(ms(-1200, { long: true, decimal: 1 })).toBe('-1.2 second')
    expect(ms(-10000, { long: true, decimal: 1 })).toBe('-10 seconds')
  })

  it('should support minutes', function () {
    expect(ms(60 * 1000, { long: true, decimal: 1 })).toBe('1 minute')
    expect(ms(60 * 1200, { long: true, decimal: 1 })).toBe('1.2 minute')
    expect(ms(60 * 10000, { long: true, decimal: 1 })).toBe('10 minutes')

    expect(ms(-1 * 60 * 1000, { long: true, decimal: 1 })).toBe('-1 minute')
    expect(ms(-1 * 60 * 1200, { long: true, decimal: 1 })).toBe('-1.2 minute')
    expect(ms(-1 * 60 * 10000, { long: true, decimal: 1 })).toBe('-10 minutes')
  })

  it('should support hours', function () {
    expect(ms(60 * 60 * 1000, { long: true, decimal: 1 })).toBe('1 hour')
    expect(ms(60 * 60 * 1200, { long: true, decimal: 1 })).toBe('1.2 hour')
    expect(ms(60 * 60 * 10000, { long: true, decimal: 1 })).toBe('10 hours')

    expect(ms(-1 * 60 * 60 * 1000, { long: true, decimal: 1 })).toBe('-1 hour')
    expect(ms(-1 * 60 * 60 * 1200, { long: true, decimal: 1 })).toBe('-1.2 hour')
    expect(ms(-1 * 60 * 60 * 10000, { long: true, decimal: 1 })).toBe('-10 hours')
  })

  it('should support days', function () {
    expect(ms(24 * 60 * 60 * 1000, { long: true, decimal: 1 })).toBe('1 day')
    expect(ms(24 * 60 * 60 * 1200, { long: true, decimal: 1 })).toBe('1.2 day')
    expect(ms(24 * 60 * 60 * 10000, { long: true, decimal: 1 })).toBe('10 days')

    expect(ms(-1 * 24 * 60 * 60 * 1000, { long: true, decimal: 1 })).toBe('-1 day')
    expect(ms(-1 * 24 * 60 * 60 * 1200, { long: true, decimal: 1 })).toBe('-1.2 day')
    expect(ms(-1 * 24 * 60 * 60 * 10000, { long: true, decimal: 1 })).toBe('-10 days')
  })

  it('should round with 2 decimal place', function () {
    expect(ms(234234234, { long: true, decimal: 2 })).toBe('2.71 days')

    expect(ms(-234234234, { long: true, decimal: 2 })).toBe('-2.71 days')
  })

  it('should round with up to 3 decimal place', function () {
    expect(ms(234234234, { long: true, decimal: 3 })).toBe('2.711 days')
    expect(ms(234234234, { long: true, decimal: 10 })).toBe('2.711 days')

    expect(ms(-234234234, { long: true, decimal: 3 })).toBe('-2.711 days')
    expect(ms(-234234234, { long: true, decimal: 10 })).toBe('-2.711 days')

    // @ts-ignore
    expect(ms(ms('10.54321 hours'), { long: true, decimal: 1 })).toBe('10.5 hours')
    expect(ms(-3 * 66121, { long: true, decimal: 1 })).toBe('-3.3 minutes')
  })
})

describe('ms(number, { decimal: n })', function () {
  it('should not throw an error', function () {
    expect(function () {
      ms(500, { decimal: 1 })
    }).not.toThrowError()
  })

  it('should support milliseconds', function () {
    expect(ms(500, { decimal: 1 })).toBe('500ms')

    expect(ms(-500, { decimal: 1 })).toBe('-500ms')
  })

  it('should support seconds', function () {
    expect(ms(1000, { decimal: 1 })).toBe('1s')
    expect(ms(1200, { decimal: 1 })).toBe('1.2s')
    expect(ms(10000, { decimal: 1 })).toBe('10s')

    expect(ms(-1000, { decimal: 1 })).toBe('-1s')
    expect(ms(-1200, { decimal: 1 })).toBe('-1.2s')
    expect(ms(-10000, { decimal: 1 })).toBe('-10s')
  })

  it('should support minutes', function () {
    expect(ms(60 * 1000, { decimal: 1 })).toBe('1m')
    expect(ms(60 * 1200, { decimal: 1 })).toBe('1.2m')
    expect(ms(60 * 10000, { decimal: 1 })).toBe('10m')

    expect(ms(-1 * 60 * 1000, { decimal: 1 })).toBe('-1m')
    expect(ms(-1 * 60 * 1200, { decimal: 1 })).toBe('-1.2m')
    expect(ms(-1 * 60 * 10000, { decimal: 1 })).toBe('-10m')
  })

  it('should support hours', function () {
    expect(ms(60 * 60 * 1000, { decimal: 1 })).toBe('1h')
    expect(ms(60 * 60 * 1200, { decimal: 1 })).toBe('1.2h')
    expect(ms(60 * 60 * 10000, { decimal: 1 })).toBe('10h')

    expect(ms(-1 * 60 * 60 * 1000, { decimal: 1 })).toBe('-1h')
    expect(ms(-1 * 60 * 60 * 1200, { decimal: 1 })).toBe('-1.2h')
    expect(ms(-1 * 60 * 60 * 10000, { decimal: 1 })).toBe('-10h')
  })

  it('should support days', function () {
    expect(ms(24 * 60 * 60 * 1000, { decimal: 1 })).toBe('1d')
    expect(ms(24 * 60 * 60 * 1200, { decimal: 1 })).toBe('1.2d')
    expect(ms(24 * 60 * 60 * 10000, { decimal: 1 })).toBe('10d')

    expect(ms(-1 * 24 * 60 * 60 * 1000, { decimal: 1 })).toBe('-1d')
    expect(ms(-1 * 24 * 60 * 60 * 1200, { decimal: 1 })).toBe('-1.2d')
    expect(ms(-1 * 24 * 60 * 60 * 10000, { decimal: 1 })).toBe('-10d')
  })

  it('should round with 2 decimal place', function () {
    expect(ms(234234234, { decimal: 2 })).toBe('2.71d')

    expect(ms(-234234234, { decimal: 2 })).toBe('-2.71d')
  })

  it('should round with up to 3 decimal place', function () {
    expect(ms(234234234, { decimal: 3 })).toBe('2.711d')
    expect(ms(234234234, { decimal: 10 })).toBe('2.711d')

    expect(ms(-234234234, { decimal: 3 })).toBe('-2.711d')
    expect(ms(-234234234, { decimal: 10 })).toBe('-2.711d')

    // @ts-ignore
    expect(ms(ms('10.54321 hours'), { decimal: 1 })).toBe('10.5h')
    expect(ms(-3 * 66121, { decimal: 1 })).toBe('-3.3m')
  })
})
