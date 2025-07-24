<template>
    <v-btn

    >
        {{ text }}
    </v-btn>

</template>

<script setup>
    defineProps({
        text: {type: String, required: true},
    })
</script>

<style lang="scss" scoped>
</style>