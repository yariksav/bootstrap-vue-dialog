<template>
  <span class="dialog-actions">
    <b-btn v-for="action in actionlist" :key="action.key"
      :variant="action.variant || variant"
      :loading="loadingAction === action.key"
      :disabled="isActionDisabled(action) || !!loadingAction"
      @click="onActionClick(action)">
      <Loader v-if="loadingAction === action.key" size="8px"/>
      <template v-else>{{ action.text }}</template>
    </b-btn>
  </span>
</template>
<script>

import Actionable from 'vuedl/src/mixins/actionable'
import Loader from './Loader.vue'

export default {
  components: {
    Loader
  },
  mixins: [ Actionable ],
  props: {
    variant: {
      type: String,
      default: 'outline-primary'
    }
  }
}
</script>
<style>
  .dialog-actions button {
     margin-right: 4px;
     margin-right: .25rem;
  }
</style>
