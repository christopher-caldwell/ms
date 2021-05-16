import { convertMsToTime, convertTimeToMs } from '@/index'
import { maximumInputLength } from '@/helpers'

describe('ms(invalid inputs)', () => {
  it('should throw an error, when ms("")', () => {
    expect(() => {
      //@ts-ignore
      convertTimeToMs('')
    }).toThrowError()
    expect(() => {
      //@ts-ignore
      convertMsToTime('')
    }).toThrowError()
  })

  it('should return undefined when the value is longer than 100 characters', () => {
    const tooLongInput = new Array(maximumInputLength + 1).fill('a').reduce((acc, current) => acc + current, '')
    expect(convertTimeToMs(tooLongInput)).toBe(undefined)
  })

  it('should throw an error, when ms(undefined)', () => {
    expect(() => {
      //@ts-ignore
      convertMsToTime(undefined)
    }).toThrowError()
    expect(() => {
      //@ts-ignore
      convertTimeToMs(undefined)
    }).toThrowError()
  })

  it('should throw an error, when ms(null)', () => {
    expect(() => {
      //@ts-ignore
      convertMsToTime(null)
    }).toThrowError()
    expect(() => {
      //@ts-ignore
      convertTimeToMs(null)
    }).toThrowError()
  })

  it('should throw an error, when ms([])', () => {
    expect(() => {
      //@ts-ignore
      convertMsToTime([])
    }).toThrowError()
    expect(() => {
      //@ts-ignore
      convertTimeToMs([])
    }).toThrowError()
  })

  it('should throw an error, when ms({})', () => {
    expect(() => {
      //@ts-ignore
      convertMsToTime({})
    }).toThrowError()
    expect(() => {
      //@ts-ignore
      convertTimeToMs({})
    }).toThrowError()
  })

  it('should throw an error, when ms(NaN)', () => {
    expect(() => {
      //@ts-ignore
      convertMsToTime(NaN)
    }).toThrowError()
    expect(() => {
      //@ts-ignore
      convertTimeToMs(NaN)
    }).toThrowError()
  })

  it('should throw an error, when ms(Infinity)', () => {
    expect(() => {
      //@ts-ignore
      convertMsToTime(Infinity)
    }).toThrowError()
    expect(() => {
      //@ts-ignore
      convertTimeToMs(Infinity)
    }).toThrowError()
  })

  it('should throw an error, when ms(-Infinity)', () => {
    expect(() => {
      //@ts-ignore
      convertMsToTime(-Infinity)
    }).toThrowError()
    expect(() => {
      //@ts-ignore
      convertTimeToMs(-Infinity)
    }).toThrowError()
  })
})
