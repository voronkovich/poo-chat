import { ref } from 'vue'
import supabase from '@/services/supabase'

export default async (limit = 100) => {
    const messages = ref([])

    const { data, error } = await getLastChatMessages(limit)

    if (error) {
        throw error
    }

    messages.value = data.reverse()

    const addNewChatMessage = (message) => {
        if (messages.value.length >= limit) {
            messages.value.shift()
        }

        messages.value.push(message)
    }

    const subscription = subscribeToNewChatMessages((message) => {
        getChatMessageById(message.id)
            .then(({ data, error }) => {
                if (error) {
                    throw error
                }

                addNewChatMessage(data)
            })
    })

    return { messages, subscription }
}

const getLastChatMessages = async (limit) => {
    return supabase
        .from('chat')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(limit)
}

const getChatMessageById = async (id) => {
    return supabase
        .from('chat')
        .select('*')
        .eq('id', id)
        .single()
}

const subscribeToNewChatMessages = (callback) => {
    return supabase
        .from('messages')
        .on('INSERT', payload => callback(payload.new))
        .subscribe()
}
