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
