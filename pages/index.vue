<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section py-8">
      <v-container>
        <v-row class="align-center">
          <v-col cols="12" md="6" class="fade-in">
            <h6 class="text-h6 text-secondary font-weight-regular mb-2">
              Hi there, I'm
            </h6>
            <h1 class="hero-title text-primary font-weight-bold mb-2">
              Kevin Chu
            </h1>
            <h2 class="hero-subtitle font-weight-medium mb-6">
              Sophomore in Computer Science & Data Science, UC Berkeley
            </h2>
            <p class="text-body-1 mb-6">
              Focused on Machine Learning Research, Algorithmic Problem Solving, and Data Science Applications.<br>
              Seeking research opportunities in AI and computational methods for real-world problems.
            </p>
            
            <div class="d-flex flex-wrap mb-6">
              <v-btn
                class="mr-4 mb-3"
                variant="outlined"
                color="primary"
                href="#projects"
              >
                Projects
              </v-btn>
              <v-btn
                class="mr-4 mb-3"
                variant="text"
                color="primary"
                to="/about"
              >
                About
              </v-btn>
            </div>
            
            <div class="d-flex social-links mb-6">
              <v-btn
                icon
                variant="text"
                class="mr-3"
                color="primary"
                href="https://www.linkedin.com/in/kevin-chu-072b7a211/"
                target="_blank"
              >
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
              <v-btn
                icon
                variant="text"
                class="mr-3"
                color="primary"
                href="https://github.com/chuk1123"
                target="_blank"
              >
                <v-icon>mdi-github</v-icon>
              </v-btn>
              <v-btn
                icon
                variant="text"
                class="mr-3"
                color="primary"
                href="https://www.instagram.com/chuk1123/"
                target="_blank"
              >
                <v-icon>mdi-instagram</v-icon>
              </v-btn>
            </div>
          </v-col>
          
          <v-col cols="12" md="6" class="d-flex justify-center fade-in delay-2">
            <div class="profile-img-container">
              <v-img
                height="350"
                width="350"
                contain
                eager
                src="/Kevin Sophomore.png"
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
        <h2 class="text-h3 text-primary font-weight-bold mb-6 fade-in">
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
        <h2 class="text-h3 text-primary font-weight-bold mb-6 fade-in">
          Research & Projects
        </h2>
        
        <v-row class="fade-in delay-1">
          <v-col v-for="(project, index) in projects" :key="index" cols="12" md="6" class="mb-8">
            <v-card class="card-hover project-card" height="100%">
              <div class="d-flex flex-nowrap overflow-hidden" style="height: 200px">
                <div v-for="(img, i) in project.image" :key="i" class="flex-grow-1 position-relative">
                  <v-img
                    :src="img"
                    height="200"
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
              
              <v-card-actions class="pa-4 pt-0">
                <v-btn
                  variant="text"
                  color="primary"
                  :href="project.link"
                  target="_blank"
                  size="small"
                >
                  <v-icon start>mdi-github</v-icon>
                  View Code
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
        <v-row class="fade-in">
          <v-col cols="12" md="8">
            <h2 class="text-h3 font-weight-bold mb-4">Interested in Collaboration?</h2>
            <p class="text-body-1 mb-6">
              I'm actively seeking research opportunities and academic collaborations.
              Whether you're looking for a dedicated research assistant or want to discuss potential projects in computer science and data science, I'd love to connect!
            </p>
            <v-btn
              color="primary"
              variant="outlined"
              href="mailto:chuk1123@berkeley.edu"
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
  I am a sophomore at UC Berkeley pursuing dual degrees in Computer Science and Data Science, with a strong academic record across core courses including Data Structures & Algorithms, Discrete Mathematics, and Principles of Data Science.
  
  My research interests lie in machine learning, algorithmic optimization, and computational methods for data analysis. I have hands-on experience with Python, C++, Java, and JavaScript, applying these skills to projects in artificial intelligence, competitive programming, and data science applications.
  
  I am actively seeking research opportunities to contribute to academic projects and further develop my expertise in computational sciences.
`

// Enhanced project data
const projects = [
  {
    title: "Financial Data Analysis Bot",
    subtitle: "Automated Financial Data Processing & Visualization",
    description: "A Python-based system for real-time financial data retrieval, processing, and visualization. Implements efficient data structures for time-series analysis and provides statistical insights through Discord integration. Demonstrates proficiency in API integration, data analysis, and user interface design.",
    technologies: ["Python", "Data Analysis", "APIs", "Statistical Visualization"],
    image: [
      "/Stock_Bot_QQQ_Example.jpeg",
      "/stock-bot.png",
    ],
    link: "https://github.com/chuk1123/stock_bot",
    demo: null,
  },
  {
    title: "Reinforcement Learning Snake AI",
    subtitle: "Deep Q-Network Game Agent",
    description: "An intelligent agent that learns to play the classic Snake game using Deep Q-Learning algorithms. Implements neural networks with experience replay and target networks to achieve optimal gameplay strategies. Demonstrates practical application of reinforcement learning techniques in game environments.",
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
