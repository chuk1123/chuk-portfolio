// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // Disable SSR (same as ssr: false in Nuxt 2)
    ssr: false,

    // Target static deployment (same as in Nuxt 2)
    target: 'static',

    // App configuration (replaces head section in Nuxt 2)
    app: {
        head: {
            titleTemplate: '%s - Chuk',
            title: 'Chuk',
            htmlAttrs: {
                lang: 'en'
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: '' },
                { name: 'format-detection', content: 'telephone=no' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ]
        },
        // Remove page transitions
        // pageTransition: { name: 'page', mode: 'out-in' }
    },

    // Auto-import components
    components: true,

    // Modules
    modules: [
        '@nuxtjs/google-fonts',
    ],

    // Google Fonts config
    googleFonts: {
        families: {
            Poppins: [100, 200, 300, 400, 500, 600, 700, 900],
            Alice: [400, 500],
        },
        display: 'swap',
        download: true,
        preload: true,
    },

    // CSS global imports
    css: [
        'vuetify/styles',
        '@mdi/font/css/materialdesignicons.min.css',
        '~/assets/css/main.css',
    ],

    // Build configuration
    build: {
        transpile: ['vuetify'],
    },

    // Vite configuration
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
        // Resolve Vuetify issue
        ssr: {
            noExternal: ['vuetify'],
        },
        optimizeDeps: {
            include: ['vuetify'],
        }
    },

    compatibilityDate: '2025-04-03'
})