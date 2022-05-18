<template>
    <div v-for="message of messages" :key="message.id" class="py-2">
        <strong>{{ message.username }}</strong>: {{ message.content }}
    </div>
</template>

<script setup>
import useChatMessages from '@/composables/useChatMessages.js'

const { messages } = await useChatMessages(50)
</script>
