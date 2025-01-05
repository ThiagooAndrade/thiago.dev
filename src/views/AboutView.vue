<script setup lang="ts">
import AboutInfo from '../components/AboutInfo.vue';

</script>

<template>
  <main class="container p-4 md:px-8 lg:px-16 *:max-w-[700px] ">
    <section class="md:mt-10">
      <div>
        <h2 class="text-xl font-bold md:text-3xl text-[#42446E] dark:text-gray-200">About me</h2>
        <div class="mt-8">
          <p class="text-sm lg:text-base text-[#666666] dark:text-[#aeb5b0]">
            Desenvolvendo com as seguintes tecnologias: ReactJs para front-end, NodeJs ou Java SpringBoot para back-end.
          </p>
          <p class="text-sm lg:text-base mt-4 text-[#666666] dark:text-[#aeb5b0]">
            Profissional de TI com experiência em desenvolvimento Full Stack e habilidades em comunicação e trabalho em equipe, buscando oportunidades para aplicar e expandir meus conhecimentos em projetos desafiadores.
          </p>
        </div>
      </div>
    </section>
    <section class="mt-10">
      <h2 class="text-xl font-bold md:text-3xl text-[#42446E] dark:text-gray-200">Education</h2>
      <div>  
       <AboutInfo 
          title="Análise e Desenvolvimento de Sistemas"
          institution="Centro Universitário Estácio do Recife"
          period="Jan 2023 - July 2025"
        />
      </div>
      <div>
        <AboutInfo
          title="Técnico em Redes de computadores"
          institution="Escola Técnica Estadual Governador Eduardo Campos"
          period="Jan 2020 - Des 2022"
          />
      </div>
    </section>
    <section class="mt-10">
      <h2 class="text-xl font-bold md:text-3xl text-[#42446E] dark:text-gray-200">Experience</h2>
      <div>
        <AboutInfo 
          title="Start"
          institution="Rede Cidadã/Accenture"
          period="Sep 2024 - Dez 2024"
        />
      </div>
    </section>
    <section class="mt-10">
      <h2 class="text-xl font-bold md:text-3xl text-[#42446E] dark:text-gray-200">Certification</h2>
      <div>
        <AboutInfo 
          title="Start: Capacitação em JAVA" 
          institution="Rede Cidadã/Accenture" 
          duration="240 horas"
        />
        <AboutInfo 
          title="Java Completo Programação Orientada a Objetos + Projetos" 
          institution="Udemy" 
          duration="54.5 horas"
        />
      </div>
      <div>
        <AboutInfo 
          title="Oficina de Preparação Integral para o Mundo do Trabalho" 
          institution="Rede Cidadã" 
          duration="36 horas"
        />
      </div>
    </section>
  </main>
</template>