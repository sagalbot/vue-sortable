import Vue from 'vue'

import Sortable from '../src/vue-sortable'
Vue.use(Sortable)

import App from './App.vue'

new Vue({
  el: '#app',
  components: {App},
  render(createElement) {
    return createElement('app')
  }
})
