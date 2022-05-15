<template>
    <AppPageHeader>Welcome!</AppPageHeader>

    <div class="max-w-sm mx-auto">
        <div v-if="!isAuthenticated">
            <p class="text-center">
                Please, <router-link :to="{ name: 'SignIn' }">Sign In</router-link> to enter the chat.
            </p>
        </div>
        <div v-else>
            <p class="text-center">
                You are signed in as <strong class="text-bold-800">{{ user.email }}</strong>.

                <button type="button" @click="signOut" class="link">Sign Out</button>
            </p>
        </div>
    </div>
</template>

<script setup>
import AppPageHeader from '@/components/AppPageHeader.vue'
import { user, isAuthenticated, signOut } from '@/composables/useAuth.js'
</script>
