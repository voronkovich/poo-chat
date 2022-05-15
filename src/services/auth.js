import supabase from '@/services/supabase.js'
import eventBus from '@/services/event-bus.js'

export const user = () => {
    return supabase.auth.user()
}

export const signIn = async (email, password) => {
    const { user, session, error } = await supabase.auth.signIn({
        email,
        password,
    })

    if (error) {
        throw error
    }

    eventBus.emit('auth:sign-in', { user, session })

    return { user, session }
}

export const signOut = async () => {
    const { error } = await supabase.auth.signOut()

    if (error) {
        throw error
    }

    eventBus.emit('auth:sign-out')
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
