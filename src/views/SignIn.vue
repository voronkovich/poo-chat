<template>
    <AppPageHeader>Sign In</AppPageHeader>

    <div class="max-w-sm mx-auto my-4">
        <AppAlert variant="danger" title="Failure!" v-show="failureMessage" open closable>
            {{ failureMessage }}
        </AppAlert>
    </div>

    <form @submit.prevent="submit" class="max-w-sm mx-auto">
        <sl-input
            name="email"
            label="Email"
            type="email"
            required
            class="my-4"
        ></sl-input>

        <sl-input
            name="password"
            label="Password"
            type="password"
            class="my-4"
            required
            toggle-password
        ></sl-input>

        <div class="my-6 text-center">
            <sl-button variant="primary" type="submit" pill>Sign In</sl-button>
        </div>

        <p class="my-4 text-gray-500 text-center">
            No account yet?
            <router-link :to="{ name: 'SignUp' }">Sign Up</router-link>
        </p>
    </form>
</template>

<script setup>
import '@shoelace-style/shoelace/dist/components/input/input.js'
import '@shoelace-style/shoelace/dist/components/button/button.js'
import AppAlert from '@/components/AppAlert.vue'
import AppPageHeader from '@/components/AppPageHeader.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { signIn } from '@/composables/useAuth.js'

const failureMessage = ref('')
const router = useRouter()

const submit = async ({ target: form }) => {
    const data = new FormData(form)

    try {
        await signIn(data.get('email'), data.get('password'))
    } catch (e) {
        failureMessage.value = e.message || 'Unknown error'

        throw e
    }

    router.push({ name: 'Chat' })
}
</script>
