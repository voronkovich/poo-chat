<template>
    <PageHeader>Sign Up</PageHeader>

    <div class="max-w-sm mx-auto my-4">
        <Alert variant="danger" title="Failure!" v-if="errorMessage">
            {{ errorMessage }}
        </Alert>
    </div>

    <form @submit.prevent="submit" class="max-w-sm mx-auto">
        <label class="form-row">
            <span class="form-label">Username</span>
            <input
                name="username"
                class="form-control"
                type="text"
                minlength="3"
                maxlength="10"
                pattern="^\w+$"
                placeholder="Username"
                required
            />
            <span class="block pl-2 text-sm text-gray-500">E.g. "bob", "alice" and etc.</span>
        </label>

        <label class="form-row">
            <span class="form-label">Email</span>
            <input
                name="email"
                class="form-control"
                type="email"
                placeholder="Email"
                required
            />
        </label>

        <label class="form-row">
            <span class="form-label">Password</span>
            <input
                name="password"
                class="form-control"
                type="password"
                minlength="6"
                autocomplete="new-password"
                placeholder="Password"
                required
            />
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
import { useRouter } from 'vue-router'
import { useSignUp } from '@/composables/useAuth.js'
import Alert from '@/components/Alert.vue'
import PageHeader from '@/components/PageHeader.vue'

const { errorMessage, signUp } = useSignUp()

const router = useRouter()

const submit = async ({ target: form }) => {
    const { user, session } = await signUp(
        form.username.value,
        form.email.value,
        form.password.value,
    )

    if (user) {
        router.push({ name: 'Chat' })
    }
}
</script>
