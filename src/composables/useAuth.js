import supabase from '@/services/supabase.js'
import { ref, readonly, computed } from 'vue'

const createUserRef = (supabase) => {
    const user = ref(supabase.auth.user())

    supabase.auth.onAuthStateChange(() => {
        user.value = supabase.auth.user()
    })

    return readonly(user)
}

export const user = createUserRef(supabase)
export const isAuthenticated = computed(() => !!user.value)

export const useSignIn = () => {
    const errorStatus = ref(null)
    const errorMessage = ref(null)

    const signIn = async (email, password) => {
        errorStatus.value = null
        errorMessage.value = null

        const { user, session, error } = await supabase.auth.signIn({
            email,
            password,
        })

        if (error) {
            errorStatus.value = error.status
            errorMessage.value = getErrorMessage(error)
        }

        return { user, session }
    }

    return {
        errorStatus,
        errorMessage,
        signIn,
    }
}

export const useSignOut = () => {
    const errorStatus = ref(null)
    const errorMessage = ref(null)

    const signOut = async () => {
        errorStatus.value = null
        errorMessage.value = null

        const { error } = await supabase.auth.signOut()

        if (error) {
            errorStatus.value = error.status
            errorMessage.value = getErrorMessage(error)
        }
    }

    return {
        errorStatus,
        errorMessage,
        signOut,
    }
}

export const useSignUp = (username, email, password) => {
    const errorStatus = ref(null)
    const errorMessage = ref(null)

    const signUp = async (username, email, password) => {
        errorStatus.value = null
        errorMessage.value = null

        const { user, session, error } = await supabase.auth.signUp({
            email,
            password,
        }, { data: { username } })

        if (error) {
            errorStatus.value = error.status
            errorMessage.value = getErrorMessage(error)
        }

        return { user, session }
    }

    return {
        errorStatus,
        errorMessage,
        signUp,
    }
}

const getErrorMessage = (error) => {
    return error.message || 'Unknown error'
}
