import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Import light theme
import { md3 } from 'vuetify/blueprints'

// Define custom light theme
const lightTheme = {
    dark: false,
    colors: {
        'primary': '#673AB7',
        'secondary': '#26A69A',
        'accent': '#00BFA5',
        'error': '#FF5252',
        'info': '#2196F3',
        'success': '#4CAF50',
        'warning': '#FFC107',
        'surface': '#F8F9FA',
        'background': '#FFFFFF',
    }
}

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        ssr: false,
        blueprint: md3,
        theme: {
            defaultTheme: 'lightTheme',
            themes: {
                lightTheme,
            },
        },
        defaults: {
            VImg: {
                eager: true, // Force eager loading of images
                transition: false // Disable default image transitions
            }
        },
        components,
        directives,
    })

    nuxtApp.vueApp.use(vuetify)
}) 