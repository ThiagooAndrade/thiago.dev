<script setup lang="ts">
import { inject, ref } from 'vue';
import Projects from '../components/Project.vue';
import { themeColor } from '../context/keys';
import { themeColorType } from '../types/Types';
import { projectsData } from '../data/ProjectsData';
import thiagoPhoto from '/Foto-Thiago.jpeg';
import TechStack from '../components/TechStack.vue';

const themeMode = ref(inject<themeColorType>(themeColor) as themeColorType);


function themeModeClass() {
    return {
        titleColor: themeMode.value.isDarkMode ? "text-gray-200" : "text-[#42446E]"
    }
}


</script>

<template>
  <main class="container p-4 md:px-8 lg:px-16">
    <section class="mt-20 flex flex-col-reverse gap-8 justify-between items-center sm:flex-row">
      <div class="flex flex-col gap-4">
        <pre :class="'whitespace-pre-line font-bold text-xl md:text-2xl font-sans ' + themeModeClass().titleColor">
          Olá 👋,
          Meu nome é
          <span class="bg-gradient-to-r from-blue-400 to-blue-700 text-transparent inline-block bg-clip-text">Thiago Andrade</span>
          e sou um desenvolvedor.
        </pre>
        <a href="/Curriculo-Thiago.docx" download="Curriculo-Thiago.docx">
          <button class="px-4 py-1 rounded-lg w-fit bg-purple-800 hover:opacity-90 duration-200 text-sm text-white flex items-center gap-1">Download CV <ion-icon class="w-4 h-4 animate-bounce" name="arrow-down-circle-outline"></ion-icon></button>
        </a>
      </div>
      <picture>
        <img class="rounded-full w-28 border-[3px] border-gray-500 md:w-36" :src="thiagoPhoto" alt="">
      </picture>
    </section>
    <section class="mt-20 flex flex-col gap-8 justify-center">
      <div class="text-center">
        <h3 :class="'font-bold text-xl mb-2  ' + themeModeClass().titleColor">My Tech Stack</h3>
        <p class="text-darkContent">tecnologias que tenho trabalhado recentemente</p>
      </div>
      <TechStack/>
    </section>
    <section class="mt-20">
      <!-- projects -->
      <div class="text-center">
        <h3 :class="'font-bold text-xl ' + themeModeClass().titleColor">Projects</h3>
      </div>
      <div class="mt-20 grid grid-flow-row place-items-center gap-10 md:grid-cols-2 xl:grid-cols-3">
        <Projects v-for="project in projectsData" 
          :key="project.title" 
          :title="project.title" 
          :description="project.description" 
          :img="project.img"
          :live-preview="project.livePreviewUrl"
          :github-url="project.githubUrl"
          :stack="project.stack"
        />
      </div>
    </section>
  </main> 
</template>