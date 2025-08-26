<template>
  <div>
    <!-- Experience Hero -->
    <section class="py-8">
      <v-container>
        <h1 class="text-h3 text-primary font-weight-bold mb-4 fade-in">
          Experience & Achievements
        </h1>
        <p class="text-body-1 text-secondary mb-6">
          Research, professional experience, and academic background
        </p>
      </v-container>
    </section>

    <!-- Professional Experience -->
    <section class="py-8">
      <v-container>
        <h2 class="text-h3 text-primary font-weight-bold mb-6 fade-in">
          Research & Professional Experience
        </h2>
        
        <div class="experience-list">
          <div v-for="(exp, index) in professionalExperience" :key="index" class="experience-item mb-6">
            <v-card class="pa-6 rounded-xl card-hover" height="100%">
              <div class="d-flex justify-space-between align-start mb-2">
                <div>
                  <h3 class="text-h6 font-weight-medium">{{ exp.title }}</h3>
                  <p class="text-body-2 text-primary">{{ exp.organization }}</p>
                </div>
                <span class="text-caption text-secondary">{{ exp.period }}</span>
              </div>
              <p class="text-body-2 mb-2">{{ exp.description }}</p>
              <div class="d-flex flex-wrap">
                <span
                  v-for="(skill, sIndex) in exp.skills"
                  :key="sIndex"
                  class="tech-tag"
                >
                  {{ skill }}
                </span>
              </div>
            </v-card>
          </div>
        </div>
      </v-container>
    </section>

    <!-- Academic Achievements -->
    <section class="py-8">
      <v-container>
        <h2 class="text-h3 text-primary font-weight-bold mb-6 fade-in">
          Academic Background
        </h2>
        
        <v-row>
          <v-col v-for="(achievement, index) in academicAchievements" :key="index" cols="12" md="6" class="mb-6">
            <v-card class="pa-4 rounded-xl card-hover" height="100%">
              <div class="d-flex align-start mb-2">
                <div class="flex-grow-1">
                  <h4 class="text-subtitle-1 font-weight-medium">{{ achievement.title }}</h4>
                  <p class="text-caption text-secondary">{{ achievement.context }}</p>
                </div>
                <span class="text-caption text-primary font-weight-medium">{{ achievement.metric }}</span>
              </div>
              <p class="text-body-2">{{ achievement.description }}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Technical Skills -->
    <section class="py-8">
      <v-container>
        <h2 class="text-h3 text-primary font-weight-bold mb-6 fade-in">
          Technical Skills
        </h2>
        
        <v-row>
          <v-col v-for="(category, index) in technicalSkills" :key="index" cols="12" md="4" class="mb-6">
            <v-card class="pa-4 rounded-xl card-hover" height="100%">
              <h4 class="text-subtitle-1 font-weight-medium mb-3">
                {{ category.category }}
              </h4>
              <div class="d-flex flex-wrap">
                <span
                  v-for="(skill, sIndex) in category.skills"
                  :key="sIndex"
                  class="tech-tag"
                >
                  {{ skill.name }}
                </span>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Contact CTA -->
    <section class="py-8">
      <v-container>
        <v-row class="justify-center fade-in">
          <v-col cols="12" md="8" class="text-center">
            <h2 class="text-h3 font-weight-bold mb-4">Ready to Collaborate?</h2>
            <p class="text-body-1 mb-6">
              Interested in research collaboration or internship opportunities? Feel free to reach out.
            </p>
            <div class="d-flex flex-wrap justify-center">
              <v-btn
                color="primary"
                variant="outlined"
                href="mailto:chuk1123@berkeley.edu"
                class="mr-3 mb-2"
              >
                <v-icon start>mdi-email</v-icon>
                Email
              </v-btn>
              <v-btn
                color="primary"
                variant="text"
                href="/Kevin Chu Resume August 2025.pdf"
                download
                class="mr-3 mb-2"
              >
                <v-icon start>mdi-file-download</v-icon>
                Resume
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script setup>
// Page title
useHead({
  title: 'Experience'
})

// Professional Experience
const professionalExperience = [
  {
    title: "Researcher",
    organization: "Computational Precision Health, UCSF and UC Berkeley",
    period: "May 2025 – Present",
    description: "Advised by Ahmed Alaa and Frances Dean. Determining long-term time-series cardiovascular disease risk in Immune Checkpoint Inhibitor treated patients using Deep Learning for ECGs. Working on cutting-edge applications of AI in precision medicine.",
    skills: ["Deep Learning", "Time-Series Analysis", "Medical AI", "ECG Analysis", "PyTorch"],
    icon: "mdi-heart-pulse"
  },
  {
    title: "Researcher",
    organization: "Berkeley AI Research (BAIR)",
    period: "May 2025 – Present",
    description: "Berkeley Speech Group, advised by Gopala Anumanchipalli and Akshat Gupta. Research focus on Reasoning Models and Chain of Thought Faithfulness in large language models, contributing to fundamental AI research.",
    skills: ["LLMs", "Reasoning Models", "Chain of Thought", "AI Research", "Python"],
    icon: "mdi-brain"
  },
  {
    title: "Machine Learning Software Engineering Intern",
    organization: "Google OSS",
    period: "Aug 2024 – Present",
    description: "Contribute to Google's open-source 'net/http' module, improving performance through C++ multithreading optimizations. Build and benchmark machine learning-based performance models for network throughput in Linux VM environments. Used internal Google development workflows and Linux networking tools for large-scale testing.",
    skills: ["C++", "Machine Learning", "Performance Optimization", "Linux", "Multithreading"],
    icon: "mdi-google"
  },
  {
    title: "Data Science Researcher",
    organization: "COSMOS @ UCI",
    period: "Jul 2023 – Aug 2023",
    description: "Led a statistical & ML study on Alzheimer's disease, analyzing effect of physical factors on gray-matter-to-intracranial-volume ratio. Employed R and Python (scikit-learn, tidyverse) for preprocessing, modeling, and visualization on biomedical datasets.",
    skills: ["R", "Python", "Biomedical Data", "Statistical Analysis", "Machine Learning"],
    icon: "mdi-school"
  },
  {
    title: "Technology Officer",
    organization: "LingoX (Volunteer)",
    period: "Apr 2023 – Aug 2023",
    description: "Developed and maintained organization website using Vue.js, focusing on responsive UI/UX (lingox.org). Collaborated with content team to deploy new features and analytics.",
    skills: ["Vue.js", "Web Development", "UI/UX", "Team Collaboration"],
    icon: "mdi-web"
  },
  {
    title: "Discord Bots Developer",
    organization: "Fiverr (Freelance)",
    period: "Jan 2022 – Present",
    description: "Designed and developed 10+ custom Discord bots for clients using Python and Pycord, automating tasks such as moderation, web scraping, data tracking, and alerts. Integrated Pandas for data processing and delivered scalable, user-friendly interfaces.",
    skills: ["Python", "Pycord", "Pandas", "API Integration", "Client Management"],
    icon: "mdi-robot"
  }
]

// Academic Achievements
const academicAchievements = [
  {
    title: "UC Berkeley",
    context: "Computer Science & Data Science",
    description: "4.0 GPA • Coursework: CS 61A/61B (A), CS 70 (A), Data 100 (A+), Math 53/56 (A+)",
    metric: "4.0 GPA",
    icon: "mdi-school"
  },
  {
    title: "USACO Gold",
    context: "Competitive Programming",
    description: "Achieved Gold Division in USA Computing Olympiad (December 2022)",
    metric: "Gold Level",
    icon: "mdi-trophy"
  },
  {
    title: "Northwood High School",
    context: "High School Graduate",
    description: "4.43/4.0 weighted GPA, 4.0/4.0 unweighted • 9 AP courses",
    metric: "4.43 GPA",
    icon: "mdi-star"
  }
]

// Technical Skills
const technicalSkills = [
  {
    category: "Programming Languages",
    icon: "mdi-code-tags",
    skills: [
      { name: "Python", level: 95 },
      { name: "C++", level: 85 },
      { name: "Java", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "SQL", level: 75 }
    ]
  },
  {
    category: "ML & AI Frameworks",
    icon: "mdi-brain",
    skills: [
      { name: "PyTorch", level: 90 },
      { name: "TensorFlow/Keras", level: 85 },
      { name: "scikit-learn", level: 90 },
      { name: "vLLM", level: 75 },
      { name: "Pandas/NumPy", level: 95 }
    ]
  },
  {
    category: "Web & Development Tools",
    icon: "mdi-hammer-wrench",
    skills: [
      { name: "Vue.js/React.js", level: 85 },
      { name: "Git/GitHub", level: 90 },
      { name: "Docker", level: 80 },
      { name: "Linux", level: 85 },
      { name: "Flask/Django", level: 80 }
    ]
  }
]
</script>

<style scoped>
.experience-list {
  max-width: 100%;
}

.experience-item {
  position: relative;
}
</style>
