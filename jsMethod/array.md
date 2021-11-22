# JS Array 方法

## 新增＆移除 JS element

- 會改變原本的 Array
- return  要點=> 拿掉 element 會 return element，新增 element 會 return 新的長度。

1. 加到最後面(push)

```js
const fruits = ["Apple", "Banana"];
fruits.push("wiki"); // 3
```

- multiple push

```js
const fruits = [];
fruits.push("banana", "apple", "peach");

frutis = ["banana", "apple", "peach"];
```

2. 加到最前面(unshift)

3. 刪除最後面(pop)

4. 刪除最前面(shift)

5. 拼接特定位置的項目(splice)
   array.splice(特定 index, 該(index 開始)要拼接的數量)

```js
const fruits = ["Apple", "Banana", "Kiwi"];
fruits.splice(1, 1); // ['Banana']
// 指從index 1 ("Banana") 開始取1個
```

## 找元素的位置

### indexOf

- string 也有此方法

```js
const fruits = ["Strawberry", "Banana", "Mango"];

fruits.indexOf("Mango"); // 2
```

## Array 背後預設 會有 index 值作為 key, 可以使用以下方式來操作

```js
const fruits = ["Strawberry", "Banana", "Mango"];
fruits[5] = "fruit";

// ['Strawberry', 'Banana', 'Mango', empty × 2, 'fruit']
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

## Arguments

```js
function fn() {
  console.log(arguments);
}

fn("a", "b", "c", "d");
```
