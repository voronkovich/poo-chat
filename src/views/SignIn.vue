<template>
    <PageHeader>Sign In</PageHeader>

    <div class="max-w-sm mx-auto my-4">
        <Alert variant="danger" title="Failure!" v-if="errorMessage" open closable>
            {{ errorMessage }}
        </Alert>
    </div>

    <form @submit.prevent="submit" class="max-w-sm mx-auto">
        <label class="form-row">
            <span class="form-label">Email</span>
            <input name="email" class="form-control" type="email" required />
        </label>

        <label class="form-row">
            <span class="form-label">Password</span>
            <input name="password" class="form-control" type="password" required />
        </label>

        <div class="my-6 text-center">
            <button class="btn">Sign In</button>
        </div>

        <p class="my-4 text-gray-500 text-center">
            No account yet?
            <router-link :to="{ name: 'SignUp' }">Sign Up</router-link>
        </p>
    </form>
</template>

<script setup>
import Alert from '@/components/Alert.vue'
import PageHeader from '@/components/PageHeader.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useSignIn } from '@/composables/useAuth.js'

const router = useRouter()

const { errorMessage, signIn } = useSignIn()

const submit = async ({ target: form }) => {
    const { user, session } = await signIn(form.email.value, form.password.value)

    if (user) {
        router.push({ name: 'Chat' })
    }
}
</script>
