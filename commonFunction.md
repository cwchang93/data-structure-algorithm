```ts
const roundNum = (num: number, digitToFix: number) =>
  Math.round((num + Number.EPSILON) * 10 ** digitToFix) / 10 ** digitToFix;
```
