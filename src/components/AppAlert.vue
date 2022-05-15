<template>
    <sl-alert>
        <sl-icon slot="icon" :name="icon"></sl-icon>

        <strong v-if="title" class="block">{{ title }}</strong>

        <slot></slot>
    </sl-alert>
</template>

<script setup>
import '@shoelace-style/shoelace/dist/components/alert/alert.js'
import '@shoelace-style/shoelace/dist/components/icon/icon.js'
import { computed, useAttrs } from 'vue'

defineProps({
    title: {
        type: String,
        required: false,
    }
})

const attrs = useAttrs()

const icon = computed(() => {
    switch (attrs.variant) {
        case 'primary':
            return 'info-circle'
        case 'neutral':
            return 'gear'
        case 'success':
            return 'check2-circle'
        case 'warning':
            return 'exclamation-triangle'
        case 'danger':
            return 'exclamation-octagon'
    }

    return 'info-circle'
})
</script>
