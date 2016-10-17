/* global describe, it, expect */

import Vue from 'vue'
import Sortable from '../vue-sortable'

Vue.use(Sortable);

describe('vue-sortable', () => {

  it('has an install method for Vue.use()', () => {
      expect(typeof Sortable.install).toEqual('function');
  });

  it('creates the v-sortable directive', () => {
    const vm = new Vue({
      template: '<div><ul></ul></div>',
    }).$mount();

    expect(typeof vm.$options.directives['sortable']).toEqual('object');
  });

});
