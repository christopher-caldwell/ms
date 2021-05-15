import {
  createMsFromSeconds,
  createMsFromMinutes,
  createMsFromHours,
  createMsFromDays,
  createMsFromWeeks,
  createMsFromMonths,
  createMsFromYears,
} from '@/helpers'

describe('Testing Helper Functions', () => {
  test('Seconds', () => {
    const one = createMsFromSeconds(1)
    const two = createMsFromSeconds(2)
    const twelve = createMsFromSeconds(12)
    expect(one).toBe(1000)
    expect(two).toBe(2000)
    expect(twelve).toBe(12000)
  })
  test('Minutes', () => {
    const one = createMsFromMinutes(1)
    const two = createMsFromMinutes(2)
    const twelve = createMsFromMinutes(12)
    expect(one).toBe(60000)
    expect(two).toBe(120000)
    expect(twelve).toBe(720000)
  })
  test('Hours', () => {
    const one = createMsFromHours(1)
    const two = createMsFromHours(2)
    const twelve = createMsFromHours(12)
    expect(one).toBe(3600000)
    expect(two).toBe(7200000)
    expect(twelve).toBe(43200000)
  })
  test('Days', () => {
    const one = createMsFromDays(1)
    const two = createMsFromDays(2)
    const twelve = createMsFromDays(12)
    expect(one).toBe(86400000)
    expect(two).toBe(172800000)
    expect(twelve).toBe(1036800000)
  })
  test('Weeks', () => {
    const one = createMsFromWeeks(1)
    const two = createMsFromWeeks(2)
    const twelve = createMsFromWeeks(12)
    expect(one).toBe(604800000)
    expect(two).toBe(1209600000)
    expect(twelve).toBe(7257600000)
  })
  test('Months ( 30 days )', () => {
    const one = createMsFromMonths(1)
    const two = createMsFromMonths(2)
    const twelve = createMsFromMonths(12)
    expect(one).toBe(2592000000)
    expect(two).toBe(5184000000)
    expect(twelve).toBe(31104000000)
  })
  test('Year', () => {
    const one = createMsFromYears(1)
    const two = createMsFromYears(2)
    const twelve = createMsFromYears(12)
    expect(one).toBe(31557600000)
    expect(two).toBe(63115200000)
    expect(twelve).toBe(378691200000)
  })
})
