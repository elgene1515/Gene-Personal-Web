<template>
    <v-footer 
        fluid 
        class="footer-main-container" 
    >
        <h1 class="title" @click="navigation.gotoSection('homeRef')">
            Software <span id="title-gene">GENE</span>gineer
        </h1>

        <div class="onlinePlatforms-container">
            <v-icon
                class="socialButton"
                v-for="(onlinePlatform, i) in onlinePlatforms"
                :key="i"
                @click="openOnlineProfiles(onlinePlatform.name)"
            >
                {{onlinePlatform.icon}}
            </v-icon>
        </div>

        <v-divider class="divider"></v-divider>

        <div class="message">
            Thank you for visiting
        </div>

        <v-divider></v-divider>

        <div class="copyright">
            Copyright © {{ new Date().getFullYear() }} — <strong>GENE</strong>
        </div>
    </v-footer>
</template>

<script setup>
    import { useNavigationStore } from '@/stores/navigation';

    const navigation = useNavigationStore();
    
    const onlinePlatforms = [
        {
            name: 'facebook',
            icon: 'mdi-facebook',
        },
        {
            name: 'github',
            icon: 'mdi-github',
        },
        {
            name: 'linkedin',
            icon: 'mdi-linkedin',
        }
    ];

    const openOnlineProfiles = (onlinePlatformName) =>{
        switch (onlinePlatformName) {
            case 'facebook':
                window.open('https://www.facebook.com/elgene8/', '_blank');
                break;
            case 'github':
                window.open('https://github.com/elgene1515', '_blank');
                    break;
            case 'linkedin':
                window.open('https://www.linkedin.com/in/elgene-reyes/', '_blank');
                break;
            default:
                break;
        }
    }
</script>

<style scoped>
    .footer-main-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: cyan;
    }
    .title {
        color: #2C3E50;
        font-weight: bold;
        font-size: 150%;
        cursor: pointer;
    }
    #title-gene {
        color: white;
    }
    .onlinePlatforms-container{
        display: flex;
        gap: 15px;
    }
    .socialButton {
        color: white;
        background-color: transparent;
        cursor: pointer;
    }
    .divider{
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        border-width: 1px;
        width: 50px;
    }
    .message{
        font-weight: 400;
        opacity: 0.6;
        font-size: 15px;
    }
    .copyright{
        opacity: 0.6;
    }
</style>