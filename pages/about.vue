<template>
<v-container class="py-10">
  <div class="my-10">
    <div class="text-h3 deep-purple--text font-weight-bold mb-10">About Me</div>
    <br>
    <v-row justify="space-between">
      <v-col cols=12 md=8>
        <p class="double-space text-h5" >
          {{bio}}
        </p>
      </v-col>
      <v-col cols=12 md=3>
        <v-img src="Python-logo.png" max-height="300" contain></v-img>
      </v-col>
    </v-row>
  </div>
  <v-divider></v-divider>
  <div class="my-10">
    <div class="text-h4 deep-purple--text font-weight-bold mb-10">Skills and Experience</div>
    <v-row>
      <v-col cols="12" md="4" v-for="(name, index) in experience" :key="index">
        <v-card class="rounded-lg" height="100%">
          <v-card-title class="justify-center">
            {{name}}
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    
  </div>

</v-container>
</template>

<script>
export default {
    data() {
        return {
          bio: `Hello, my name is Kevin Chu. 
               I am currently a junior at Northwood High School in Irvine, California. I am interested in computer science and code in Python, C++ and Javascript. 
               I have experience in machine learning, discord bots, web development, and competitive programming.
               In my free time, I also enjoy producing electronic music, solving Rubik's Cubes and playing tennis. 
               `,
          experience: [
            "Python Programming",
            "Discord Bot Freelancing",
            "Machine Learning/Neural Networks",
            "Website Developer",
            "USACO Bronze",
            "Northwood JV Tennis",
          ]
        }
    },
    head() {
    return {
      title: 'About'
    }
  }
}
</script>

<style>
  .double-space {
    line-height: 2 !important;
    display: inline-block
  }
</style>