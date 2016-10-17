<template>
  <div>
    <slot></slot>
  </div>
</template>

<script type="text/babel">
  import Sortable from 'sortablejs'

  export default {
    props: {
      options: {
        type: Object,
        default () {
          return {}
        }
      }
    },

    data () {
      return {
        sortable: null
      }
    },

    mounted () {
      console.log(Sortable, this.$el)
      this.sortable = new Sortable(this.$el, this.options)
    }
  }
</script>