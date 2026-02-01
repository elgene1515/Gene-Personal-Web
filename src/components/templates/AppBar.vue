<template>
    <v-app-bar class="appbar-main-container" fluid>
        <!-- NOTE Title -->
        <v-app-bar-title class="title" @click="navigationStore.gotoSection('homeRef')">
            Software <span id="title-gene">GENE</span>gineer
        </v-app-bar-title>

        <v-spacer></v-spacer>

        <!-- NOTE Navigation Buttons -->
        <div v-if="isLargeScreen">
            <ButtonNavigation v-for="(navigation, navigationIndex) in navigations" :key="navigationIndex" :text="navigation.text" @click="navigationStore.gotoSection(navigation.section)"/>
        </div>
        <v-app-bar-nav-icon v-else @click="drawer = !drawer" :icon="drawer ? 'mdi-close' : 'mdi-menu'" :ripple="false" variant="plain"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" location="top" temporary class="navigation-drawer">
        <v-list>
            <v-list-item v-for="(navigation, navigationIndex) in navigations" :key="navigationIndex" @click="navigationStore.gotoSection(navigation.section)">{{ navigation.text }}</v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup>
    import { useNavigationStore } from '@/stores/navigation';
    import { useDisplay } from 'vuetify';
    import { computed, ref } from 'vue';

    const navigationStore = useNavigationStore();
    const navigations = ref([
        {
            text: "Professional Experience",
            section: "professionalExperience"
        },
        {
            text: "Software Engineering Projects",
            section: "softwareEngineeringProjects"
        },
        {
            text: "Skills",
            section: "skills"
        },
        {
            text: "About Me",
            section: "aboutMe"
        },
        {
            text: "Contact Me",
            section: "contactMe"
        },
    ])

    // NOTE responsive hamburger UI
    const { width } = useDisplay();
    const isLargeScreen = computed(() => width.value >=1200);
    const drawer = ref(false);
</script>

<style lang="scss" scoped>
    .appbar-main-container , .navigation-drawer{
        background-color:  #2C3E50;
        color: cyan;

        .title {
            font-weight: bold;
            font-size: 150%;
            min-width: fit-content;
            cursor: pointer;
            
            #title-gene {
                color: white;
            }
        }
    }
    
    @media (max-width: 1200px) {
        .appbar-main-container , .navigation-drawer{

            .title{
                
            }
        }
    }
</style>



