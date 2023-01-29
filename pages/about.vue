<template>
  <v-container class="py-6">
    <div class="my-10">
      <div class="text-h3 deep-purple--text font-weight-bold mb-10">
        About Me
      </div>
      <br />
      <v-row justify="space-between">
        <v-col cols="12" md="8">
          <p class="double-space text-h5">
            {{ bio }}
          </p>
        </v-col>
        <v-col cols="12" md="3">
          <v-img src="Python-logo.png" max-height="300" contain></v-img>
        </v-col>
      </v-row>
    </div>
    <v-divider></v-divider>
    <div class="my-16">
      <div class="text-h4 deep-purple--text font-weight-bold mb-10">
        Skills and Experience
      </div>
      <v-row>
        <v-col
          cols="12"
          md="4"
          v-for="(name, index) in experience"
          :key="index"
        >
          <v-card class="rounded-lg fill-height">
            <v-card-title class="justify-center" align="center">
              {{ name }}
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <v-divider></v-divider>
    <div class="my-16">
      <div class="text-h4 deep-purple--text font-weight-bold mb-10">
        My Classes
      </div>
      <v-row>
        <v-col cols="12" md="4" v-for="(c, index) in classes" :key="index">
          <v-card class="rounded-lg fill-height">
            <v-card-title class="justify-center mb-2">
              {{ c.title }}
            </v-card-title>
            <v-card-subtitle class="justify-center" align="center">
              Teacher: {{ c.teacher }}
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <v-divider></v-divider>
    <div class="my-16">
      <div class="text-h4 deep-purple--text font-weight-bold mb-10">
        My Clubs
      </div>
      <v-row>
        <v-col cols="12" md="4" v-for="(c, index) in clubs" :key="index">
          <v-card class="rounded-lg fill-height">
            <v-card-title class="justify-center" align="center">
              {{ c }}
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <v-divider></v-divider>
    <div class="my-16">
      <div class="text-h4 deep-purple--text font-weight-bold mb-10">
        My Achievements
      </div>
      <v-row>
        <v-col
          cols="12"
          md="4"
          v-for="(achievement, index) in achievements"
          :key="index"
        >
          <v-card class="rounded-lg fill-height">
            <v-card-title class="justify-center" align="center">
              {{ achievement }}
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
               I am currently a junior at Northwood High School in Irvine, California. I am passionate about computer science and code in Python, C++ and Javascript.
               I have experience in machine learning, discord bots, web development, and competitive programming.
               In my free time, I also enjoy producing electronic music, solving Rubik's Cubes and playing tennis.
               `,
      experience: [
        "Python Programming",
        "Discord Bot Freelancing",
        "Machine Learning/Neural Networks",
        "Website Developer",
        "USACO Silver",
        "Northwood JV Tennis",
        "LingoX Technology Officer"
      ],
      classes: [
        {
          title: "European Literature",
          teacher: "Derek Roche",
        },
        {
          title: "AP Biology",
          teacher: "Jacqueline Tran",
        },
        {
          title: "AP Physics",
          teacher: "Beverly Matsuda",
        },
        {
          title: "Chapman Calculus",
          teacher: "David Lee",
        },
        {
          title: "Honors Spanish 4",
          teacher: "Haydee Vicente",
        },
        {
          title: "Wind Symphony",
          teacher: "Ben Case",
        },
        {
          title: "AP Physics C Mechanics",
          teacher: "Bilal Sarimeseli",
        },
        {
          title: "AP Computer Science A",
          teacher: "Self-Study",
        },
        {
          title: "AP Computer Science Principles",
          teacher: "Self-Study",
        },
        {
          title: "UCLA CS31",
          teacher: "Howard",
        },
      ],
      clubs: [
        "Northwood Machine Learning Club",
        "Computer Science Club",
        "Marching Band",
      ],
      achievements: ["PVSA Gold Award", "USACO Gold", "2022 Tennis Most Improved Player", "JV Singles #1"],
    };
  },
  head() {
    return {
      title: "About",
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
