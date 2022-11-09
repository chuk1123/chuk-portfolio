<template>
<v-container class="py-10 mb-6">
  <div class="text-h3 deep-purple--text text-center font-weight-bold mb-10">About Me</div>
  <v-row class="justify-center">
    <v-col cols=8>
      <div class="text-h6">
        {{bio}}
      </div>
    </v-col>
    <v-col cols=4>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
export default {
    data() {
        return {
          bio: `Hello, my name is Kevin. 
               I am a student at Northwood High School in Irvine, California. I am interested in computer science and codes in Python, C++ and Javascript. 
               I have experience in machine learning, discord bots, web development, and competitive programming."
               `
        }
    },
    head() {
    return {
      title: 'About'
    }
  }
}
</script>