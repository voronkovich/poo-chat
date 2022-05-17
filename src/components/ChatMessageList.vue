<template>
    <div v-for="message of messages" :key="message.id" class="py-2">
        <strong>{{ message.user_id }}</strong>: {{ message.content }}
    </div>
</template>

<script setup>
import supabase from '@/services/supabase'
import { ref } from 'vue'

const messages = ref([])

const { data, error } = await supabase
    .from('messages')
    .select('id, content, user_id')

if (data) {
    messages.value = data
}

const subscription = supabase
    .from('messages')
    .on('INSERT', payload => {
        messages.value.push(payload.new)
    })
    .subscribe()
</script>
