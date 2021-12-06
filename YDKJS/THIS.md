# YDKJS - This

## This 的 4 種綁定方式

1. 預設綁定
   原則：
   a. this 預設會指向全域 window
   b. 用嚴謹模式 this 會是 undefined

```js
// 瀏覽器中
// a. 指向全域
console.log(this); // window

// b. use strick
function printThis() {
  "use strict";
  console.log(this);
}

printThis(); // undefined
```

、隱含綁定、明確綁定和 new 綁定
