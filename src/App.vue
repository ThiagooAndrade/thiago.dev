<script setup lang="ts">
import { provide, ref} from 'vue';
import { RouterView } from 'vue-router';
import { themeColor } from './context/keys';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

const isDarkMode = ref(true);

function bodyClass() {
  return isDarkMode.value ? 'bg-dark_mode' : 'bg-light_mode'; 
}

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
    <Header />
    <RouterView/>
    <Footer/>
  </main>
</template>