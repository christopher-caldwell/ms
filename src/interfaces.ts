export type SupportedUnit = 'ms' | 's' | 'm' | 'h' | 'w' | 'd' | 'mo' | 'y'

export interface Options {
  long?: boolean
  /** maximum 3 decimal place */
  decimal?: number
  /** The supported unit you'd like the value returned in.
   * Providing `d`, would return `14 days` instead of `2 weeks`.
   *
   * The returned unit is rounded, so if 10 days closer to 1 week, 1 week will be returned.
   *
   * **Default:** The largest unit available, meaning if it's more than 60 minutes, it would be returned in hours.
   *
   * @note Only used when providing the number of ms to determine the relative time string
   */
  preferredUnit?: SupportedUnit
}
