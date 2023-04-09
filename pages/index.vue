<template>
  <div>
    <v-container class="py-16">
      <v-row class="align-center justify-center">
        <v-col cols="12" md="6">
          <div class="text-h5 mb-6">Hello, my name is</div>
          <div class="display-3 mb-6">
            <span class="deep-purple--text font-weight-medium">Kevin Chu</span>
          </div>
          <div class="text-h5 mb-6">Code in Python, C++, Javascript</div>
          <div class="text-h6 mb-6">
            Machine Learning, Web Development, Discord Bots
          </div>
          <br />
          <v-btn
            large
            class="px-3 ma-2 white--text"
            color="red"
            href="https://www.youtube.com/channel/UCwPzHYyJy85mEExyrVLF2Hw"
            target="_blank"
          >
            <v-icon left size="16">mdi-youtube</v-icon>
            Youtube
          </v-btn>
          <v-btn
            large
            class="px-3 ma-2 white--text"
            color="pink"
            href="https://www.instagram.com/chuk1123/"
            target="_blank"
          >
            <v-icon left size="16">mdi-instagram</v-icon>
            Instagram
          </v-btn>
          <v-btn
            large
            class="px-3 ma-2"
            color="info"
            href="https://www.linkedin.com/in/kevin-chu-072b7a211/"
            target="_blank"
          >
            <v-icon left size="16">mdi-linkedin</v-icon>
            Linkedin
          </v-btn>
          <v-btn
            large
            class="px-3 ma-2"
            color="dark"
            href="https://github.com/chuk1123"
            target="_blank"
          >
            <v-icon left size="16">mdi-github</v-icon>
            Github
          </v-btn>
        </v-col>
        <v-col cols="12" md="4">
          <v-img
            class="rounded-xl elevation-20 mx-auto"
            max-height="400"
            max-width="400"
            src="kevin-photo.jpg"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-divider></v-divider>
    <v-container class="py-16">
      <div class="text-h3 deep-purple--text text-center font-weight-bold mb-10">
        About Me
      </div>
      <h7 class="double-space mx-md-16 mb-6 text-h6">
        {{ bio }}
      </h7>
      <nuxt-link
        class="text-decoration-none font-weight-bold text-h6 deep-purple--text mx-md-16"
        to="/about"
      >
        Learn More
      </nuxt-link>
    </v-container>
    <v-divider></v-divider>
    <v-container class="py-16">
      <div class="text-h3 deep-purple--text text-center font-weight-bold mb-10">
        Projects
      </div>
      <v-row class="my-10" justify="center">
        <v-col v-for="item in projects" :key="item.id" cols="12" md="6">
          <v-card class="pa-6 rounded-xl fill-height">
            <v-card-title>
              {{ item.title }}
            </v-card-title>
            <v-card-subtitle>
              {{ item.subtitle }}
            </v-card-subtitle>
            <div v-for="image in item.image" :key="image.id">
              <v-img
                :src="image"
                class="mt-6 mx-auto rounded-xl"
                max-height="250"
                max-width="500"
                contain
              />
            </div>
            <div class="mt-16 ml-4">
              <v-btn
              class="px-6 ma-2 white--text rounded-xl"
              color="primary lighten-1"
              :href="item.link"
              target="_blank"
              absolute bottom 
              >
                <v-icon left size="16">mdi-github</v-icon>
                Github
              </v-btn>
            </div>
            
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bio: `
            I am currently a junior at Northwood High School in Irvine, California. I am interested in computer science and code in Python, C++ and Javascript.
            I have experience in machine learning, discord bots, web development, and competitive programming.
            `,
      projects: [
        {
          title: "Discord Stock Bot",
          subtitle: "Discord Bot to Recieve Real-Time Processed Data",
          image: [
            "https://cdn.discordapp.com/attachments/991573596524781588/993912460245475378/QQQ-2022-07-05-1day.jpeg",
            "stock-bot.png",
          ],
          link: "https://github.com/chuk1123/stock_bot",
        },
        {
          title: "Snake AI",
          subtitle: "AI to Play Snake Using Deep Reinforcement Learning",
          image: [
            "Snake.png",
            "neural_network.png",
          ],
          link: "https://github.com/chuk1123/snake_ai_2",
        },
      ],
    };
  },
  head() {
    return {
      title: "Home",
    };
  },
};
</script>

<style>
.double-space {
  line-height: 2 !important;
  display: inline-block;
}
.v-card__text,
.v-card__title {
  word-break: normal !important;
}
</style>
