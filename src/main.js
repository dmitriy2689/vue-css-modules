import Vue from 'vue'

Vue.config.productionTip = false

/*
export const app = (components) => new Vue({
  el: '#app',
  components: {
    ...components
  }
})
*/

new Vue({
  el: '#app',
  components: {
    Wrapper: () => import(/* webpackPrefetch: true, webpackChunkName: "Wrapper" */ './Wrapper.vue')
  }
})