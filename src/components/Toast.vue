<template>
  <b-alert
      style="margin-bottom: 0;"
      show
      :variant="variant"
      dismissible
      @dismissed="dismiss">
    <span v-html="text" />
  </b-alert>
</template>

<script>

import Confirmable from 'vuedl/src/mixins/confirmable'
import DialogActions from './DialogActions.vue'

export default {
  layout: ['default', { hideBackdrop: true }],
  mixins: [ Confirmable ],
  props: {
    variant: String,
    timeout: {
      type: Number,
      default: 5000
    }
  },
  mounted () {
    if (this.timeout) {
      setTimeout(() => {
        this.$emit('submit')
      }, this.timeout)
    }
  },
  components: {
    DialogActions
  },
  methods: {
    dismiss () {
      this.$emit('submit')
    }
  }
}
</script>
