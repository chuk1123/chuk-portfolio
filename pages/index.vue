<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section py-8">
      <v-container>
        <v-row class="align-center">
          <v-col cols="12" md="6" class="fade-in">
            <h6 class="text-h6 text-secondary font-weight-regular mb-2">
              Hello, my name is
            </h6>
            <h1 class="hero-title text-primary font-weight-bold mb-2">
              Kevin Chu
            </h1>
            <h2 class="hero-subtitle font-weight-medium mb-6">
              CS & DS Student at UC Berkeley
            </h2>
            <p class="text-body-1 mb-8">
              Machine Learning, Web Development, and Discord Bots.<br>
              Passionate about solving real-world problems with technology, especially in healthcare.
            </p>
            
            <div class="d-flex flex-wrap mb-6">
              <v-btn
                size="large"
                class="mr-3 mb-3"
                rounded="xl"
                variant="elevated"
                color="primary"
                href="#projects"
              >
                <v-icon start>mdi-rocket-launch</v-icon>
                See My Work
              </v-btn>
              <v-btn
                size="large"
                class="mr-3 mb-3"
                rounded="xl"
                variant="outlined"
                color="primary"
                to="/about"
              >
                <v-icon start>mdi-account</v-icon>
                About Me
              </v-btn>
            </div>
            
            <div class="d-flex social-links mb-6">
              <v-btn
                icon
                class="mr-4"
                color="error"
                href="https://www.youtube.com/channel/UCwPzHYyJy85mEExyrVLF2Hw"
                target="_blank"
              >
                <v-icon>mdi-youtube</v-icon>
              </v-btn>
              <v-btn
                icon
                class="mr-4"
                color="pink"
                href="https://www.instagram.com/chuk1123/"
                target="_blank"
              >
                <v-icon>mdi-instagram</v-icon>
              </v-btn>
              <v-btn
                icon
                class="mr-4"
                color="info"
                href="https://www.linkedin.com/in/kevin-chu-072b7a211/"
                target="_blank"
              >
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
              <v-btn
                icon
                class="mr-4"
                href="https://github.com/chuk1123"
                target="_blank"
              >
                <v-icon>mdi-github</v-icon>
              </v-btn>
            </div>
          </v-col>
          
          <v-col cols="12" md="6" class="d-flex justify-center fade-in delay-2">
            <div class="profile-img-container">
              <v-img
                class="rounded-xl"
                height="400"
                width="400"
                cover
                eager
                src="/Kevin Berkeley.jpeg"
                alt="Kevin Chu profile photo"
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
    
    <!-- About Me Section -->
    <section class="py-8">
      <v-container>
        <h2 class="text-h3 text-primary text-center font-weight-bold mb-6 fade-in">
          About Me
        </h2>
        
        <v-row align="center" class="fade-in delay-1">
          <v-col cols="12" md="8">
            <div class="double-space text-body-1 mb-6">
              {{ bio }}
            </div>
            <v-btn
              color="primary"
              variant="elevated"
              rounded="xl"
              to="/about"
              size="large"
              class="mt-4"
            >
              <v-icon start>mdi-account</v-icon>
              Learn More
            </v-btn>
          </v-col>
          
          <v-col cols="12" md="4" class="d-flex justify-center">
            <v-card variant="flat" class="pa-4 bg-transparent">
              <v-card-text class="text-center">
                <v-img 
                  src="/Python-logo.png" 
                  max-height="200" 
                  contain
                  eager
                  alt="Python logo"
                  class="mb-4"
                />
                <div class="text-h6 font-weight-bold">Programming</div>
                <div class="text-subtitle-1">Python, Java, C++, JavaScript</div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
    
    <!-- Projects Section -->
    <section id="projects" class="py-8">
      <v-container>
        <h2 class="text-h3 text-primary text-center font-weight-bold mb-6 fade-in">
          My Projects
        </h2>
        
        <v-row class="fade-in delay-1">
          <v-col v-for="(project, index) in projects" :key="index" cols="12" md="6" class="mb-8">
            <v-card class="card-hover project-card rounded-xl" height="100%">
              <div class="d-flex flex-nowrap rounded-t-xl overflow-hidden" style="height: 250px">
                <div v-for="(img, i) in project.image" :key="i" class="flex-grow-1 position-relative">
                  <v-img
                    :src="img"
                    height="250"
                    cover
                    eager
                    :alt="`${project.title} image ${i+1}`"
                    class="h-100"
                  ></v-img>
                </div>
              </div>
              
              <v-card-title class="text-h5 font-weight-bold pt-4">
                {{ project.title }}
              </v-card-title>
              
              <v-card-subtitle class="pb-0">
                {{ project.subtitle }}
              </v-card-subtitle>
              
              <v-card-text class="pt-4">
                <div class="d-flex flex-wrap mb-4">
                  <span v-for="(tech, tIndex) in project.technologies" :key="tIndex" class="tech-tag">
                    {{ tech }}
                  </span>
                </div>
                
                <p class="text-body-2">
                  {{ project.description }}
                </p>
              </v-card-text>
              
              <v-card-actions class="pa-4 pt-0 d-flex justify-center">
                <v-btn
                  variant="elevated"
                  color="primary"
                  class="rounded-xl px-6 py-2 mx-2"
                  :href="project.link"
                  target="_blank"
                  elevation="2"
                >
                  <v-icon start class="mr-2">mdi-github</v-icon>
                  View Code
                </v-btn>
                
                <v-btn
                  v-if="project.demo"
                  variant="outlined"
                  color="primary"
                  class="rounded-xl px-6 py-2 mx-2"
                  :href="project.demo"
                  target="_blank"
                >
                  <v-icon start class="mr-2">mdi-web</v-icon>
                  Live Demo
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
    
    <!-- Call To Action -->
    <section class="py-8">
      <v-container>
        <v-row class="justify-center fade-in">
          <v-col cols="12" md="8" class="text-center">
            <h2 class="text-h3 font-weight-bold mb-4">Interested in working together?</h2>
            <p class="text-body-1 mb-6">
              I'm always open to new opportunities and collaborations.
              Feel free to reach out if you'd like to connect!
            </p>
            <v-btn
              size="large"
              color="primary"
              variant="elevated"
              rounded="xl"
              href="mailto:kevin.chu@berkeley.edu"
              class="px-6"
            >
              <v-icon start>mdi-email</v-icon>
              Contact Me
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script setup>
// Page title
useHead({
  title: 'Home'
})

// Bio text
const bio = `
  I am currently a freshman at UC Berkeley studying CS and DS. I am interested in computer science and code in Python, C++, Java, and Javascript.
  I have experience in machine learning, discord bots, web development, and competitive programming.
  In my free time, I also enjoy producing electronic music, solving Rubik's Cubes and playing tennis.
`

// Enhanced project data
const projects = [
  {
    title: "Discord Stock Bot",
    subtitle: "Discord Bot to Receive Real-Time Processed Data",
    description: "A custom Discord bot that provides real-time stock data, charts, and analysis. Users can request stock information directly in Discord channels.",
    technologies: ["Python", "Pycord", "Financial APIs", "Data Visualization"],
    image: [
      "/Stock_Bot_QQQ_Example.jpeg",
      "/stock-bot.png",
    ],
    link: "https://github.com/chuk1123/stock_bot",
    demo: null,
  },
  {
    title: "Snake AI",
    subtitle: "AI to Play Snake Using Deep Reinforcement Learning",
    description: "A neural network trained using reinforcement learning to play the classic Snake game. The AI learns optimal strategies through repeated gameplay.",
    technologies: ["Python", "PyTorch", "Deep Q-Learning", "Neural Networks"],
    image: [
      "/Snake.png",
      "/neural_network.png",
    ],
    link: "https://github.com/chuk1123/snake_ai_2",
    demo: null,
  },
]

// Detect when elements are in viewport for animations
const isInViewport = ref(false)

onMounted(() => {
  // Set animation trigger on mount
  setTimeout(() => {
    isInViewport.value = true
  }, 100)
})
</script>

<style scoped>
.social-links .v-btn {
  opacity: 0.8;
  transition: all 0.3s ease;
}

.social-links .v-btn:hover {
  opacity: 1;
  transform: translateY(-5px);
}

.tech-tag {
  display: inline-block;
  padding: 6px 12px;
  margin: 4px;
  background-color: rgba(103, 58, 183, 0.1);
  border-radius: 20px;
  font-size: 0.8rem;
  color: var(--primary);
}

/* Project card button styles */
.v-card-actions .v-btn {
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
}

.v-card-actions .v-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 7px 14px rgba(103, 58, 183, 0.2);
}
</style>
