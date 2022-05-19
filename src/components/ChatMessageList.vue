<template>
    <div class="h-[50vh] overflow-y-scroll" ref="container">
        <div v-for="message of messages" :key="message.id" class="py-2">
            <Username :username="message.username" />: {{ message.content }}
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onUpdated, onMounted } from 'vue'
import useChatMessages from '@/composables/useChatMessages.js'
import Username from '@/components/Username.vue'

const { messages } = await useChatMessages(50)

const container = ref()

const scrollToLastChatMessage = () => {
    container.value.lastElementChild.scrollIntoView()
}

onUpdated(scrollToLastChatMessage)

onMounted(scrollToLastChatMessage)
</script>
