<template>
    <form class="mt-4">
        <textarea
            class="block w-full h-32 form-control"
            placeholder="Enter message here..."
            v-model="message"
            @keypress.enter="submit"
        ></textarea>
    </form>
</template>

<script setup>
import supabase from '@/services/supabase.js'
import { ref } from 'vue'

const message = ref(null)
const user = supabase.auth.user()

const submit = async ({ target: form }) => {
    const { data, error } = await supabase
        .from('messages')
        .insert({
            user_id: user.id,
            content: message.value,
        })

    if (error) {
        return
    }

    message.value = ''
}
</script>
