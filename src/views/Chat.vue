<template>
    <div class="sm:flex pb-2">
        <p class="flex-1 mb-1">You are signed in as <strong class="text-bold-800">{{ user.user_metadata.username }}</strong></p>
        <button type="button" @click="signOut" class="link">Sign Out</button>
    </div>

    <Suspense>
        <ChatMessageList></ChatMessageList>
    </Suspense>

    <ChatMessageForm></ChatMessageForm>
</template>

<script setup>
import { user, useSignOut } from '@/composables/useAuth.js'
import ChatMessageList from '@/components/ChatMessageList.vue'
import ChatMessageForm from '@/components/ChatMessageForm.vue'

const { signOut } = useSignOut()
</script>
