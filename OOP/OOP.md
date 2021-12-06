# OOP

## Concept

1. Object-oriented programming(OOP) is a programming paradigm based on the concept of objects.

2. We use objects to model (describe) real-world or abstract features

3. Objects may contain data(properties) and code(methods). By using objects, we pack data and the corresponding behavior into one block.

4. In OOP, objects are self-contained pieces/blocks of code.

5. Objects are building blocks of applications, and interact with one another.

6. Interactions happen through a public interface(API): methods taht the code outside of the object can access and use to communicate with the object;

7. OOP was developed with the goal of organizing code, to make it more flexible and easier to maintain.

```js
const user = {
  account: "test@gmail.com",
  password: "password",
  login(password) {
    // login logic
  },
};
```

## 4 Fundamental OOP Principles

1. Abstraction 抽象
   把真實世界的需求轉換為類別，這些類別可以包含狀態(屬性)或是行為(方法)。

2. Encapsulation 封裝
   隱藏或保護內部實作的細節，並且可以透過存取層級（Public、Private、Protected）來設定屬性或方法
   PS: js 沒有

3. Inheritance 繼承
    模組化，減少重複的程式碼。

4. Polymorphism 多型
   根據不同的繼承類別衍伸不同的方法與屬性

## JS OOP

Prototypes
prototypal inheritance

```js
const nums = [1, 2, 3];
Array.prototype.map();

nums.map(() => {});
```

3 個 JS Prototype 的實踐方法

1. Constructor functions

2. ES6 Classes

3. Object.create()
