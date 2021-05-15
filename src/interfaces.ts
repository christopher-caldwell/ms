export type SupportedUnit = 'ms' | 's' | 'm' | 'h' | 'w' | 'd' | 'mo' | 'y'

export interface Options {
  /** If present, will return the long version of the unit.
   * @eg `"1 hour"`
   */
  long?: boolean
  /** The supported unit you'd like the value returned in.
   * Providing `d`, would return `14 days` instead of `2 weeks`.
   *
   * The returned unit is rounded, so if 10 days closer to 1 week, 1 week will be returned.
   *
   * **Default:** The largest unit available, meaning if it's more than 60 minutes, it would be returned in hours.
   *
   * @note Only used when providing the number of ms to determine the relative time string
   * @note If your preferred unit doesn't qualify, such as asking for `d` when the value is `18 hours`, it will be returned at the closest available unit.
   * In this example, it would return `18 hours` even if you asked for days.
   */
  preferredUnit?: SupportedUnit
}
