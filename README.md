# eslint-plugin-burton

plugin with my custom rules

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-burton`:

```
$ npm install eslint-plugin-burton --save-dev
```


## Usage

Add `burton` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "burton"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "burton/rule-name": 2
    }
}
```

## Supported Rules

<!-- AUTO-GENERATED-CONTENT:START (BASIC_RULES) -->
| 🔧 | Rule | Description |
| :---: | :--- | :--- |
|  | [no-bad-await](docs/rules/no-bad-await.md) | Disallowing the use of the await keyword in complex expressions |
| 🔧 | [function-parameters-limit](docs/rules/function-parameters-limit.md) | Creates a limit on the number of parameters passed to the function
 |
<!-- AUTO-GENERATED-CONTENT:END -->

With the help https://github.com/eslint/generator-eslint





