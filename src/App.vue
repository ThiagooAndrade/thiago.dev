<script setup lang="ts">
import { ref, computed } from 'vue';
import Header from './components/Header.vue';
import Home from './routes/Home.vue';
import { routes } from './routes/Router';

  
const isDarkMode = ref(false);

function bodyClass() {
  return isDarkMode.value ? 'bg-dark_mode' : 'bg-light_mode'; 
}

console.log("isDarkMode: " + isDarkMode.value)

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value;
}

const currentPath = ref(window.location.hash);

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash;
});

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || Home;
})

</script>

<template>
  <main :class="'w-full h-full ' + bodyClass()">
    <Header/>
    <component :is="currentView"/>
  </main>
</template>