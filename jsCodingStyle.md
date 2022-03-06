# Coding Style

```js
// bad
function handleThings(opts = {}, name) {
  // ...
}

// good
function handleThings(name, opts = {}) {
  // ...
}
```

Don’t use iterators. Prefer JavaScript’s higher-order functions instead of loops like for-in or for-of. eslint: no-iterator no-restricted-syntax

Why? This enforces our immutable rule. Dealing with pure functions that return values is easier to reason about than side effects.

Use map() / every() / filter() / find() / findIndex() / reduce() / some() / ... to iterate over arrays, and Object.keys() / Object.values() / Object.entries() to produce arrays so you can iterate over objects.

```js
const luke = {
  jedi: true,
  age: 28,
};

// bad
const isJedi = luke["jedi"];

// good
const isJedi = luke.jedi;

function getProp(prop) {
  return luke[prop];
}

const isJedi = getProp("jedi");
```

Don't use selection operators in place of control statements.

```js
// bad
!isRunning && startRunning();

// good
if (!isRunning) {
  startRunning();
}
```

Use // for single line comments. Place single line comments on a newline above the subject of the comment. Put an empty line before the comment unless it’s on the first line of a block.

Avoid having lines of code that are longer than 100 characters (including whitespace). Note: per above, long strings are exempt from this rule, and should not be broken up. eslint: max-len

Reference Naming: Use PascalCase for React components and camelCase for their instances. eslint: react/jsx-pascal-case

why single quote?

Always use camelCase for prop names, or PascalCase if the prop value is a React component.

Avoid using an array index as key prop, prefer a stable ID. eslint: react/no-array-index-key
Why? Not using a stable ID is an anti-pattern because it can negatively impact performance and cause issues with component state.

Arabic layout checkpoint
