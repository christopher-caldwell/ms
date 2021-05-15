import { ms } from '@/index'
import { maximumInputLength } from '@/helpers'

describe('ms(invalid inputs)', () => {
  it('should throw an error, when ms("")', () => {
    expect(() => {
      //@ts-ignore
      ms('')
    }).toThrowError()
  })

  it('should return undefined when the value is longer than 100 characters', () => {
    const tooLongInput = new Array(maximumInputLength + 1).fill('a').reduce((acc, current) => acc + current, '')
    ms(tooLongInput)
    expect(ms(tooLongInput)).toBe(undefined)
  })

  it('should throw an error, when ms(undefined)', () => {
    expect(() => {
      //@ts-ignore
      ms(undefined)
    }).toThrowError()
  })

  it('should throw an error, when ms(null)', () => {
    expect(() => {
      //@ts-ignore
      ms(null)
    }).toThrowError()
  })

  it('should throw an error, when ms([])', () => {
    expect(() => {
      //@ts-ignore
      ms([])
    }).toThrowError()
  })

  it('should throw an error, when ms({})', () => {
    expect(() => {
      //@ts-ignore
      ms({})
    }).toThrowError()
  })

  it('should throw an error, when ms(NaN)', () => {
    expect(() => {
      ms(NaN)
    }).toThrowError()
  })

  it('should throw an error, when ms(Infinity)', () => {
    expect(() => {
      ms(Infinity)
    }).toThrowError()
  })

  it('should throw an error, when ms(-Infinity)', () => {
    expect(() => {
      ms(-Infinity)
    }).toThrowError()
  })
})
