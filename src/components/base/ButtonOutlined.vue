<template>
    <v-btn class="custom-button1">
        {{ text }}
    </v-btn>
</template>

<script setup>
    defineProps({
        text: {type: String, required: true},
    })       
</script>

<style scoped>
    .custom-button1{
        color: cyan;
        background-color: transparent;
        border: 1px solid white;
        margin: 5px;
    }
</style>