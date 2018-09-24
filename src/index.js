import Vuedl from 'vuedl'
import DialogLayout from './components/DialogLayout.vue'
import Confirm from './components/Confirm.vue'
// import Toast from './components/Toast.vue'
import Alert from './components/Alert.vue'
import Prompt from './components/Prompt.vue'
import DialogActions from './components/DialogActions.vue'
import DialogCard from './components/DialogCard.vue'

const Plugin = {
  install (Vue, options = {}) {
    const property = options.property || '$dialog'
    // const messageProperty = options.messageProperty
    Vue.use(Vuedl, options)
    const manager = Vue.prototype[property]
    manager.layout('default', DialogLayout)
    Vue.component('DialogActions', DialogActions)
    Vue.component('DialogCard', DialogCard)

    manager.on('show', () => {
      document.body.classList.remove('modal-open')
    })

    manager.component('confirm', Confirm, {
      waitForResult: true,
      actions: {
        'false': 'Cancel',
        'true': 'OK'
      }
    })

    manager.component('warning', Confirm, {
      type: 'warning',
      waitForResult: true,
      actions: {
        'false': 'Cancel',
        'true': 'OK'
      }
    })

    manager.component('info', Confirm, {
      type: 'info',
      waitForResult: true,
      actions: {
        'false': 'Cancel',
        'true': 'OK'
      }
    })

    manager.component('error', Confirm, {
      type: 'danger',
      waitForResult: true,
      actions: ['Close']
    })

    // manager.component('toast', Toast, {
    //   waitForResult: true
    // })

    // manager.message = {
    //   info: (message, options) => manager.toast({ text: message, variant: 'info', ...options }),
    //   error: (message, options) => manager.toast({ text: message, variant: 'danger', ...options }),
    //   success: (message, options) => manager.toast({ text: message, variant: 'success', ...options }),
    //   warning: (message, options) => manager.toast({ text: message, variant: 'warning', ...options })
    // }

    // messageProperty && (Vue.prototype[messageProperty] = manager.message)

    manager.component('alert', Alert, {
      waitForResult: true
    })

    manager.notify = {
      info: (message, options) => manager.alert({ text: message, type: 'info', ...options }),
      error: (message, options) => manager.alert({ text: message, type: 'danger', ...options }),
      success: (message, options) => manager.alert({ text: message, type: 'success', ...options }),
      warning: (message, options) => manager.alert({ text: message, type: 'warning', ...options })
    }

    manager.component('prompt', Prompt, {
      waitForResult: true,
      actions: {
        false: 'Cancel',
        true: 'OK'
      }
    })
  }
}

export default Plugin
