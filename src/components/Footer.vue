<script setup lang="ts">
import { inject, ref } from 'vue';
import { themeColor } from '../context/keys';
import { themeColorType } from '../types/Types';

const themeMode = ref(inject<themeColorType>(themeColor) as themeColorType);

function themeModeClass() {
    return {
        titleColor: themeMode.value.isDarkMode ? "text-gray-200" : "text-[#42446E]"
    }
}

</script>

<template>
  <div>
    
  </div>
</template>