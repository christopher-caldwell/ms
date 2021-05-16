# MS

Easily convert various time formats to milliseconds, and milliseconds back to the formats.
Forked from [vercel/ms](https://github.com/vercel/ms)

<p align="center">
  <h4/>
  <img src="https://img.shields.io/npm/v/@caldwell619/ms">
  <img src="https://img.shields.io/bundlephobia/min/@caldwell619/ms">
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

The only required argument is the input to be converted.

Accepted types are `string` | `number`

### String as logical units

[Full list of supported units](#supported-units)

```js
ms('5s') // 5000
ms('1m') // 60000
ms('10h') // 36000000
ms('2 days') // 172800000
ms('1y') // 31557600000
ms('-1h') // -3600000
```

### Number as milliseconds

```js
ms(60000) // "1m"
ms(2 * 60000) // "2m"
ms(-3 * 60000) // "-3m"
ms(ms('10 hours')) // "10h"
```

## Optional Configuration

The config is optional, as is every key in the config

| Argument        | Type                                       |                                                       |
| --------------- | ------------------------------------------ | ----------------------------------------------------- |
| `long`          | `boolean`                                  | If present, will return the long version of the unit. |
| `preferredUnit` | `'ms', 's', 'm', 'h', 'w', 'd', 'mo', 'y'` | The supported unit you'd like the value returned in.  |

### Long

**Only used for numbers to logical representations.**

This will print the value as `hours`, `minutes` as opposed to `h`, `m`.

```ts
ms(60000, { long: true }) // "1 minute"
ms(2 * 60000, { long: true }) // "2 minutes"
ms(-3 * 60000, { long: true }) // "-3 minutes"
ms(ms('10 hours'), { long: true }) // "10 hours"
```

### Preferred Unit

**Only used for numbers to logical representations.**

This is a working progress. It is implemented, but possibly not the way you'd like. Feel free to submit an [issue](https://github.com/christopher-caldwell/ms/issues/new) or [PR](https://github.com/christopher-caldwell/ms/compare) with how you'd like it done.

If provided, it will attempt to match the value with the given unit.

#### Example

For example, if your value resolves to `15 days`, that is also `2 weeks`. The default will return as `2 weeks`. This is the largest bucket the time can be put into.

This can be overridden with providing your `preferredUnit`.

```ts
ms(7200000) // "2h"
ms(7200000, { preferredUnit: 'm' }) // "120m"
```

#### Edge Cases

If your provided unit doesn't meet the requirement, meaning that the value cannot get to a full count of your unit, it will default to the next closest one.

```ts
ms(7200000) // "2h"
ms(7200000, { preferredUnit: 'd' }) // "2h"
```

In this example, 2 hours cannot be represented as a `> 1 day`. This is where the funny business is, because maybe you'd prefer `0.08d` instead of defaulting to `2h`.

My preference is the latter, so :man_shrugging:

## Supported Units

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
