<script setup lang="ts">
import { inject, ref } from 'vue';
import { themeColorType } from '../types/Types';
import { themeColor } from '../context/keys';
import Education from '../components/Education.vue';


const themeMode = ref(inject<themeColorType>(themeColor) as themeColorType);

function themeModeClass() {
    return {
        titleColor: themeMode.value.isDarkMode ? "text-gray-200" : "text-[#42446E]",
        paragraphColor: themeMode.value.isDarkMode ? "text-[#aeb5b0]" : "text-[#666666]",
    }
}
</script>

<template>
  <main class="container p-4 md:px-8 lg:px-16 *:max-w-[700px] ">
    <section class="md:mt-10">
      <div>
        <h2 :class="'text-2xl font-bold md:text-3xl ' + themeModeClass().titleColor">About me</h2>
        <div class="mt-8">
          <p :class="'text-sm lg:text-base ' + themeModeClass().paragraphColor">
            Desenvolvendo com as seguintes tecnologias: ReactJs para front-end, NodeJs ou Java SpringBoot para back-end.
          </p>
          <p :class="'text-sm lg:text-base mt-4 ' + themeModeClass().paragraphColor">
            Tenho 18 anos, ingressei na faculdade e tive meu primeiro contato com programação a cerca de 1 ano, ainda não tive nenhuma experiência profissional, mas vou agarrar cada oportunidade.
          </p>
        </div>
      </div>
    </section>
    <section class="mt-10">
      <h2 :class="'text-2xl font-bold md:text-3xl ' + themeModeClass().titleColor">Education</h2>
      <div>  
       <Education title="Análise e Desenvolvimento de Sistemas" institution="Centro Universitário Estácio do Recife" period="Jan 2023 - July 2025"/>
      </div>
      <div>
        <Education title="Técnico em Redes de computadores" institution="Escola Técnica Estadual Governador Eduardo Campos" period="Jan 2020 - Des 2022"/>
      </div>
    </section>
  </main>
</template>