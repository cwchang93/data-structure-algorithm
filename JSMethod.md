# JS Method

## sort

- sort 會把原本的 array 改變，因此使用 sort 盡量另外 copy 另ㄧ個 array 會比較保險
- 注意負數，建議直接使用 array.sort((a,b)=> a-b);

```js
arr = [1, 2, 3, 3, 4, 2, 0];

arr.sort();

// arr
// [0, 1, 2, 2, 3, 3, 4]
```

## 把 Map 當作 Array 來使用

```js
const map = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
]);
Array.from(map);
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([
  ["1", "a"],
  ["2", "b"],
]);
Array.from(mapper.values());
// ['a', 'b'];

Array.from(mapper.keys());
// ['1', '2'];
```

## for & forEach 差別

1. for - 用 var 會在全域產生變數
2. for 可以被中斷

```js
// 若for 用var 會在全域產生變數
for (var i = 0; i < array.length; i++) {
  const item = array[i];
  console.log(i, item);
}
console.log(i); // 4
```
