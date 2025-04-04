<template>
  <div>
    <v-app>
      <!-- Modern Sticky Header -->
      <v-app-bar 
        height="80" 
        :elevation="scrolled ? 4 : 0"
        color="white"
        class="transition-smooth"
        app
        sticky
      >
        <v-container class="d-flex align-center" style="max-width: 1280px">
          <NuxtLink
            to="/"
            class="font-weight-bold text-h4 text-primary text-decoration-none"
          >
            Chuk
          </NuxtLink>
          <v-spacer />
          
          <!-- Desktop Navigation -->
          <div class="d-none d-md-flex align-center">
            <v-btn
              v-for="(item, index) in navigationItems"
              :key="index"
              :to="item.to"
              variant="text"
              rounded="xl"
              class="mx-2"
              color="primary"
            >
              {{ item.title }}
            </v-btn>
            
            <!-- Resume Button -->
            <v-btn 
              color="primary"
              rounded="xl"
              class="ml-4" 
              variant="elevated"
              href="/Kevin Chu Resume 2025.pdf"
              download
            >
              <v-icon class="mr-2">mdi-file-download</v-icon>
              Resume
            </v-btn>
          </div>
          
          <!-- Mobile Menu Button -->
          <v-btn 
            class="d-md-none" 
            icon="mdi-menu" 
            variant="text"
            @click="drawer = !drawer"
          ></v-btn>
        </v-container>
      </v-app-bar>
      
      <!-- Mobile Navigation Drawer -->
      <v-navigation-drawer
        v-model="drawer"
        temporary
        location="right"
        width="300"
      >
        <v-list>
          <v-list-item class="text-primary text-h5 font-weight-bold py-6">
            Menu
          </v-list-item>
          
          <v-list-item
            v-for="(item, index) in navigationItems"
            :key="index"
            :to="item.to"
            :title="item.title"
            class="py-3"
          ></v-list-item>
          
          <v-list-item class="py-4">
            <v-btn 
              block
              color="primary"
              variant="elevated"
              href="/Kevin Chu Resume 2025.pdf"
              download
              class="py-3"
            >
              <v-icon class="mr-2">mdi-file-download</v-icon>
              Download Resume
            </v-btn>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      
      <!-- Main Content Area -->
      <v-main>
        <v-container style="max-width: 1280px" class="pa-0">
          <slot />
        </v-container>
      </v-main>
      
      <!-- Footer Section -->
      <v-footer class="bg-white">
        <v-container class="py-8" style="max-width: 1280px">
          <v-row>
            <v-col cols="12" md="4">
              <div class="text-h5 font-weight-bold text-primary mb-6">Chuk</div>
              <p class="text-body-1">
                Computer Science & Data Science Student at UC Berkeley.
                Passionate about Machine Learning, Web Development, and Discord Bots.
              </p>
            </v-col>
            
            <v-col cols="12" md="4">
              <div class="text-h6 font-weight-bold mb-4">Contact</div>
              <div class="d-flex align-center mb-2">
                <v-icon class="mr-2" color="primary">mdi-github</v-icon>
                <a href="https://github.com/chuk1123" target="_blank" class="text-decoration-none">
                  github.com/chuk1123
                </a>
              </div>
              <div class="d-flex align-center mb-2">
                <v-icon class="mr-2" color="primary">mdi-linkedin</v-icon>
                <a href="https://www.linkedin.com/in/kevin-chu-072b7a211/" target="_blank" class="text-decoration-none">
                  LinkedIn
                </a>
              </div>
            </v-col>
            
            <v-col cols="12" md="4">
              <div class="text-h6 font-weight-bold mb-4">Quick Links</div>
              <div v-for="(item, index) in navigationItems" :key="index" class="mb-2">
                <NuxtLink :to="item.to" class="text-decoration-none">
                  {{ item.title }}
                </NuxtLink>
              </div>
            </v-col>
          </v-row>
          
          <v-divider class="my-6"></v-divider>
          
          <div class="d-flex flex-column flex-md-row justify-space-between align-center">
            <div>&copy; {{ new Date().getFullYear() }} Kevin Chu. All rights reserved.</div>
            <div>
              <a 
                href="https://github.com/chuk1123/chuk-portfolio" 
                target="_blank" 
                class="text-decoration-none d-flex align-center"
              >
                <v-icon class="mr-2">mdi-github</v-icon>
                View Source
              </a>
            </div>
          </div>
        </v-container>
      </v-footer>
    </v-app>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const drawer = ref(false)
const scrolled = ref(false)
const contentReady = ref(false)

const navigationItems = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "About",
    to: "/about",
  },
]

// Handle scroll events for sticky header
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  
  // Ensure content is ready after mount
  setTimeout(() => {
    contentReady.value = true
  }, 100)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

function handleScroll() {
  scrolled.value = window.scrollY > 50
}
</script>

<style>
.v-application {
  background: transparent !important;
}

.v-main {
  background: transparent !important;
}

.transition-smooth {
  transition: all 0.3s ease;
}
</style>
