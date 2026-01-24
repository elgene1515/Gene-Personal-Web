<template>
    <v-app-bar class="appbar-main-container" fluid>
        <!-- NOTE Title -->
        <v-app-bar-title class="title" @click="gotoFunction">
            Software <span id="title-gene">GENE</span>gineer
        </v-app-bar-title>

        <v-spacer></v-spacer>

        <!-- NOTE Navigation Buttons -->
        <ButtonNavigation text="Professional Experience"/>
        
        <ButtonNavigation text="Software Engineering Projects"/>
        
        <ButtonNavigation text="Skills"/>

        <ButtonNavigation text="About Me"/>

        <ButtonNavigation text="Contact"/>
    </v-app-bar>
</template>

<script setup>
    function gotoFunction(){
        console.log("HOME");
    }
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



