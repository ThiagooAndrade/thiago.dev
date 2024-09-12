<script setup lang="ts">
import { inject, ref } from 'vue';
import { themeColorType } from '../types/Types';
import { themeColor } from '../context/keys';

const props = defineProps<{
  title: string;
  institution: string;
  period: string;
}>();

const themeMode = ref(inject<themeColorType>(themeColor) as themeColorType);

function themeModeClass() {
    return {
        titleColor: themeMode.value.isDarkMode ? "text-gray-200" : "text-[#42446E]",
        paragraphColor: themeMode.value.isDarkMode ? "text-[#aeb5b0]" : "text-[#666666]",
    }
}
</script>

<template>
  <div class="mt-8">
    <h3 :class="'text-sm md:text-base ' + themeModeClass().paragraphColor">{{ props.title }}</h3>
    <div :class="'mt-4 flex justify-between items-center ' + themeModeClass().paragraphColor">
      <span class="text-xs md:text-sm">
      <ion-icon name="business-outline"></ion-icon>
        {{ props.institution }}
      </span>
      <span class=" text-xs md:text-sm">
        <ion-icon name="calendar-outline"></ion-icon>
       {{ props.period }}
      </span>
    </div>
    <span class="block mt-3 h-[1px] bg-gray-500"></span>
  </div>
</template>