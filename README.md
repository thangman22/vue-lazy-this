# Vue.js Lazy This

> Lazyloading component using Intersection Observer API. This plugin will help you to show and hide component base on viewport showing

## Install

``` bash
npm install vue-lazy-this

#or

yarn add vue-lazy-this

```

## Usage

On javascript file

``` javascript
import LazyThis from 'vue-lazy-this'

Vue.use(LazyThis, options)

//or

const DEFAULT_OPT = {
  config: {
    rootMargin: '50px 0px',
    threshold: 0.01
  },
  minimumIntersectionRatio: 0,
  visible: false,
  autoUnobserve: true
}

Vue.use(LazyThis, DEFAULT_OPT)

```

On template

``` HTML
  <lazy-this>
    <img slot="onEnter" src="https://dummyimage.com/640x4:3/"/>
    // In case not show on view port yet
    <img slot="onNotEnter" src="https://dummyimage.com/640x4:3/"/>
  </lazy-this>
```
## Options

### minimumIntersectionRatio

Minimum ratio for intersection for display component 

**default: 0**

### autoUnobserve

Auto UnObserve when Component out of view port. This feature will make component permanently visible after first trigger. 

**default: true**

### config

Support native options for IntersectionObserverAPI follow this [link]

**default: { rootMargin: '50px 0px', threshold: 0.01 }**

[link]: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
