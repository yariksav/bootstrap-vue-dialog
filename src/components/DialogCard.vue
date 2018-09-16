<template>
  <div>
    <header :class="headerClasses">
      <slot name=title>
        <h5 class="modal-title">{{ title }}</h5>
      </slot>
      <button type="button" aria-label="Close" class="close">×</button></header>
    <div class="modal-body">
      <slot/>
    </div>
    <footer v-if="actions" class="modal-footer">
      <DialogActions :actions="actions"/>
    </footer>
  </div>
</template>

<script>

import DialogActions from './DialogActions.vue'

export default {
  components: {
    DialogActions
  },
  props: {
    title: String,
    actions: [Array, Object],
    headerBgVariant: String,
    headerTextVariant: String,
    headerBorderVariant: String,
    headerClass: String
  },
  computed: {
    headerClasses () {
      return [
        'modal-header',
        {
          [`bg-${this.headerBgVariant}`]: Boolean(this.headerBgVariant),
          [`text-${this.headerTextVariant}`]: Boolean(this.headerTextVariant),
          [`border-${this.headerBorderVariant}`]: Boolean(
            this.headerBorderVariant
          )
        },
        this.headerClass
      ]
    }
  }
}
</script>
