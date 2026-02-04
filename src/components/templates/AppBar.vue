<template>
    <v-app-bar class="appbar-main-container">
        <!-- NOTE Title -->
        <v-app-bar-title class="title" @click="navigationStore.gotoSection('homeRef')">
            Software <span id="title-gene">GENE</span>gineer
        </v-app-bar-title>

        <v-spacer></v-spacer>

        <!-- NOTE Navigation Buttons -->
        <div v-if="isLargeScreen">
            <ButtonNavigation class="navigation-button"  v-for="(navigation, navigationIndex) in navigations" :key="navigationIndex" :text="navigation.text" @click="navigationStore.gotoSection(navigation.section)"/>
        </div>
        <v-app-bar-nav-icon v-else @click="drawer = !drawer" :icon="drawer ? 'mdi-close' : 'mdi-menu'" :ripple="false" variant="plain"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" location="top" temporary class="navigation-drawer">
        <v-list>
            <v-list-item v-for="(navigation, navigationIndex) in navigations" :key="navigationIndex" @click="navigationStore.gotoSection(navigation.section), drawer = !drawer">{{ navigation.text }}</v-list-item>
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
            text: "Experience",
            section: "professionalExperience"
        },
        {
            text: "Projects",
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
    const isLargeScreen = computed(() => width.value >=1024);
    const drawer = ref(false);
</script>

<style lang="scss" scoped>
    // NOTE Mobile (Portrait)	0px to 480px.
    .appbar-main-container , .navigation-drawer{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color:  #2C3E50;
        color: cyan;

        .title {
            font-weight: bold;
            min-width: fit-content;
            cursor: pointer;
            
            #title-gene {
                color: white;
            }
        }
    }

    // NOTE Tablets	768px	iPads and Android tablets.
    @media (min-width: 768px) {
        .appbar-main-container , .navigation-drawer{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background-color:  #2C3E50;
            color: cyan;

            .title {
                font-weight: bold;
                min-width: fit-content;
                cursor: pointer;
                font-size: 150%;
                
                #title-gene {
                    color: white;
                }
            }
        }
    }
</style>



