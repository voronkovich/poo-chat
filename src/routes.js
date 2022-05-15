import Chat from '@/views/Chat.vue'
import SignIn from '@/views/SignIn.vue'
import SignUp from '@/views/SignUp.vue'

export default [
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
