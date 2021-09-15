# JS Array 方法

##  新增＆移除JS element
- 會改變原本的Array
- return 要點=> 拿掉element會return element，新增element會return 新的長度。 

1. 加到最後面(push)
```js
const fruits = ['Apple', 'Banana'];
fruits.push('wiki') // 3
```

- multiple push
```js
const fruits = []
fruits.push('banana', 'apple', 'peach')

frutis = ['banana', 'apple', 'peach']
```


2. 加到最前面(unshift)

3. 刪除最後面(pop)

4. 刪除最前面(shift)

5. 刪除特定位置的項目(splice)
array.splice(特定index, 該(index開始)要刪除的數量)
```js
const fruits = ['Apple', 'Banana', 'Kiwi'];
fruits.splice(1,1);  

```



## 找元素的位置
### indexOf
- string也有此方法

```js
const fruits = ["Strawberry", "Banana", "Mango"];

fruits.indexOf("Mango") // 2

```

## Array 背後預設 會有index值作為key, 可以使用以下方式來操作

```js
const fruits = ["Strawberry", "Banana", "Mango"];
fruits[5] = 'fruit';

// ['Strawberry', 'Banana', 'Mango', empty × 2, 'fruit'] 



```
