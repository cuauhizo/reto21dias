<script setup>
import { computed } from 'vue'; // <-- 1. Importa computed
import { ponentes } from '@/data/ponentes.js';

const getImageUrl = (imageName) => {
  return new URL(`/src/assets/img/ponentes/${imageName}`, import.meta.url).href;
};

// 2. Crea una propiedad computada para verificar si el número es impar
const isPonentesCountOdd = computed(() => {
  return ponentes.length % 2 !== 0;
});
</script>

<template>
  <section id="section3" class="py-10 md:py-20 px-4">
    <div class="mx-auto flex max-w-7xl flex-col items-start gap-10 md:flex-row">
      <div class="w-full md:sticky md:top-20 md:w-1/2 md:order-2" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <h2 class="titulo-seccion">Ponentes</h2>
        <p class="titulo">Personas expertas en el sector de las finanzas populares</p>
        <p>Explora las visiones y trayectorias de los líderes del sector financiero que nos compartirán su experiencia.</p>
      </div>
      <div class="flex flex-wrap justify-center gap-4 mt-5 w-full min-w-0 flex-1 md:mt-0 md:order-1" data-aos="fade-down" data-aos-anchor-placement="top-bottom">
        <div
          v-for="(ponente, index) in ponentes"
          :key="ponente.id"
          :id="`ponente-${ponente.id}`"
          class="max-w-[230px] rounded-2xl bg-perfil p-6 text-center shadow-lg flex flex-col justify-between"
          :class="{
            'transform xl:-translate-y-5': index % 2 === 0,
            'transform xl:translate-y-5': index % 2 !== 0
          }"
        >
          <h3 class="text-sm">{{ ponente.nombre }}</h3>
          <img
            class="mx-auto mt-4 mb-4 h-32 w-32 rounded-full shadow-lg"
            :src="getImageUrl(ponente.imagen)"
            :alt="`Foto de ${ponente.nombre}`"
            loading="lazy"
          />
          <p class="mt-8 text-xs font-normal">
            {{ ponente.descripcion }}
          </p>
          <a
            :href="ponente.enlace"
            target="_blank"
            rel="noopener noreferrer"
            class="flex gap-2 rounded-full transition-all mt-2 duration-500 font-lemon-normal text-xs justify-center items-center w-full bg-gradient-to-r from-[#4D008C] to-[#C028B9] hover:bg-gradient-to-br px-8 py-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" >
              <path d="M9 4H3.5C3.10218 4 2.72064 4.15804 2.43934 4.43934C2.15804 4.72064 2 5.10218 2 5.5V12.5C2 12.8978 2.15804 13.2794 2.43934 13.5607C2.72064 13.842 3.10218 14 3.5 14H10.5C10.8978 14 11.2794 13.842 11.5607 13.5607C11.842 13.2794 12 12.8978 12 12.5V7M5 11L14 2M14 2H10.5M14 2V5.5" stroke="#1DC270" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Ver Semblanza
          </a>
        </div>
         <div v-if="isPonentesCountOdd" class="max-w-[230px] flex-auto hidden xl:block"></div>
      </div>
    </div>
  </section>
</template>

<style>

</style>