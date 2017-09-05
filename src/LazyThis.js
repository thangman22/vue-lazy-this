export default function (option) {
  return {
    template: '<div class="__vue-lazy-this" :style="injectStyle"> <slot v-if="!visible" name="onNotEnter"></slot> <slot v-if="visible" name="onEnter"></slot> </div>',
    data () {
      return option
    },
    props: {
      injectStyle: {
        type: Object,
        default: function () {
          return {}
        }
      }
    },
    mounted () {
      
      this.contatiner = this.$el
      this.observer = new IntersectionObserver(this.onIntersection, this.config)
      this.observer.observe(this.contatiner)
    },
    methods: {
      onIntersection (entry) {
        let element = entry[0]
        if(element.intersectionRatio > this.minimumIntersectionRatio) {
          this.visible = true
          this.observer.unobserve(element.target)
          this.observer.disconnect()
        }
      }
    }
  }
}