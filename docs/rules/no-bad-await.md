# Prohibiting the use of the await keyword in complex expressions. (no-bad-await)
This rule takes advantage of the explicit designation of an asynchronous operation. Plus, code that compiles for older browsers is easier to debug.


## Rule Details

This rule aims to the developer explicitly denoted asynchronous operations.

Examples of **incorrect** code for this rule:

```js

1 + await b

a = foo(await b)

a = {
  x: foo(),
  z: await b
}

```

Examples of **correct** code for this rule:

```js

const a = await b

a = await b

return await b

await b

```
