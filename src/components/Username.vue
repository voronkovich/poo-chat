<template>
    <strong :style="{ color: colorize(username) }">{{ username }}</strong>
</template>

<script>
import randomColor from 'randomcolor'

const colorize = (username) => {
    return randomColor({
        seed: username,
        luminosity: 'dark',
    })
}

export default {
    props: {
        username: {
            type: String,
            required: true,
        }
    },
    setup(props) {
        return {
            colorize,
        }
    }
}
</script>
