import merge from 'merge'
import 'intersection-observer'
import LazyThis from './LazyThis.js'

const install = function (Vue, opt = {}) {
  
  if (install.installed) {
    return
  }

  const DEFAULT_OPT = {
    contatiner: Object,
    config: {
      rootMargin: '50px 0px',
      threshold: 0.01
    },
    minimumIntersectionRatio: 0,
    observer: Object,
    visible: false,
    autoUnobserve: true
  }
  
  const option = merge(DEFAULT_OPT, opt)
  
  Vue.component('lazy-this', LazyThis(option))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}