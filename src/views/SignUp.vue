<template>
    <h1 class="text-2xl text-center py-4">Sign Up</h1>

    <div class="max-w-sm mx-auto my-4">
        <AppAlert variant="success" title="Success!" v-show="success" open closable>
            You have been signed up successfully.
        </AppAlert>

        <AppAlert variant="danger" title="Failure!" v-show="failure" open closable>
            Some problem occuried.
        </AppAlert>
    </div>

    <form @submit.prevent="submit" class="max-w-sm mx-auto">
        <sl-input
            name="name"
            type="text"
            label="Your Name"
            class="my-4"
        ></sl-input>

        <sl-input
            name="email"
            type="email"
            label="Email"
            class="my-4"
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

        <p class="my-4 text-gray-500 text-center">
            Already registered?
            <router-link :to="{ name: 'SignIn' }" class="text-blue-500">Sign In</router-link>
        </p>
    </form>
</template>

<script setup>
import '@shoelace-style/shoelace/dist/components/input/input.js'
import '@shoelace-style/shoelace/dist/components/button/button.js'
import { ref } from 'vue'
import AppAlert from '@/components/AppAlert.vue'
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
