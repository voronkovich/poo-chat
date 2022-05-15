<template>
    <h1 class="text-2xl text-center py-4">Sign Up</h1>

    <div class="max-w-sm mx-auto my-4">
        <sl-alert variant="success" open v-show="success">
            <sl-icon slot="icon" name="check2-circle"></sl-icon>
            <strong>Success!</strong><br />
            You have been signed up successfully.
        </sl-alert>

        <sl-alert variant="danger" open v-show="failure">
            <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
            <strong>Failure</strong><br />
            Some problem occuried.
        </sl-alert>
    </div>

    <form @submit.prevent="submit" class="max-w-sm mx-auto">
        <sl-input name="name" label="Your Name" type="text" class="my-4"></sl-input>
        <sl-input name="email" label="Email" type="email" class="my-4"></sl-input>
        <sl-input name="password" label="Password" type="password" class="my-4" toggle-password></sl-input>

        <div class="text-center my-6">
            <sl-button variant="primary" type="submit" pill>Sign Up</sl-button>
        </div>

        <p class="my-4 text-gray-500 text-center">
            Already registered?
            <router-link :to="{ name: 'SignIn' }" class="text-blue-500">Sign In</router-link>
        </p>
    </form>
</template>

<script setup>
import { ref } from 'vue'
import '@shoelace-style/shoelace/dist/components/input/input.js'
import '@shoelace-style/shoelace/dist/components/button/button.js'
import '@shoelace-style/shoelace/dist/components/alert/alert.js'
import supabase from '@/supabase.js'

const success = ref(false)
const failure = ref(false)

const submit = async ({ target: form }) => {
    success.value = false
    failure.value = false

    const data = new FormData(form)

    const { user, session, error } = await supabase.auth.signUp({
        email: data.get('email'),
        password: data.get('password'),
    })

    if (error) {
        failure.value = true

        return
    }

    success.value = true
    form.reset()
}
</script>
