```ts
const roundNum = (num: number, digitToFix: number) =>
  Math.round((num + Number.EPSILON) * 10 ** digitToFix) / 10 ** digitToFix;
```

## JS fetch vs axios

axios
用 XMLHttpRequest wide browser support

fetch
並非每個 browser 都支援，需另外加 whatwg-fetch

```ts
import 'whatwg-fetch'
window.fetch(...)

```

```ts
// axios
axios.get("https://api.github.com/orgs/axios").then(
  (response) => {
    console.log(response.data);
  },
  (error) => {
    console.log(error);
  }
);

// fetch()
fetch("https://api.github.com/orgs/axios")
  .then((response) => response.json()) // one extra step
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.error(error));
```

## HTTP interceptors
