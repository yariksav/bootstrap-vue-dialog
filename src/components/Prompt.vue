<template>
  <div>
    <DialogCard :title="title" :actions="parsedActions">
      <b-form-input
          autofocus
          @keypress.enter="onSubmit"
          v-model="editedValue"
          :placeholder="text"
          required
        />
    </DialogCard>
  </div>
</template>

<script>

import Confirmable from 'vuedl/src/mixins/confirmable'
import DialogCard from './DialogCard.vue'

export default {
  components: {
    DialogCard
  },
  layout: 'default',
  mixins: [ Confirmable ],
  props: {
    value: String
  },
  computed: {
    parsedActions () {
      const actions = this.actions
      if (actions[true]) {
        if (typeof actions[true] === 'string') {
          actions[true] = {
            'text': actions[true],
            handle: this.onSubmit
          }
        } else {
          actions[true].handle = this.onSubmit
        }
      }
      return actions
    }
  },
  data () {
    return {
      editedValue: this.value
    }
  },
  methods: {
    onSubmit () {
      this.$emit('submit', this.editedValue)
    }
  }
}
</script>
