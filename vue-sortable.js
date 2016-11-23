;(function () {

  var vSortable = {}
  var Sortable = typeof require === 'function'
      ? require('sortablejs')
      : window.Sortable

  if (!Sortable) {
    throw new Error('[vue-sortable] cannot locate Sortable.js.')
  }

  // exposed global options
  vSortable.config = {}

  vSortable.install = function (Vue) {
    Vue.directive('sortable', {
      bind: function (el, binding, vnode) {
        options = binding.value || {}

        var sortable = new Sortable(el, options)

        const vm = vnode.context;
        if (binding.arg && !vm.sortable) {
          vm.sortable = {}
        }

        //  Throw an error if the given ID is not unique
        if (binding.arg && vm.sortable[binding.arg]) {
          console.warn('[vue-sortable] cannot set already defined sortable id: \'' + binding.arg + '\'')
        } else if( binding.arg ) {
          vm.sortable[binding.arg] = sortable
        }
      }
    })
  }

  if (typeof exports == "object") {
    module.exports = vSortable
  } else if (typeof define == "function" && define.amd) {
    define([], function () {
      return vSortable
    })
  } else if (window.Vue) {
    window.vSortable = vSortable
    Vue.use(vSortable)
  }

})()
