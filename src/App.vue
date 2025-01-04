<script setup lang="ts">
import { provide, ref} from 'vue';
import { RouterView } from 'vue-router';
import { themeColor } from './context/keys';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

const isDarkMode = ref(true);

function toggleThemeMode() {
  document.documentElement.classList.toggle('dark'); // Ativa o modo escuro
  isDarkMode.value = !isDarkMode.value;
  console.log("isDarkMode: " + isDarkMode.value)  
}

provide(themeColor, {
  isDarkMode,
  toggleThemeMode
})
</script>

<template>
  <main class="w-full h-full overflow-hidden bg-light_mode dark:bg-dark_mode">
    <Header />
    <RouterView/>
    <Footer/>
  </main>
</template>