<template>
    <v-btn class="navigation-button">
        {{ text }}
    </v-btn>

</template>

<script setup>
    defineProps({
        text: {type: String, required: true},
    })
</script>

<style scoped>
    .navigation-button {
        color: cyan;
    }
</style>