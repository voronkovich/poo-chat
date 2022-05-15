<template>
    <AppPageHeader>Sign Up</AppPageHeader>

    <div class="max-w-sm mx-auto my-4">
        <AppAlert variant="success" title="Success!" v-show="success" open closable>
            You have been signed up successfully.
        </AppAlert>

        <AppAlert variant="danger" title="Failure!" v-show="failureMessage" open closable>
            {{ failureMessage }}
        </AppAlert>
    </div>

    <form @submit.prevent="submit" class="max-w-sm mx-auto" v-show="!success">
        <sl-input
            name="username"
            type="text"
            label="Username"
            class="my-4"
            minlength="3"
            pattern="^\w+$"
            required
        ></sl-input>

        <sl-input
            name="email"
            type="email"
            label="Email"
            class="my-4"
            required
        ></sl-input>

        <sl-input
            name="password"
            type="password"
            label="Password"
            class="my-4"
            minlength="6"
            toggle-password
        ></sl-input>

        <div class="text-center my-6">
            <sl-button variant="primary" type="submit" pill>Sign Up</sl-button>
        </div>

    </form>

    <p class="my-4 text-gray-500 text-center">
        Already registered?
        <router-link :to="{ name: 'SignIn' }">Sign In</router-link>
    </p>
</template>

<script setup>
import '@shoelace-style/shoelace/dist/components/input/input.js'
import '@shoelace-style/shoelace/dist/components/button/button.js'
import { ref } from 'vue'
import AppAlert from '@/components/AppAlert.vue'
import AppPageHeader from '@/components/AppPageHeader.vue'
import { signUp } from '@/services/auth.js'

const success = ref(false)

const failureMessage = ref('')

const submit = async ({ target: form }) => {
    success.value = false
    failureMessage.value = ''

    const data = new FormData(form)

    try {
        await signUp(
            data.get('username'),
            data.get('email'),
            data.get('password'),
        )
    } catch (e) {
        failureMessage.value = e.message || 'Unknown error'

        return
    }

    success.value = true
    form.reset()
}
</script>
