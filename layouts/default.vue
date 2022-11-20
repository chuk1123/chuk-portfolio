<template>
 <v-app style="
    background: linear-gradient(to bottom, white, white, #B39DDB);
  ">
    <v-app-bar
      app height="80" color="white"
    >
    <v-container class="fill-height" style="max-width: 1280px;">
      <nuxt-link to="/" class="font-weight-bold text-h4 deep-purple--text text-decoration-none" align="center">Chuk</nuxt-link>
      <v-spacer />
      <div v-for="item in items" :key="item.id">
        <v-btn text :to="item.to" class="mx-1">
          {{item.title}}
        </v-btn>
      </div>
    </v-container>
    </v-app-bar>
    <v-main>
      <v-container style="max-width: 1280px;">
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      app
      absolute="fixed"
      color="white"
    >
      <v-container style="max-width: 1280px;">
        <v-row justify="space-between">
          <v-col cols=2>
            <span class="ml-6">&copy; {{ new Date().getFullYear() }} Chuk</span>
          </v-col>
          <v-col cols=2>
            <span class="mr-6">Personal Portfolio</span>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      items: [
        {
          title: 'Home',
          to: '/'
        },
        {
          title: 'About',
          to: '/about'
        }
      ],
      title: 'Chuk'
    }
  }
}
</script>
