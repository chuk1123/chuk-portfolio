<template>
  <div class="app-container">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts">
import { onMounted } from 'vue'

export default {
  name: 'App',
  setup() {
    // Disable SSR warnings in console
    onMounted(() => {
      document.documentElement.classList.add('mounted');
    });
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;900&family=Alice:wght@400;500&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}

/* App container should be transparent to show body gradient */
.app-container {
  min-height: 100vh;
  background: transparent;
}

/* Prevent image flickering */
.v-img {
  opacity: 1 !important;
  transition: none !important;
}

.v-img img,
.v-img__img {
  opacity: 1 !important;
  transition: none !important;
}

/* Ensure smooth transitions */
html, body {
  overflow-y: auto !important;
}

/* Remove all animations */
*, *::before, *::after {
  animation-duration: 0s !important;
  animation-delay: 0s !important;
  transition-duration: 0s !important;
}

.loading-placeholder {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

html.mounted [v-cloak] {
  display: block;
}
</style> 