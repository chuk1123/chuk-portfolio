<template>
<div>
  <v-container class="py-10 mb-6">
    <v-row class="align-center justify-center">
      <v-col cols=12 md=6>
        <div class="text-h5 secondary--text mb-6">Hello, my name is </div>
        <div class="display-3 mb-6"><span class="deep-purple--text">Kevin Chu.</span></div>
        <div class="text-h5 mb-6">Code in Python, C++</div>
        <div class="text-h6 mb-6">Machine Learning, Web Development, Discord Bots</div>
        <br>
        <v-row class="justify-center">
          <v-col cols=12>
            <v-btn large class="px-3 ma-2 white--text" color="red" href="https://www.youtube.com/channel/UCwPzHYyJy85mEExyrVLF2Hw" target="_blank">
                <v-icon left size="16">mdi-youtube</v-icon>
                Youtube
            </v-btn>
            <v-btn large class="px-3 ma-2 white--text" color="pink" href="https://www.instagram.com/chuk1123/" target="_blank">
                <v-icon left size="16">mdi-instagram</v-icon>
                Instagram
            </v-btn>
            <v-btn large class="px-3 ma-2" color="info" href="www.linkedin.com/in/kevin-chu-072b7a211" target="_blank">
                <v-icon left size="16">mdi-linkedin</v-icon>
                Linkedin
            </v-btn>
            <v-btn large class="px-3 ma-2" color="dark" href="https://github.com/chuk1123" target="_blank">
                <v-icon left size="16">mdi-github</v-icon>
                Github
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols=12 md=4>
        <v-img class="rounded-xl elevation-4 mx-auto" max-height="400" max-width="400" src="kevin2.jpg"/>
      </v-col>
    </v-row>
  </v-container>
  <v-divider></v-divider>
  <v-container class="py-10">
    <div class="text-h3 deep-purple--text text-center font-weight-bold mb-10">Projects</div>
    <v-row class="my-10" justify="center">
      <v-col v-for="item in projects" :key="item.id" cols=12 md=6>
        <v-card class="pa-6 rounded-xl" max-height="750">
          <v-card-title>
            {{item.title}}
          </v-card-title>
          <v-card-subtitle>
            {{item.subtitle}}
          </v-card-subtitle>
            <v-row align="center" no-gutters>
              <v-col v-for="image in item.image" :key=image.id >
                <v-img :src="image" class="my-2 mx-auto rounded-xl" max-height="400" max-width="300"/>            
              </v-col>
            </v-row>
            
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
      projects: [
        {
          title: "Discord Stock Bot",
          subtitle: "Discord Bot to Recieve Real-Time Processed Data",
          image: [
            "https://cdn.discordapp.com/attachments/991573596524781588/993912460245475378/QQQ-2022-07-05-1day.jpeg",
            "stock-bot.png"
          ],
        },
        {
          title: "Snake AI",
          subtitle: "AI to Play Snake Using Deep Reinforcement Learning",
          image: [
            "https://media.istockphoto.com/vectors/classic-retro-snakestyle-game-basic-digital-screen-for-your-design-vector-id1363586427?k=20&m=1363586427&s=612x612&w=0&h=uKW6cbMQCS4ydTzsdIaRiUc1L7Ike-3N0qzBjm-uwis=",
            "https://cdn-icons-png.flaticon.com/512/6461/6461928.png"
          ]
        },
      ]
    }
  },
  head() {
    return {
      title: 'Home'
    }
  }
}
</script>