import { createRouter, createWebHistory } from 'vue-router'
import { watch } from 'vue'
import { isAuthenticated } from '@/composables/useAuth.js'
import supabase from '@/services/supabase'
import Chat from '@/views/Chat.vue'
import SignIn from '@/views/SignIn.vue'
import SignUp from '@/views/SignUp.vue'

const routes = [
    {
        path: '/',
        name: 'Chat',
        component: Chat,
    },
    {
        path: '/sign-in',
        name: 'SignIn',
        component: SignIn,
    },
    {
        path: '/sign-up',
        name: 'SignUp',
        component: SignUp,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    if ([ 'SignIn', 'SignUp' ].includes(to.name)) {
        return next()
    }

    if (supabase.auth.user()) {
        return next()
    }

    next({ name: 'SignIn' })
})

const signOutWatcher = watch(isAuthenticated, isAuthenticated => {
    if (!isAuthenticated) {
        if (router.currentRoute.value.path === '/') {
            router.go()

            return
        }

        router.push({ path: '/' })
    }
})

export default router
