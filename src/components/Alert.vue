<template>
  <b-alert
      style="margin-bottom: 0;"
      show
      :variant="type"
      :dismissible="dismissible"
      @dismissed="$emit('submit')">
    <span v-html="text" />
  </b-alert>
</template>
<script>

import DialogActions from './DialogActions.vue'

export default {
  components: {
    DialogActions
  },
  layout: ['notification', { showClose: false }],
  props: {
    type: {
      type: String,
      default: () => 'info'
    },
    actions: [ Array, Object ],
    text: String,
    dismissible: {
      type: Boolean,
      default: true
    }
  }
}
</script>
