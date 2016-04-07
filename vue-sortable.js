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
    var vSortableIdCounter = 0

    Vue.directive('sortable', function (options) {
      options = options || {}

      var vSortableId = options.vSortableId || vSortableIdCounter++

      if (!this.vm.vSortable) {
        this.vm.vSortable = {}
      }

      // Only throw an error if the user specified the ID, don't fault the user
      // if they have custom ID's 0 - 10, and the counter is between 0 & 10.
      if (options.vSortableId && this.vm.vSortable[vSortableId]) {
        throw new Error('[vue-sortable] cannot set already defined id: \'' + vSortableId + '\'')
      }

      while(this.vm.vSortable[vSortableId]) {
        vSortableId = vSortableIdCounter++
      }

      this.sortable = new Sortable(this.el, options)
      this.vm.vSortable[vSortableId] = this.sortable
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
