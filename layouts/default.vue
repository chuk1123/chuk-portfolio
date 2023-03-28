<template>
  <v-app style="background: linear-gradient(to bottom, white, white, #b39ddb)">
    <v-app-bar app height="80" color="white">
      <v-container class="fill-height" style="max-width: 1280px">
        <nuxt-link
          to="/"
          class="font-weight-bold text-h4 deep-purple--text text-decoration-none"
          align="center"
          >Chuk</nuxt-link
        >
        <v-spacer />
        <div v-for="item in items" :key="item.id">
          <v-btn text :to="item.to" class="mx-1">
            {{ item.title }}
          </v-btn>
        </div>
        <v-btn 
          color="deep-purple"
          class="mx-2" 
          outlined
          href="KevinRes.pdf"
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
        <v-btn medium class="mx-10 elevation-0" color="transparent" href="https://github.com/chuk1123/chuk-portfolio" target="_blank">
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
    };
  },
};
</script>
