<template>
    <v-app-bar fluid>
        <!-- NOTE Logo -->
        <v-img
            max-width=50
            aspect-ratio="1/1"
            alt="Deal Hive Logo"
            class="cursor-pointer"
            src="https://pngimg.com/d/bee_PNG74719.png"
        >
        </v-img>

        <v-spacer></v-spacer>

        <!-- NOTE Navigation Buttons -->
        <NavigationButton
            text="Home"
        />

        <NavigationButton
            text="About"
        />

        <NavigationButton
            text="Tech Stack"
        />

        <NavigationButton
            text="Projects"
        />

        <NavigationButton
            text="Resume"
        />

        <NavigationButton
            text="Achievements"
        />

        <NavigationButton
            text="Contact"
        />
    </v-app-bar>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>