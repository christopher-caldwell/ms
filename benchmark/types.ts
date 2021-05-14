export interface Result {
  name: string
  options: {
    async: boolean
    defer: boolean
    delay: number
    id: undefined
    initCount: number
    maxTime: number
    minSamples: number
    minTime: number
    name: undefined
    onAbort: undefined
    onComplete: undefined
    onCycle: undefined
    onError: undefined
    onReset: undefined
    onStart: undefined
  }
  async: boolean
  defer: boolean
  delay: number
  initCount: number
  maxTime: number
  minSamples: number
  minTime: number
  id: number
  fn: () => void
  stats: {
    moe: number
    rme: number
    sem: number
    deviation: number
    mean: number
    sample: number[]
    variance: number
  }
  times: {
    cycle: number
    elapsed: number
    period: number
    /** Epoch time stamp */
    timeStamp: number
  }
  _timerId: {
    _idleTimeout: number
    _idlePrev: null
    _idleNext: null
    _idleStart: number
    _onTimeout: () => void
    _timerArgs: undefined
    _repeat: null
    _destroyed: boolean
  }
  events: { complete: [] }
  running: boolean
  count: number
  compiled: () => void
  cycles: number
  hz: number
}