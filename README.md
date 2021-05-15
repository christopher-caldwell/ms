# MS

Easily convert various time formats to milliseconds, and milliseconds back to the formats. Forked from [vercel/ms](https://github.com/vercel/ms)

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

## Examples

```js
ms('2 days') // 172800000
ms('1d') // 86400000
ms('10h') // 36000000
ms('2.5 hrs') // 9000000
ms('2h') // 7200000
ms('1m') // 60000
ms('5s') // 5000
ms('1y') // 31557600000
ms('100') // 100
ms('-3 days') // -259200000
ms('-1h') // -3600000
ms('-200') // -200
```

### Convert from Milliseconds

```js
ms(60000) // "1m"
ms(2 * 60000) // "2m"
ms(-3 * 60000) // "-3m"
ms(ms('10 hours')) // "10h"
```

### Time Format Written-Out

```js
ms(60000, { long: true }) // "1 minute"
ms(2 * 60000, { long: true }) // "2 minutes"
ms(-3 * 60000, { long: true }) // "-3 minutes"
ms(ms('10 hours'), { long: true }) // "10 hours"
```

## Features

- Works both in [Node.js](https://nodejs.org) and in the browser
- If a number is supplied to `ms`, a string with a unit is returned
- If a string that contains the number is supplied, it returns it as a number (e.g.: it returns `100` for `'100'`)
- If you pass a string with a number and a valid unit, the number of equivalent milliseconds is returned
