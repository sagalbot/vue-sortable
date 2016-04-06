import Vue from 'vue'
import Basic from './Basic.vue'
import Custom from './Custom.vue'
import Data from './Data.vue'
import Sortable from '../vue-sortable'

Vue.use(Sortable)

new Vue({
  el: 'body',
  components: { Basic, Custom, Data }
})
