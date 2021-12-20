# Stack

## Reference

<a href="https://www.tutorialspoint.com/data_structures_algorithms/stack_algorithm.htm">
- Data Structure and Algorithms - Stack
</a> <br>
<a href="https://www.tutorialspoint.com/data_structures_algorithms/dsa_queue.htm">
- Data Structure and Algorithms - Queue
</a><br>
<a href="https://www.andrew.cmu.edu/course/15-121/lectures/Stacks%20and%20Queues/Stacks%20and%20Queues.html">
- Stacks and Queues
</a>

## Stack 特性

- LIFO: Last In First Out (LIFO)

- Push (Last In)

- Pop (First Out)

#### Stack 常見運算：

- push() − Pushing (storing) an element on the stack.
- pop() − Removing (accessing) an element from the stack.
- peek() 或 top() − get the top data element of the stack, without removing it.
- isFull() − check if stack is full.
- isEmpty() − check if stack is empty.

## Queue (佇列) 特性

- Oneway (想像成水管)
- FIFO: First In First Out

#### Queue 常見運算

- enqueue() − add (store) an item to the queue.
- dequeue() − remove (access) an item from the queue.

* peek() 或 top() − get the top data element of the stack, without removing it.
* isFull() − check if stack is full.
* isEmpty() − check if stack is empty.

#### Stack memory vs Heap memory

Stack Memory: 靜態 -> 用完結束

Heap Memory: 動態

1. Stack Overflow
   程式已經超過負載
2. Garbage Collection

#### Stack 在 JS 中實現

stack overflow - 程式所要求的記憶體空間太多，超過電腦所能提供的上限
memory leak - 程式當中的變數使用完後沒有釋放記憶體，導致空間不夠

1. Stack

```js
class Stack {
  constructor() {
    this.stack = [];
  }
  push(val) {
    this.stack.push(val);
  }
  pop() {
    return this.stack.pop();
  }
}
```

2. Queue

```js
class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(val) {
    this.queue.push(val);
  }
  dequeue() {
    return this.queue.shift();
  }
}
```
