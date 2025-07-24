// plugins/vuetify.js or src/plugins/vuetify.js

import 'vuetify/styles'                     // Vuetify core CSS
import { createVuetify } from 'vuetify'     // Vuetify factory
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import '@mdi/font/css/materialdesignicons.css' // Material Design Icons
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export default createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
})
