<template>
 <v-app style="
    background: linear-gradient(to bottom, white, white, #B39DDB);
  ">
    <v-app-bar
      app height="80"
    >
    <v-container class="fill-height">
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
      <v-container style="max-width: 1200px;">
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span class="ml-6">&copy; {{ new Date().getFullYear() }} Chuk</span>
      <v-spacer></v-spacer>
      <span class="mr-6"></span>
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
