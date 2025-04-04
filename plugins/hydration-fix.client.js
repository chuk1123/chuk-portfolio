/**
 * Client-side only plugin to fix hydration issues
 */
export default defineNuxtPlugin({
    name: 'hydration-fix',
    enforce: 'pre', // This plugin runs before other plugins
    setup() {
        // Wait for hydration to complete
        if (process.client) {
            document.documentElement.classList.add('client-rendered')

            // Prevent image flickering by immediately forcing them visible
            const fixImages = () => {
                const images = document.querySelectorAll('.v-img')
                images.forEach(img => {
                    img.style.transition = 'none'
                    img.style.opacity = '1 !important'

                    // Prevent any animation on image components
                    const imgEl = img.querySelector('img')
                    if (imgEl) {
                        imgEl.style.transition = 'none'
                        imgEl.style.opacity = '1 !important'
                    }
                })
            }

            // Fix images immediately and after a slight delay to catch any late renders
            fixImages()
            setTimeout(fixImages, 50)
            setTimeout(fixImages, 200)
        }
    }
})
