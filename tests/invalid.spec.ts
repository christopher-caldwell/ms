import { ms } from '@/index'

describe('ms(invalid inputs)', function () {
  it('should throw an error, when ms("")', function () {
    expect(function () {
      //@ts-ignore
      ms('')
    }).toThrowError()
  })

  it('should throw an error, when ms(undefined)', function () {
    expect(function () {
      //@ts-ignore
      ms(undefined)
    }).toThrowError()
  })

  it('should throw an error, when ms(null)', function () {
    expect(function () {
      //@ts-ignore
      ms(null)
    }).toThrowError()
  })

  it('should throw an error, when ms([])', function () {
    expect(function () {
      //@ts-ignore
      ms([])
    }).toThrowError()
  })

  it('should throw an error, when ms({})', function () {
    expect(function () {
      //@ts-ignore
      ms({})
    }).toThrowError()
  })

  it('should throw an error, when ms(NaN)', function () {
    expect(function () {
      ms(NaN)
    }).toThrowError()
  })

  it('should throw an error, when ms(Infinity)', function () {
    expect(function () {
      ms(Infinity)
    }).toThrowError()
  })

  it('should throw an error, when ms(-Infinity)', function () {
    expect(function () {
      ms(-Infinity)
    }).toThrowError()
  })
})
