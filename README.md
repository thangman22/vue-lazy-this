# Vue.js Lazy This

> Lazyloading component using Intersection Observer API

## Install

``` bash
npm install vue-lazy-this

#or

yarn add vue-lazy-this

```

## Usage

``` javascript
import LazyThis from 'vue-lazy-this'

Vue.use(LazyThis, options)
```

``` HTML
  <lazy-this>
    <img slot="onEnter" src="https://dummyimage.com/640x4:3/"/>
    // In case not show on view port yet
    <img slot="onNotEnter" src="https://dummyimage.com/640x4:3/"/>
  </lazy-this>
```

