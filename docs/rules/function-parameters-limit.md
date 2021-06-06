# The number of parameters is limited. (function-parameters-limit)

Limit on the number of parameters passed to a function.
There is a possibility of auto-correction.
Autocorrection will wrap all function parameters into one object.

## Rule Details

This rule aims to prevent the developer from creating functions with many parameters.

Examples of **incorrect** code for this rule:

```js

const functionExample = (one = 1, two, three, four=7, five, six, seven) => {
   return null;
}

function functionExample(one, two, three, four, five, six, seven) {
   return null;
}

```

Examples of **correct** code for this rule:

```js

const functionExample = (one, two) => {
   return null;
};

```

### Options

Will be in the future.

### Auto fix
before:
```js
function functionExample(one, two, three, four, five, six, seven) {
   return null;
}
```

after:
```js
function functionExample({one, two, three, four, five, six, seven}) {
   return null;
}
```
