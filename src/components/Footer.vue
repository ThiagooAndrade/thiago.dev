<script setup lang="ts">
import { inject, ref } from 'vue';
import { themeColor } from '../context/keys';
import { themeColorType } from '../types/Types';

const themeMode = ref(inject<themeColorType>(themeColor) as themeColorType);

function themeModeClass() {
    return {
        paragraphColor: themeMode.value.isDarkMode ? "text-gray-200" : "text-black"
    }
}

</script>

<template>
  <section class="mt-20">
    <div class="container px-4 md:px-8 lg:px-16">
      <span class="block h-[1px] bg-gray-500"></span>
      <div class="py-4 text-end">
        <p :class="themeModeClass().paragraphColor">Desenvolvido por Thiago 2024</p></div>
    </div>
  </section>
</template>