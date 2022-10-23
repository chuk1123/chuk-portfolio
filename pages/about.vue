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
      <v-img class="rounded-xl" src="Screen Shot 2022-10-17 at 10.28.40 AM.png"></v-img>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
export default {
    data() {
        return {
          bio: `Hello, my name is Kevin. 
               I am a student at Northwood High School in Irvine, California. I am Elson's dad.
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