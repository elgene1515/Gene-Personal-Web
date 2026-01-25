<template>
    <v-overlay class="customDialog-overlay" v-model="globalStore.dialog.isSHow" persistent>
        <v-card class="customDialog-card">
            <v-card-title :class="globalStore.dialog.status">{{ globalStore.dialog.title }}</v-card-title>
            <v-card-text>{{ globalStore.dialog.text }}</v-card-text>
    
            <ButtonOutlined text="OK" @click="globalStore.dialog.isSHow = false"></ButtonOutlined>
        </v-card>
    </v-overlay>
</template>

<script setup>
    import { useGlobalStore } from '@/stores/globalStore';
import ButtonOutlined from './ButtonOutlined.vue';

    const globalStore = useGlobalStore();
</script>

<style scoped>
    .customDialog-overlay{
        backdrop-filter: blur(8px) !important;
        background: rgba(44, 62, 80, 0.4) !important; /* Matches your #2C3E50 background */
        opacity: 1 !important;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    .customDialog-card{
        background-color: #2C3E50;
        border: 1px solid white;
        color: white;
        min-width: 500px;
        text-align: center;
    }
    .success{
        color: cyan;
    }
    .error{
        color: red;
    }
    .warnning{
        color: orange;
    }
</style>