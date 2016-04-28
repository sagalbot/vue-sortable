# Vue Sortable [![Build Status](https://travis-ci.org/sagalbot/vue-sortable.svg?branch=master)](https://travis-ci.org/sagalbot/vue-sortable)

> Easily add drag-and-drop sorting to your Vue.js applications without jQuery, using the v-sortable directive, a thin wrapper for the minimalist [RubaXa/SortableJS](https://github.com/RubaXa/Sortable) library.

##### [View Live Demo & Docs](http://sagalbot.github.io/vue-sortable/)


## Installation & Usage

Install using NPM

```bash
npm install vue-sortable
```

Setup

```javascript
import Vue from 'vue'
import Sortable from 'vue-sortable'

Vue.use(Sortable)
```

Note that if you are not compiling Vue yourself, you just need to include `<script src="path/to/vue-sortable.js>`, and the plugin will be attached to the window at `window.vSortable`. In this case, you don't need to call `Vue.use()`.




## Contributing

I'd like to keep this as directive as simple as possible, but if there's something you'd like to see added feel free to submit a PR.

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