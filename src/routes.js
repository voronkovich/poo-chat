import SignIn from '@/views/SignIn.vue'
import SignUp from '@/views/SignUp.vue'

export default [
    {
        path: '/',
        name: 'SignIn',
        component: SignIn,
    },
    {
        path: '/sign-up',
        name: 'SignUp',
        component: SignUp,
    },
]
