# MS

Easily convert various time formats to milliseconds, and milliseconds back to the formats.
Forked from [vercel/ms](https://github.com/vercel/ms)

<p align="center">
  <h4/>
  <a href='https://www.npmjs.com/package/@caldwell619/ms'>
    <img src="https://img.shields.io/npm/v/@caldwell619/ms">
  </a>
  <a href='https://bundlephobia.com/result?p=@caldwell619/ms'>
    <img src="https://img.shields.io/bundlephobia/min/@caldwell619/ms">
  </a>
  <img src="https://codecov.io/gh/christopher-caldwell/ms/branch/master/graph/badge.svg?token=2LA7ETDPO3">
  <img src="https://img.shields.io/github/last-commit/christopher-caldwell/ms">
  <img src="https://img.shields.io/npm/types/@caldwell619/ms">
</p>

## Installation

```bash
# Yarn
yarn add @caldwell619/ms

# NPM
npm install --save @caldwell619/ms
```

## Usage

2 main utilities are exposed:

```ts
import { convertTimeToMs, convertMsToTime } from '@caldwell619/ms'
```

The only required argument is the input to be converted.

### Converting logical units to milliseconds

[Full list of supported units](#supported-units)

```ts
import { convertTimeToMs } from '@caldwell619/ms'

convertTimeToMs('5s') // 5000
convertTimeToMs('1m') // 60000
convertTimeToMs('10h') // 36000000
convertTimeToMs('2 days') // 172800000
convertTimeToMs('1y') // 31557600000
convertTimeToMs('-1h') // -3600000
```

### Number as milliseconds

```ts
import { convertMsToTime, convertTimeToMs } from '@caldwell619/ms'

convertMsToTime(60000) // "1m"
convertMsToTime(2 * 60000) // "2m"
convertMsToTime(-3 * 60000) // "-3m"
convertMsToTime(convertTimeToMs('10 hours')) // "10h"
```

#### Optional Configuration

The config is optional, as is every key in the config

| Argument        | Type                                       | Description                                           |
| --------------- | ------------------------------------------ | ----------------------------------------------------- |
| `long`          | `boolean`                                  | If present, will return the long version of the unit. |
| `preferredUnit` | `'ms', 's', 'm', 'h', 'w', 'd', 'mo', 'y'` | The supported unit you'd like the value returned in.  |

##### Long

This will print the value as `hours`, `minutes` as opposed to `h`, `m`.

```ts
convertMsToTime(60000, { long: true }) // "1 minute"
convertMsToTime(2 * 60000, { long: true }) // "2 minutes"
convertMsToTime(-3 * 60000, { long: true }) // "-3 minutes"
convertMsToTime(convertTimeToMs('10 hours'), { long: true }) // "10 hours"
```

##### Preferred Unit

This is a working progress. It is implemented, but possibly not the way you'd like. Feel free to submit an [issue](https://github.com/christopher-caldwell/ms/issues/new) or [PR](https://github.com/christopher-caldwell/ms/compare) with how you'd like it done.

If provided, it will attempt to match the value with the given unit.

###### Example

For example, if your value resolves to `15 days`, that is also `2 weeks`. The default will return as `2 weeks`. This is the largest bucket the time can be put into.

This can be overridden with providing your `preferredUnit`.

```ts
convertMsToTime(7200000) // "2h"
convertMsToTime(7200000, { preferredUnit: 'm' }) // "120m"
convertMsToTime(7200000, { preferredUnit: 'm', long: true }) // "120 minutes"
```

###### Edge Cases

If your provided unit doesn't meet the requirement, meaning that the value cannot get to a full count of your unit, it will default to the next closest one.

```ts
convertMsToTime(7200000) // "2h"
convertMsToTime(7200000, { preferredUnit: 'd' }) // "2h"
convertMsToTime(7200000, { preferredUnit: 'd', long: true }) // "2 hours"
```

In this example, 2 hours cannot be represented as a `> 1 day`. This is where the funny business is, because maybe you'd prefer `0.08d` instead of defaulting to `2h`.

My preference is the latter, so :man_shrugging:

## Supported Units

The following unites are supported for `convertTimeToMs`

### Years

`years`, `year`, `yrs`, `yr` `y`

### Months

`months`, `month`, `mon`, `mo`

### Weeks

`weeks`, `week`, `wks`, `wk`, `w`

### Days

`days`, `day`, `d`

### Hours

`hours`, `hour`, `hrs`, `hr`, `h`

### Minutes

`minutes`, `minute`, `mins`, `min`, `m`

### Seconds

`seconds`, `second`, `secs`, `sec`, `s`

### Milliseconds

`milliseconds`, `millisecond`, `msecs`, `msec`, `ms`
