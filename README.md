# bootstrap-vue dialog helper

Implementation of [vuedl](https://github.com/yariksav/vuedl) dialog helper with Vuetify.js framework

This module will help you to work with modal dialogs in your project

> NOTE: Module is in initial development. Anything may change at any time.

[![NPM Version][npm-image]][npm-url]

<p align="center">
  <a href="https://cdnjs.com/libraries/bootstrap-vue-dialog">
    <img src="https://img.shields.io/cdnjs/v/bootstrap-vue-dialog.svg">
  </a>
  <a href="https://www.npmjs.org/package/bootstrap-vue-dialog">
    <img src="https://img.shields.io/npm/v/bootstrap-vue-dialog">
  </a>
  <a href="https://npmcharts.com/compare/bootstrap-vue-dialog?minimal=true">
    <img src="http://img.shields.io/npm/dm/bootstrap-vue-dialog.svg">
  </a>
  <br>
  <a href="http://img.badgesize.io/https://unpkg.com/bootstrap-vue-dialog/dist/bootstrap-vue-dialog.js?compression=gzip&label=gzip%20size:%20JS">
    <img src="http://img.badgesize.io/https://unpkg.com/bootstrap-vue-dialog/dist/bootstrap-vue-dialog.cjs.js?compression=gzip&label=gzip%20size:%20JS">
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg">
  </a>
</p>

## Documentation
[See docs here](https://github.com/yariksav/vuedl#readme)

## Setup

Install the package from npm

```npm
npm install bootstrap-vue-dialog
```

```javascript
import Dialog from 'bootstrap-vue-dialog'
Vue.use(Dialog, {
  context,
  property
})
```

+ `context` - the context of your application, such as store, axios, router etc.
+ `property` - the property, which will integrate to Vue. Default is `$dialog`

### Simple confirm dialog
```js
const res = await this.$dialog.confirm({ text: 'Do you really want to exit?'})
```

### Warning dialog
```js
const res = await this.$dialog.warning({ text: 'Do you really want to exit?', title: 'Warning'})
```

### Error dialog
```js
this.$dialog.error({ text: 'Cannot delete this item', title: 'Error'})
```

### Propt dialog
```js
let res = await this.$dialog.prompt({ text: 'Your name', title: 'Please input your name' })
```

<!-- ### Toasts
```js
const res = await this.$dialog.toast({ text: 'Do you really want to exit?'})
``` -->
### Floating notifications
```js
this.$dialog.notify.success('Success notification')
this.$dialog.notify.warning('Warning notification')
this.$dialog.notify.error('Error notification')
this.$dialog.notify.info('Info notification')
this.$dialog.notify.error('No autoclose notification', { timeout : 0 })
this.$dialog.notify.info('Top left notification', { position: 'top-left' })
this.$dialog.notify.info('Bottom right notification', { position: 'bottom-right' }
this.$dialog.notify.info('Bottom left notification', { position: 'bottom-left' })
```

### Actions
To all this simple dialogs you can config your actions, just send
```js
{
  ...
  actions: {
    'false': 'No',
    'true': 'Yes'
  }
}
// result will be true, false, or undefigned
{
  ...
  actions: ['No', 'Yes']
}
// result will be 'No', 'Yes', or undefigned

```
You can also set options
```js
{
  actions: [{
    text: 'Yes',
    color: 'blue',
    key: true,
    handle: () => {
      // on button click
    }
  }]
}
```


[npm-image]: https://img.shields.io/npm/v/bootstrap-vue-dialog.svg?style=flat-square
[npm-url]: https://npmjs.org/package/bootstrap-vue-dialog
