import eventBus from '@/services/event-bus.js'
import { ref, readonly, computed } from 'vue'
import {
    user as getUser,
    signIn,
    signOut
} from '@/services/auth.js'

const authenticated = ref(!!getUser())

eventBus.on('auth:sign-out', () => {
    authenticated.value = false
})

eventBus.on('auth:sign-in', () => {
    authenticated.value = true
})

const isAuthenticated = readonly(authenticated)

export {
    getUser,
    isAuthenticated,
    signIn,
    signOut,
}
