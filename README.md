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

### 01-3. JavaScript資料結構

| immutable   | mutable    |
| ----------- | -------    |
| 原始型別 |  非原始型別   |
| Number      | Array      |
| String      | Object     |
| Boolean     | Function   |
| Null        | Date       |
| Undefined   | Regex      |
| Symbol      | Construct 建構式  |
| Boolean     |        |


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

Array 只要存第n個資料

## Linked List 
預期資料從前面插入時

## 
記憶體儲存資料的方法不同


## sort 
- sort會把原本的array改變，因此使用sort盡量另外copy另ㄧ個array會比較保險
- 注意負數，建議直接使用 array.sort((a,b)=> a-b);
```js
arr = [1,2,3,3,4,2,0];

arr.sort();

// arr  
// [0, 1, 2, 2, 3, 3, 4]

```


## Map & Set

### A. Map要點
-  類似Object，但Map的key可以是任意資料型態。
-  map 有依序

#### Map 內建
1. 創建Map: 兩兩一組，array包array，有點像php
```js
let map = new Map([  ['one',2], ['two', 2] ])  
//Map(2) {"one" => 2, "two" => 2}
```

2. map中增加一組   map.set(key, val);
```js
map.set('three',3);
// Map(3) {"one" => 2, "two" => 2, "three" => 3}
```

3. 取得map    map.get(key);
```js
map.get('three');  // 3
```

4. 刪除  map.delete(key);
```js
map.delete('three'); // true
// Map(3) {"one" => 2, "two" => 2}
```

輸出
```js
5. map.keys()  // MapIterator {"one", "two"}

6. map.values()  // MapIterator { 2 , 2 }

7. map.entries90
```

### B. Set要點
1. 找交集&聯集，無index 無key
2. 重複的會被視為唯一值
3. 無取出來做操作的用法
4. 多數著重在has，集合資料比對

JS的set有順序，因為是用array實做出來的


### C. HashMap
由key & value 所作成的資料結構。有key跟value就能當作HashMap
=> Array, Object, Map


