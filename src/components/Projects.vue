<script setup lang="ts">
import { inject, ref } from 'vue';
import { themeColor, themeColorType } from '../context/keys';
import meuTempoImage from '/meutempo.png';

const themeMode = ref(inject<themeColorType>(themeColor) as themeColorType);

function themeModeClass() {
  return {
    titleColor: themeMode.value.isDarkMode ? "text-gray-200" : "text-[#42446E]",
    projectTitleColor: themeMode.value.isDarkMode ? "text-gray-200" : "text-black",
    projectBackgroundColor: themeMode.value.isDarkMode ? "bg-[#363636]" : "bg-light_mode",
    projectLinkColor: themeMode.value.isDarkMode ? "text-white" : "text-black",
    projectIconColor: themeMode.value.isDarkMode ? "white" : "black"
  }
}

</script>

<template>
      <div class="mt-20 grid grid-flow-row place-items-center md:grid-cols-2 xl:grid-cols-3">
        <div :class="'rounded-lg max-w-[250px] shadow-projectContainer shadow-black ' + themeModeClass().projectBackgroundColor">
          <picture>
            <img class="rounded-t-lg max-w-[250px] h-auto block" :src="meuTempoImage" alt="">
          </picture>
          <div class="p-4 flex flex-col gap-2">
            <h3 :class="'text-lg ' + themeModeClass().projectTitleColor">Meu tempo</h3>
            <p class="text-darkContent text-xs text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, deleniti.</p>
            <p :class="'text-xs ' + themeModeClass().titleColor">Tech stack: HTML, JAVASCRIPT, SASS, REACT</p>
            <div class="flex justify-between items-center mt-2">
              <span class="flex items-center gap-2">
                <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                  <path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z"
                  :fill="themeModeClass().projectIconColor"
                  />
                </svg>
                <a :class="'text-xs underline ' + themeModeClass().projectLinkColor" href="">Live Preview</a>
              </span>
              <span class="flex items-center justify-center gap-2">
                <svg width="20" height="20" viewBox="0 0 30 30" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M15 0C6.7125 0 0 6.7125 0 15C0 21.6375 4.29375 27.2437 10.2563 29.2313C11.0063 29.3625 11.2875 28.9125 11.2875 28.5188C11.2875 28.1625 11.2688 26.9813 11.2688 25.725C7.5 26.4188 6.525 24.8062 6.225 23.9625C6.05625 23.5312 5.325 22.2 4.6875 21.8438C4.1625 21.5625 3.4125 20.8687 4.66875 20.85C5.85 20.8313 6.69375 21.9375 6.975 22.3875C8.325 24.6562 10.4812 24.0187 11.3438 23.625C11.475 22.65 11.8688 21.9937 12.3 21.6187C8.9625 21.2437 5.475 19.95 5.475 14.2125C5.475 12.5813 6.05625 11.2313 7.0125 10.1813C6.8625 9.80625 6.3375 8.26875 7.1625 6.20625C7.1625 6.20625 8.41875 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6562 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1813C24.0188 11.2313 24.6 12.5625 24.6 14.2125C24.6 19.9688 21.0938 21.2437 17.7563 21.6187C18.3 22.0875 18.7688 22.9875 18.7688 24.3937C18.7688 26.4 18.75 28.0125 18.75 28.5188C18.75 28.9125 19.0312 29.3813 19.7812 29.2313C22.759 28.2259 25.3465 26.3121 27.1796 23.7592C29.0127 21.2063 29.9991 18.1429 30 15C30 6.7125 23.2875 0 15 0Z"
                    :fill="themeModeClass().projectIconColor" />
                </svg>
                <a :class="'text-xs underline ' + themeModeClass().projectLinkColor" href="">View Code</a>
              </span>
            </div>
          </div>
        </div>
      </div>
</template>