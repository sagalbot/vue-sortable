import SortableComponent from './Sortable.vue'

export default {
  install(Vue, options) {
    // options = Object.assign(options, {
    //   'install': {
    //     'directive': true,
    //     'component': true
    //   }
    // })

    let Sortable = typeof require === 'function'
        ? require('sortablejs')
        : window.Sortable

    if (!Sortable) {
      throw new Error('[vue-sortable] cannot locate Sortable.js.')
    }

    Vue.directive('sortable', {
      inserted: function (el, binding) {
        new Sortable(el, binding.value)
      }
    })

    Vue.component('sortable', SortableComponent)

    console.log('vue-sortable installed!');
  }
}