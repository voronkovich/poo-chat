import supabase from '@/services/supabase.js'
import { ref, readonly, computed } from 'vue'

const currentUser = ref(supabase.auth.user())
const authenticated = computed(() => !!currentUser.value)

supabase.auth.onAuthStateChange(() => {
    currentUser.value = supabase.auth.user()
})

export const user = readonly(currentUser)
export const isAuthenticated = readonly(authenticated)

export const signIn = async (email, password) => {
    const { user, session, error } = await supabase.auth.signIn({
        email,
        password,
    })

    if (error) {
        throw error
    }

    return { user, session }
}

export const signOut = async () => {
    const { error } = await supabase.auth.signOut()

    if (error) {
        throw error
    }
}

export const signUp = async (username, email, password) => {
    const { user, session, error } = await supabase.auth.signUp({
        email,
        password,
    }, { username })

    if (error) {
        throw error
    }

    return { user, session }
}
