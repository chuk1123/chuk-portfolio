<template>
  <div>
    <!-- Hero Section -->
    <section class="py-16">
      <v-container>
        <h1 class="text-h2 text-primary text-center font-weight-bold mb-10 fade-in">
          About Me
        </h1>
        
        <v-row class="align-center fade-in delay-1">
          <v-col cols="12" md="7">
            <div class="double-space text-body-1 pa-2">
              {{ bio }}
            </div>
            
            <v-row class="mt-10">
              <v-col cols="12" sm="6">
                <div class="d-flex align-center mb-6">
                  <v-icon color="primary" class="mr-4" size="28">mdi-school</v-icon>
                  <div>
                    <div class="text-h6 font-weight-medium">Education</div>
                    <div class="text-body-2">UC Berkeley</div>
                  </div>
                </div>
              </v-col>
              
              <v-col cols="12" sm="6">
                <div class="d-flex align-center mb-6">
                  <v-icon color="primary" class="mr-4" size="28">mdi-account-group</v-icon>
                  <div>
                    <div class="text-h6 font-weight-medium">Involvement</div>
                    <div class="text-body-2">Clubs & Organizations</div>
                  </div>
                </div>
              </v-col>
              
              <v-col cols="12" sm="6">
                <div class="d-flex align-center mb-6">
                  <v-icon color="primary" class="mr-4" size="28">mdi-code-tags</v-icon>
                  <div>
                    <div class="text-h6 font-weight-medium">Programming</div>
                    <div class="text-body-2">Python, Java, C++, JS</div>
                  </div>
                </div>
              </v-col>
              
              <v-col cols="12" sm="6">
                <div class="d-flex align-center mb-6">
                  <v-icon color="primary" class="mr-4" size="28">mdi-trophy</v-icon>
                  <div>
                    <div class="text-h6 font-weight-medium">Achievements</div>
                    <div class="text-body-2">Awards & Recognition</div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-col>
          
          <v-col cols="12" md="5" class="d-flex justify-center py-8">
            <v-img
              src="/Python-logo.png" 
              max-height="300" 
              contain
              eager
              alt="Python logo"
              class="rounded-xl"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </section>
    
    <!-- Experience Section -->
    <section class="py-16">
      <v-container>
        <h2 class="text-h3 text-primary text-center font-weight-bold mb-10 fade-in">
          Experience
        </h2>
        
        <v-row class="fade-in delay-1">
          <v-col cols="12">
            <v-row>
              <v-col v-for="(exp, index) in experience" :key="index" cols="12" sm="6" md="4" class="mb-6">
                <v-card class="pa-6 rounded-xl card-hover" elevation="3" height="100%">
                  <v-card-title class="text-h6 font-weight-bold">
                    {{ exp }}
                  </v-card-title>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </section>
    
    <!-- Education Timeline -->
    <section class="py-16">
      <v-container>
        <h2 class="text-h3 text-primary text-center font-weight-bold mb-10 fade-in">
          Education
        </h2>
        
        <div class="text-h4 text-center font-weight-medium mb-10 fade-in delay-1">
          UC Berkeley Coursework
        </div>
        
        <v-row class="fade-in delay-1 mb-16">
          <v-col v-for="(course, index) in sortedCoursework" :key="index" cols="12" sm="6" md="4" class="mb-6">
            <v-card class="pa-4 rounded-xl card-hover" elevation="3" height="100%">
              <v-card-title class="text-h6 font-weight-bold d-flex align-center">
                {{ course.title }}
                <v-spacer></v-spacer>
                <span class="text-secondary">{{ course.grade }}</span>
              </v-card-title>
              <v-card-text class="pt-2 text-wrap">
                {{ course.description }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        
        <div class="text-h4 text-center font-weight-medium my-10 fade-in">
          High School Classes
        </div>
        
        <v-row class="fade-in delay-1">
          <v-col v-for="(c, index) in classes" :key="index" cols="12" md="4" class="mb-6">
            <v-card class="pa-6 rounded-xl card-hover" elevation="3" height="100%">
              <v-card-title class="text-h6 font-weight-bold mb-3">
                {{ c.title }}
              </v-card-title>
              <v-card-subtitle class="text-wrap">
                Teacher: {{ c.teacher }}
              </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
    
    <!-- Achievements -->
    <section class="py-16">
      <v-container>
        <v-row>
          <v-col cols="12">
            <h2 class="text-h3 text-primary text-center font-weight-bold mb-10 fade-in">
              Achievements
            </h2>
            
            <v-row class="fade-in delay-1">
              <v-col v-for="(achievement, index) in achievements" :key="index" cols="12" md="6" class="mb-6">
                <v-card class="pa-6 rounded-xl card-hover d-flex" elevation="3">
                  <v-icon color="primary" size="32" class="mr-6">mdi-trophy</v-icon>
                  <div class="text-h6 font-weight-medium text-wrap">{{ achievement }}</div>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </section>
    
    <!-- Contact CTA -->
    <section class="py-16">
      <v-container>
        <v-row class="justify-center fade-in">
          <v-col cols="12" md="8" class="text-center">
            <h2 class="text-h3 font-weight-bold mb-6">Want to know more?</h2>
            <p class="text-body-1 mb-10">
              Feel free to download my resume or reach out if you'd like to connect!
            </p>
            <div class="d-flex flex-wrap justify-center">
              <v-btn
                size="large"
                color="primary"
                variant="elevated"
                rounded="xl"
                href="/Kevin Chu Resume 2025.pdf"
                download
                class="px-8 py-3 mx-4 mb-4"
              >
                <v-icon start>mdi-file-download</v-icon>
                Download Resume
              </v-btn>
              <v-btn
                size="large"
                color="primary"
                variant="outlined"
                rounded="xl"
                href="mailto:kevin.chu@berkeley.edu"
                class="px-8 py-3 mx-4 mb-4"
              >
                <v-icon start>mdi-email</v-icon>
                Contact Me
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// Page title
useHead({
  title: 'About'
})

// Bio text
const bio = `Hello, my name is Kevin Chu.
  I am currently a freshman at UC Berkeley studying CS and DS. I am passionate about computer science and code in Python, C++ and Javascript.
  I have experience in machine learning, discord bots, web development, and competitive programming.
  In my free time, I also enjoy producing electronic music, solving Rubik's Cubes and playing tennis.
`

// Skills array with percentages
const skills = [
  { name: 'Python', level: 95 },
  { name: 'Machine Learning', level: 85 },
  { name: 'JavaScript/Web Dev', level: 80 },
  { name: 'Java', level: 75 },
  { name: 'C++', level: 70 },
]

// Experience list
const experience = [
  "Python Programming",
  "Discord Bot Freelancing",
  "Machine Learning/Neural Networks",
  "Website Developer",
  "USACO Gold",
  "Northwood Tennis Team",
  "LingoX Technology Officer",
  "Google Open Source Project Intern",
  "Northwood AI Club Vice President",
]

// Coursework with descriptions
const coursework = [
  {
    title: "CS 61A",
    grade: "A",
    description: "Structure and Interpretation of Computer Programs"
  },
  {
    title: "CS 61B",
    grade: "A",
    description: "Data Structures and Algorithms"
  },
  {
    title: "Math 56",
    grade: "A+",
    description: "Linear Algebra"
  },
  {
    title: "CS 70",
    grade: "IP",
    description: "Discrete Mathematics and Probability Theory"
  },
  {
    title: "Data 8",
    grade: "A+",
    description: "Foundations of Data Science"
  },
  {
    title: "Data 100",
    grade: "IP",
    description: "Principles and Techniques of Data Science"
  },
  {
    title: "Math 53",
    grade: "IP",
    description: "Multivariable Calculus"
  },
]

// Sort coursework to put IP courses last
const sortedCoursework = computed(() => {
  return [...coursework].sort((a, b) => {
    const aIsIP = a.grade.includes('IP');
    const bIsIP = b.grade.includes('IP');
    
    if (aIsIP && !bIsIP) return 1; // a has IP, b doesn't, so a comes after b
    if (!aIsIP && bIsIP) return -1; // a doesn't have IP, b does, so a comes before b
    return 0; // both are IP or both aren't IP, maintain original order
  });
});

// High school classes
const classes = [
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
    title: "Chapman Calculus 1/2",
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
]

// Achievements list
const achievements = [
  "PVSA Gold Award", 
  "USACO Gold", 
  "2022 Tennis Most Improved Player", 
  "JV Singles #1"
]

// Animation triggers
const isInViewport = ref(false)

onMounted(() => {
  isInViewport.value = true
  
  // Add intersection observer for more precise animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in')
      }
    })
  }, { threshold: 0.1 })
  
  document.querySelectorAll('.should-animate').forEach(el => {
    observer.observe(el)
  })
})
</script>

<style scoped>
/* Ensure text doesn't get cut off */
.text-wrap {
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: normal;
  hyphens: auto;
}

/* Ensure card content has breathing room */
.v-card__title, .v-card__subtitle, .v-card__text {
  padding-left: 8px;
  padding-right: 8px;
}
</style>
