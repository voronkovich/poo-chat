<template>
    <h1 class="text-2xl text-center py-4">Sign In</h1>

    <form @submit.prevent="submit" class="max-w-sm mx-auto">
        <sl-input name="email" label="Email" type="email" class="my-4"></sl-input>
        <sl-input name="password" label="Password" type="password" class="my-4" toggle-password></sl-input>

        <div class="my-6 text-center">
            <sl-button variant="primary" type="submit" pill>Sign In</sl-button>
        </div>

        <p class="my-4 text-gray-500 text-center">
            No account yet?
            <router-link :to="{ name: 'SignUp' }" class="text-blue-500">Sign Up</router-link>
        </p>
    </form>
</template>

<script setup>
import supabase from '@/supabase.js'
import '@shoelace-style/shoelace/dist/components/input/input.js'
import '@shoelace-style/shoelace/dist/components/button/button.js'

const submit = async ({ target: form }) => {
    const data = new FormData(form)

    const { user, session, error } = await supabase.auth.signIn({
        email: data.get('email'),
        password: data.get('password'),
    })
}
</script>
