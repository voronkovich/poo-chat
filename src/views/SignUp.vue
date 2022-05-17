<template>
    <PageHeader>Sign Up</PageHeader>

    <div class="max-w-sm mx-auto my-4">
        <Alert variant="success" title="Success!" v-if="success">
            You have been signed up successfully.
        </Alert>

        <Alert variant="danger" title="Failure!" v-if="errorMessage">
            {{ errorMessage }}
        </Alert>
    </div>

    <form @submit.prevent="submit" class="max-w-sm mx-auto" v-show="!success">
        <label class="form-row">
            <span class="form-label">Username</span>
            <input name="username" class="form-control" type="text" minlength="3" pattern="^\w+$" required />
        </label>

        <label class="form-row">
            <span class="form-label">Email</span>
            <input name="email" class="form-control" type="email" required />
        </label>

        <label class="form-row">
            <span class="form-label">Password</span>
            <input name="password" class="form-control" type="password" minlength="6" />
        </label>

        <div class="text-center my-6">
            <button class="btn" type="submit">Sign Up</button>
        </div>
    </form>

    <p class="my-4 text-gray-500 text-center">
        Already registered?
        <router-link :to="{ name: 'SignIn' }">Sign In</router-link>
    </p>
</template>

<script setup>
import { ref } from 'vue'
import Alert from '@/components/Alert.vue'
import PageHeader from '@/components/PageHeader.vue'
import { useSignUp } from '@/composables/useAuth.js'

const success = ref(false)

const { errorMessage, signUp } = useSignUp()

const submit = async ({ target: form }) => {
    success.value = false

    const { user, session } = await signUp(
        form.username.value,
        form.email.value,
        form.password.value,
    )

    if (user) {
        success.value = true

        form.reset()
    }
}
</script>
