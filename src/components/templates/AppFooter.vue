<template>
    <v-footer 
        fluid 
        class="text-center d-flex flex-column ga-2 py-4" 
        color="cyan"
    >

        <h1 class="title" @click="navigation.gotoSection('homeRef')">
            Software <span id="title-gene">GENE</span>gineer
        </h1>

        <div class="d-flex ga-3">
            <v-btn
                v-for="icon in icons"
                :key="icon"
                :icon="icon"
                density="comfortable"
                variant="text"
                color="white"
            ></v-btn>
        </div>

        <v-divider class="my-2" thickness="2" width="50"></v-divider>

        <div class="text-caption font-weight-regular opacity-60">
            Thank you for visiting
        </div>

        <v-divider></v-divider>

        <div>
        Copyright © {{ new Date().getFullYear() }} — <strong>GENE</strong>
        </div>
    </v-footer>
</template>

<script setup>
    import { useNavigationStore } from '@/stores/navigation';

    const navigation = useNavigationStore();
    
    const icons = [
        'mdi-facebook',
        'mdi-github',
        'mdi-linkedin',
    ]
</script>

<style scoped>
    .title {
        color: #2C3E50;
        font-weight: bold;
        font-size: 150%;
        cursor: pointer;
    }

    #title-gene {
        color: white;
    }
</style>