<template>
    <v-app-bar class="appbar-main-container" fluid>
        <!-- NOTE Title -->
        <v-app-bar-title class="title" @click="navigation.gotoSection('homeRef')">
            Software <span id="title-gene">GENE</span>gineer
        </v-app-bar-title>

        <v-spacer></v-spacer>

        <!-- NOTE Navigation Buttons -->
        <ButtonNavigation text="Professional Experience" @click="navigation.gotoSection('professionalExperience')"/>
        
        <ButtonNavigation text="Software Engineering Projects" @click="navigation.gotoSection('softwareEngineeringProjects')"/>
        
        <ButtonNavigation text="Skills" @click="navigation.gotoSection('skills')"/>

        <ButtonNavigation text="About Me" @click="navigation.gotoSection('aboutMe')"/>

        <ButtonNavigation text="Contact Me" @click="navigation.gotoSection('contactMe')"/>
    </v-app-bar>
</template>

<script setup>
    import { useNavigationStore } from '@/stores/navigation';

    const navigation = useNavigationStore();
</script>

<style scoped>
    .appbar-main-container {
        background-color:  #2C3E50;
    }

    .title {
        color: cyan;
        font-weight: bold;
        font-size: 150%;
        cursor: pointer;
    }

    #title-gene {
        color: white;
    }
</style>



