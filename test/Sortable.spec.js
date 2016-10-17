/* global describe, it, expect */

import Vue from 'vue/dist/vue'
import Sortable from '../src/vue-sortable'

Vue.use(Sortable)

describe('vue-sortable', () => {

  it('has an install method for Vue.use()', () => {
      expect(typeof Sortable.install).toEqual('function')
  })

  it('creates the v-sortable directive', () => {
    const vm = new Vue({
      template: `<div><ul></ul></div>`,
    }).$mount()

    expect(typeof vm.$options.directives['sortable']).toEqual('object')
  })

  describe('directive', () => {

    it('instantiates the sortable directive using the inserted hook', () => {
      const vm = new Vue({
        template: `<div><ul></ul></div>`,
      }).$mount()

      expect(typeof vm.$options.directives['sortable'].inserted).toEqual('function')
    })

  })

  describe('component', () => {
    it('can pass arguments to sortablejs through an options prop', () => {
      const vm = new Vue({
        template: `<div><sortable :options="{ foo: 'bar' }"></sortable></div>`,
      }).$mount()

      expect(vm.sortable.foo.options.foo).toEqual('bar')
    })
  })

})