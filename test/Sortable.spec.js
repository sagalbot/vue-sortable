/* global describe, it, expect */

import Vue from 'vue'
import Sortable from '../vue-sortable'
import sortablejs from 'sortablejs'

Vue.use(Sortable)

describe('vue-sortable', () => {

  it('has an install method for Vue.use()', () => {
      expect(typeof Sortable.install).toEqual('function')
  })

  it('creates the v-sortable directive', () => {
    const vm = new Vue({
      template: '<div><ul></ul></div>',
    }).$mount()

    expect(typeof vm.$options.directives['sortable']).toEqual('function')
  })

  it('does not set vm.sortable unless a directive argument is passed', () => {
    const vm = new Vue({
      template: '<div><ul v-sortable></ul></div>',
    }).$mount()

    expect(typeof vm['sortable']).toEqual('undefined')
  })

  it('sets vm.sortable when a directive argument is passed', () => {
    const vm = new Vue({
      template: '<div><ul v-sortable:foo></ul></div>',
    }).$mount()

    expect(typeof vm['sortable']).toEqual('object')
  })

  it('sets vm.sortable.id based on the directive argument', () => {
    const vm = new Vue({
      template: '<div><ul v-sortable:foo></ul></div>',
    }).$mount()

    expect(vm.sortable.foo instanceof sortablejs).toEqual(true)
  })

  it('will log a warning when a duplicate sortable id is provided', () => {
    console.warn = jasmine.createSpy("warn")

    const vm = new Vue({
      template: '<div><ul v-sortable:foo></ul><ul v-sortable:foo></ul></div>',
    }).$mount()

    expect(console.warn).toHaveBeenCalledWith("[vue-sortable] cannot set already defined sortable id: 'foo'")
  })

  it('can pass arguments to sortablejs through an options object', () => {
    const vm = new Vue({
      template: '<div><ul v-sortable:foo="{ foo: \'bar\' }"></ul></div>',
    }).$mount()

    expect(vm.sortable.foo.options.foo).toEqual('bar')
  })

})