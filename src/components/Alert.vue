<template>
    <div class="px-4 py-3 rounded" :class="cssClass">
        <strong v-if="title" class="block mb-2">{{ title }}</strong>
        <slot></slot>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    title: {
        type: String,
        required: false,
    },
    variant: {
        type: String,
        required: false,
        default: 'primary'
    }
})

const cssClass = computed(() => {
    switch (props.variant) {
        case 'primary':
            return 'bg-blue-100 text-blue-800'
        case 'success':
            return 'bg-green-100 text-green-800'
        case 'danger':
            return 'bg-red-100 text-red-800'
    }
})
</script>
