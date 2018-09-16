<template>
  <b-modal v-model="isActive"
    class="dialog-layout"
    hide-header
    hide-footer
    :hide-backdrop="hideBackdrop"
    :centered="centered"
    :size="size"
    body-class="dialog-layout-modal-body"
    :no-close-on-backdrop="persistent || loading"
    :no-close-on-esc="persistent || loading"
    @hidden="onModalHidden"
    @shown="onModalShown">
    <slot/>
  </b-modal>
</template>

<script>

import DialogActions from './DialogActions.vue'

let zIndex = 1100

export default {
  components: {
    DialogActions
  },
  props: {
    size: {
      type: String,
      default: () => { 'md' }
    },
    title: String,
    actions: [Array, Object],
    hideBackdrop: Boolean,
    centered: Boolean
  },
  methods: {
    _destroy () {
      // stub
    },
    onModalHidden () {
      zIndex = zIndex - 2
      this.$destroy()
    },
    onModalShown () {
      const backdrop = this.$el.querySelector('.modal-backdrop')
      backdrop && backdrop.style && (backdrop.style['z-index'] = ++zIndex)
      const modal = this.$el.querySelector('.modal')
      modal && modal.style && (modal.style['z-index'] = ++zIndex)
    }
  }
}
</script>
<style>
  .dialog-layout-modal-body {
    padding: 0;
  }
</style>
