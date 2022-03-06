# JS Array 方法

## A. 新增＆移除 JS element

- 會改變原本的 Array
- return  什麼東西？ <br>
  -> 要點=> 拿掉 element 會 return element，新增 element 會 return 新的長度。

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

5. 刪除 Array 中的特定元素

```js
const array = [2, 5, 9];

console.log(array);

const index = array.indexOf(5);
if (index > -1) {
  array.splice(index, 1);
}

// array = [2, 9]
console.log(array);
```

## B. 刪取

拼接特定位置的項目(splice)
array.splice(特定 index, 該(index 開始)要拼接的數量)

```js
const fruits = ["Apple", "Banana", "Kiwi"];
fruits.splice(1, 1); // ['Banana']
// 指從index 1 ("Banana") 開始取1個
```

## 擷取 Slice

```js
const fruits = ["Apple", "Banana", "Kiwi", "Pie", "fruit", "grape"];

// 取index 1-3(不含)
fruits.slice(1, 3); //  ['Banana', 'Kiwi']
```

## C. 找元素的位置

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

## Arguments

```js
function fn() {
  console.log(arguments);
}

fn("a", "b", "c", "d");
```

## 合併兩個 Array

```js
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];

array1.concat(array2); // ['a','b','c','d','e','f'];
```
