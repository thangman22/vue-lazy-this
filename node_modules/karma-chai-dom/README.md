# karma-chai-dom
> chai-dom plugin for Karma Test Runner

  * [Karma](http://karma-runner.github.io)
  * [chai-dom](https://github.com/nathanboktae/chai-dom)


## Installation

```sh
$ npm install --save-dev karma-chai-dom
```

- `karma-chai-dom` requires `chai` which is not included and recommended to be installed through [karma-chai](https://github.com/xdissent/karma-chai)

#### Karma plugins load in reverse order so make sure that dom and chai **come before** `chai-dom`


```js
module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'chai-dom', 'chai'],
    //...
  })
}
```

## Usage

See the [chai-dom](https://github.com/nathanboktae/chai-dom) documentation.
