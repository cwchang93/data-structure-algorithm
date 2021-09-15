# Data Structure and Algorithm Note

## 01. 何謂資料結構

資料：一堆元素所組成的有限集合
結構：元素間的組成關係

### 01-1. Data Type

```
1. a set of data
2. the operations operations that can be performed on the data
=> 資料提供的運算方法
```

### 01-2. ADT (Abstract Data Type)

```
抽象資料型態
1. 資料如何儲存
2. 資料如何運算
=> 定義跟實作分開，知道怎麼用但不知道底層如何實作。
```

### 01-3. JavaScript 資料結構

| immutable | mutable          |
| --------- | ---------------- |
| 原始型別  | 非原始型別       |
| Number    | Array            |
| String    | Object           |
| Boolean   | Function         |
| Null      | Date             |
| Undefined | Regex            |
| Symbol    | Construct 建構式 |
| Boolean   |                  |

<hr >

### Linked-List in JS

```js
// ES5 function 實現
function ListNode(var) {
    this.var = val;
    this.next = null;
}

function LinkedList(){
    this.head = new ListNode('head');
    this.node = new ListNode('node');
    ...
    this.find = find;
    this.insert = insert;
    this.remove = remove;
}

// ES6 class
class Node {
    constructor(item) {
        this.item = item;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = new Node('head');
    }
    append(node) {
        ...
    }
}

```

## Linked

Array 只要存第 n 個資料

## Linked List

預期資料從前面插入時

##

記憶體儲存資料的方法不同

## sort

- sort 會把原本的 array 改變，因此使用 sort 盡量另外 copy 另ㄧ個 array 會比較保險
- 注意負數，建議直接使用 array.sort((a,b)=> a-b);

```js
arr = [1, 2, 3, 3, 4, 2, 0];

arr.sort();

// arr
// [0, 1, 2, 2, 3, 3, 4]
```

## Map & Set

### A. Map 要點

- 類似 Object，但 Map 的 key 可以是任意資料型態。
- map 有依序

#### Map 內建

1. 創建 Map: 兩兩一組，array 包 array，有點像 php

```js
let map = new Map([
  ["one", 2],
  ["two", 2],
]);
//Map(2) {"one" => 2, "two" => 2}
```

2. map 中增加一組 map.set(key, val);

```js
map.set("three", 3);
// Map(3) {"one" => 2, "two" => 2, "three" => 3}
```

3. 取得 map map.get(key);

```js
map.get("three"); // 3
```

4. 刪除 map.delete(key);

```js
map.delete("three"); // true
// Map(3) {"one" => 2, "two" => 2}
```

輸出

```js
5. map.keys()  // MapIterator {"one", "two"}

6. map.values()  // MapIterator { 2 , 2 }

7. map.entries() // MapIterator {'one' => 2, 'two' => 2}
```

### B. Set 要點

- 找交集&聯集，無 index 無 key
- 重複的會被視為唯一值
- 無取出來做操作的用法(Set 為最小運算單位)
- 多數著重在 has，集合資料比對
- 加入新元素時，Set 內部會用===來判斷是否有重複值，NaN 會被判斷為重複值(雖然 NaN !== NaN)

```js
const setA = new Set();
setA.add(NaN); // Set(1) {NaN}
setA.add(NaN); // Set(1) {NaN}
// 即使NaN !== NaN 但這邊會被視為重複的
```

- JS 的 set 有順序，因為是用 array 實做出來的

Set 用法

```js

1. set.add(1);
2. set.delete(1);
3. set.has(1);

```

### C. HashMap

由 key & value 所作成的資料結構。有 key 跟 value 就能當作 HashMap
=> Array, Object, Map
有 key value 就可以是 hash map

Hash function
Object: key
Array: index

### String & Array的差別
都基於index 
String => immutable  可比較

Array => mutable   可排序，不能比較

