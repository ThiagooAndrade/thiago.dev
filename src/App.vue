<script setup lang="ts">
import { provide, ref} from 'vue';
import { RouterView } from 'vue-router';
import { themeColor } from './context/keys';
import Header from './components/Header.vue';

const isDarkMode = ref(true);

function bodyClass() {
  return isDarkMode.value ? 'bg-dark_mode' : 'bg-light_mode'; 
}

console.log("isDarkMode: " + isDarkMode.value)

function toggleThemeMode() {
  isDarkMode.value = !isDarkMode.value;
  console.log("isDarkMode: " + isDarkMode.value)  
}

provide(themeColor, {
  isDarkMode,
  toggleThemeMode
})
</script>

<template>
  <main :class="'w-full h-full overflow-hidden  ' + bodyClass()">
    <Header :is-dark-mode="isDarkMode"/>
    <button class="absolute top-0 bg-red-800 p-1 rounded-md" @click="toggleThemeMode">theme</button>
    <RouterView :is-dark-mode="isDarkMode"/>
  </main>
</template>