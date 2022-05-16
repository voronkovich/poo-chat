<template>
    <header class="max-w-screen-sm mx-auto p-4 mt-2 md:mt-16 text-3xl text-center">
        <router-link :to="{ name: 'Chat' }">SupaChat</router-link>
    </header>

    <div class="max-w-screen-sm mx-auto bg-white py-8 px-6 min-h-full mt-2 rounded-2xl shadow">
        <main class="max-w-screen-md mx-auto">
            <router-view></router-view>
        </main>
    </div>
</template>
