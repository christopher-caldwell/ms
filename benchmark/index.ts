import Benchmark from 'benchmark'
import colors from 'colors'

import { Result } from './types'
import { ms } from '../src/'

const suite = new Benchmark.Suite()

// add tests
suite
  .add('No decimal', () => {
    ms('1 day')
  })
  .add('Decimal', () => {
    ms('1 day', { decimal: 2 })
  })
  .on('complete', () => {
    const [fastestRunner] = suite.filter('fastest').map((result: Result) => {
      return result.name
    })
    console.log('Fastest is ' + colors.cyan(fastestRunner))
  })
  // run async
  .run({ async: true })
