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