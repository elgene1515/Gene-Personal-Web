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
        color:#2C3E50;
        background-color: cyan;
        margin: 5px;
    }
</style>