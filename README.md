# Vue Sortable [![Build Status](https://travis-ci.org/sagalbot/vue-sortable.svg?branch=master)](https://travis-ci.org/sagalbot/vue-sortable)

> Easily add drag-and-drop sorting to your Vue.js applications without jQuery, using the v-sortable directive, a thin wrapper for the minimalist [RubaXa/SortableJS](https://github.com/RubaXa/Sortable) library.
>
> Please note this library only supports **Vue 1.0**!

##### [View Live Demo & Docs](http://sagalbot.github.io/vue-sortable/)


Installation
--

#### NPM

```bash
npm install vue-sortable
```

Setup

```javascript
import Vue from 'vue'
import Sortable from 'vue-sortable'

Vue.use(Sortable)
```

#### Browser Globals

If you aren't using a build system, you probably just want to include a `<script>` tag and keep things simple. `unpkg.com` serves as a CDN for NPM projects. You can grab `vue-sortable` from unpkg in a couple ways:

- `<script src="https://unpkg.com/vue-sortable@0.1.3"></script>     # use a specific version`
- `<script src="https://unpkg.com/vue-sortable@latest"></script>    # use the latest version`

Note that you will need to include `RubaXa/Sortable` & `Vue` before including `vue-sortable`.

[View Live Example](http://jsbin.com/vasogus/edit?html,js,console,output)

```html
<!DOCTYPE html>
<html>
<head>
  <!-- VueJS -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.16/vue.js"></script>
  <!-- SortableJS -->
  <script src="https://unpkg.com/sortablejs@1.4.2"></script>
  <!-- VueSortable -->
  <script src="https://unpkg.com/vue-sortable@0.1.3"></script>
</head>
<body>
    <ul v-sortable>
      <li>Foo</li>
      <li>Bar</li>
      <li>Baz</li>
    </ul>
    <script>
        new Vue({
          el: 'body'
        });
    </script>
</body>
</html>
```

Common Use Cases
--

#### Update Source Data Order

The below implementation will update the order of the source data after an item is sorted using the `sortable` `onUpdate` callback.

[View Live Example](http://jsbin.com/cicewo/edit?html,js,output)

```
new Vue({
  el: 'body',
  data: {
    list: ['Foo', 'Bar', 'Baz']
  },
  methods: {
    onUpdate: function (event) {
      this.list.splice(event.newIndex, 0, this.list.splice(event.oldIndex, 1)[0])
    }
  }
});
```

```
<ul v-sortable="{ onUpdate: onUpdate }">
    <li v-for="item in list">{{ item }}</li>
 </ul>
```

Contributing
--

I'd like to keep this directive as simple as possible, but if there's something you'd like to see added feel free to submit a PR.

The plugin is built using the vue-cli [webpack-simple template](https://github.com/vuejs-templates/webpack-simple).

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for demo site
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
