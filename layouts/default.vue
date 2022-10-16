<template>
 <v-app style="
    background: linear-gradient(to bottom, white, white, #B39DDB);
  ">
    <v-app-bar
      app
    >
    <v-container class="fill-height">
      <h2 class="font-weight-bold deep-purple--text">Kevin Chu</h2>
      <v-spacer />
      <div v-for="item in items" :key="item.id">
        <v-btn text :to="item.to" class="mx-1">
          {{item.title}}
        </v-btn>
      </div>
    </v-container>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
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
