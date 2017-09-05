import Vue from 'vue';
import LazyThis from '../src/LazyThis.js'
const mockOption = {
  contatiner: Object,
  config: {
    rootMargin: '50px 0px',
    threshold: 0.01
  },
  minimumIntersectionRatio: 0,
  observer: Object,
  visible: false
}

describe('LazyThis', () => {
  it('lazy-this is Render', () => {
    const renderedComponent = getRenderedText(LazyThis(mockOption))
    expect(renderedComponent).to.have.class('__vue-lazy-this')
  })
})

function getRenderedText (Component, propsData) {
  
  const ComponentInstance = Vue.component('lazy-this', Component)
  
  const Ctor = Vue.extend(ComponentInstance)
  
  const vm = new Ctor({ propsData: propsData }).$mount()
  return vm.$el
}