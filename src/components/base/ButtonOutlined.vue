<template>
    <v-btn class="custom-button1">
        <v-icon v-if="icon" :icon="icon"></v-icon>
        {{ text }}
    </v-btn>
</template>

<script setup>
    defineProps({
        text: {type: String},
        icon: {type: String},
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