<template>
  <v-app style="background: linear-gradient(to bottom, white, white, #b39ddb)">
    <v-navigation-drawer v-model="drawer" temporary app>
      <v-list>
        <v-subheader class="text-uppercase font-weight-bold">
          Pages
        </v-subheader>
        <div v-for="(item, index) in items" :key="index">
          <v-list-item :to="item.to">
            <v-list-item-content>
              <v-list-item-title class="py-1">
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app height="80" color="white">
      <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer" />
      <v-container class="fill-height" style="max-width: 1280px">
        <nuxt-link
          to="/"
          class="font-weight-bold text-h4 deep-purple--text text-decoration-none"
          align="center"
          >Chuk</nuxt-link
        >
        <v-spacer />
        <div v-for="item in items" :key="item.id" class="d-none d-md-block">
          <v-btn text :to="item.to" class="mx-1">
            {{ item.title }}
          </v-btn>
        </div>
        <v-btn 
          color="deep-purple"
          class="mx-2" 
          outlined
          href="Kevin Chu Resume 2025.pdf"
          download>
          Resume
        </v-btn>
      </v-container>
    </v-app-bar>
    <v-main>
      <v-container style="max-width: 1280px">
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer absolute="fixed" app color="white">
      <v-container class="fill-height" style="max-width: 1280px">
        <span>&copy; {{ new Date().getFullYear() }} Chuk</span>
        <v-spacer></v-spacer>
        <v-btn medium class="mx-10 elevation-0 d-none d-sm-flex" color="transparent" href="https://github.com/chuk1123/chuk-portfolio" target="_blank">
            <v-icon class="mr-2" size="30">mdi-github</v-icon>
            Website Github
        </v-btn>
        <span>Personal Portfolio</span>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      items: [
        {
          title: "Home",
          to: "/",
        },
        {
          title: "About",
          to: "/about",
        },
      ],
      title: "Chuk",
      drawer: false,
    };
  },
};
</script>
