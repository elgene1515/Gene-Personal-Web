<template>
    <v-app>
        <v-app-bar
            prominent
            density="compact"
            class="pr-10 pl-10"
            color="amber-accent-4"
        >
            <v-img
                max-width=50
                aspect-ratio="1/1"
                alt="Deal Hive Logo"
                class="cursor-pointer"
                @click="this.$router.push('/')"
                src="https://img.pikbest.com/png-images/20240804/honey-bee-cartoon-character-illustration-png_10698271.png!sw800"
            />

            <v-text-field
                clearble
                rounded
                hide-details
                variant="solo"
                max-width="500"
                density="compact"
                placeholder="Search"
                prepend-inner-icon="mdi-magnify"
            />

            <v-spacer></v-spacer>
            
            <v-btn
                stacked
                :key="index"
                color="#700e01"
                class="mr-10 ml-10"
                :to="appBarNavigation.path"
                v-for="(appBarNavigation, index) in appBarNavigations"
            >
                <v-badge
                    :content="appBarNavigation.newItem.length"
                    color="red"
                    v-if="appBarNavigation.newItem != ''"
                >
                    <v-icon>
                        {{ appBarNavigation.icon }}
                    </v-icon>
                </v-badge>
                <v-icon v-else>
                    {{ appBarNavigation.icon }}
                </v-icon>
            </v-btn>

            <v-spacer></v-spacer>

            <v-menu transition="scale-transition"
                v-for="(appBarDropdown, index) in appBarDropdowns"
                :key="index"
                >
                <template v-slot:activator="{ props }">
                <v-btn

                :v-model=appBarDropdown.model
                color="#700e01"
                :icon=appBarDropdown.icon
                v-bind="props"
                >
                <v-badge
                content="2"
                color="red"
                v-if="appBarDropdown.model != 'profile'"
                >
                <v-icon>{{ appBarDropdown.icon }}</v-icon>
                </v-badge>
                <v-icon v-else>
                {{ appBarDropdown.icon }}
                </v-icon>
                </v-btn>
                </template>

                <v-list>
                <v-list-item
                v-if="appBarDropdown.model != 'profile'"
                v-for="(item, index) in appBarDropdown.items"
                :key="index"
                :value="index"
                >
                <v-list-item-title>{{ item }}</v-list-item-title>
                </v-list-item>

                <div
                v-else
                >
                <v-list-item
                lines="two"
                title="Bee Lee Gene"
                subtitle="Logged In"
                prepend-avatar="https://img.freepik.com/premium-photo/cartoon-bee-with-smile-its-face-wings-generative-ai_958165-17006.jpg"
                ></v-list-item>

                <v-divider></v-divider>

                <v-list
                nav
                density="compact"
                >
                <v-list-item
                v-for="(profileOption, index) in profileOptions"
                :key="index"
                :value="profileOption.index"
                :to="profileOption.path"
                :title="profileOption.title"
                :prepend-icon="profileOption.icon"
                color="primary"
                >
                </v-list-item>
                </v-list>

                <v-container>
                <v-btn
                text
                block
                color="amber-accent-4"
                prepend-icon="mdi-logout"
                style="color: white;"
                >
                Logout
                </v-btn>
                </v-container>
                </div>
                </v-list>
            </v-menu>
        </v-app-bar>

        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
export default {
    data: () => ({
        drawer: false,
        appBarNavigations: [
            {
                path: '/',
                icon: 'mdi-home-outline',
                model:'home',
                newItem: []
            },
            {
                path: '/connection',
                icon:'mdi-account-multiple',
                model:'connection',
                newItem: ['asdasd','asdasd','asdasd']
            },
            {
                path: '/cart',
                icon:'mdi-cart-outline',
                model:'cart',
                newItem: ['asdasd']
            },
            {
                path: '/listing',
                icon: 'mdi-format-list-bulleted',
                model:'listing',
                newItem: []
            },
        ],
        appBarDropdowns: [
            {
                icon: 'mdi-chat-outline',
                model: 'chat',
                items: ["one" ,"two" , "three"]
            },
            {
                icon: 'mdi-bell-outline',
                model: 'notification',
                items: ["4" ,"5" , "6"]
            },
            {
                icon: 'mdi-menu-down',
                model: 'profile',
                items: ["seven" ,"eigth" , "nine"]
            }
        ],
        profileOptions: [
            {
                title: 'Settings & Privacy',
                path: '/option1',
                icon: 'mdi-cog'
            },
            {
                title: 'About',
                path: '/option2',
                icon:'mdi-information-outline'
            },
            {
                title: 'Display and Accessibility',
                path: '/option3',
                icon: 'mdi-moon-waning-crescent'
            },
        ],
    }),
}
</script>

<style>
</style>