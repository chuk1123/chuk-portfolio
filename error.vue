<template>
  <NuxtLayout>
    <div class="error-page">
      <h1 class="text-h3">Error</h1>
      <p class="text-h5 my-4">Sorry, an error occurred.</p>
      <v-btn color="primary" to="/" class="mt-4">Go back home</v-btn>
    </div>
  </NuxtLayout>
</template>

<style scoped>
.error-page {
  padding: 4rem;
  text-align: center;
}
</style> 