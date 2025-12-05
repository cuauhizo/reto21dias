<template>
  <section id="section1" class="container flex flex-wrap justify-items-end items-end min-h-lvh gap-12 py-[5rem] md:flex-nowrap md:justify-items-center xl:min-h-[695px]">
    <div class="w-full md:w-2/3" data-aos="fade-right" data-aos-anchor-placement="top-bottom">
      <h1 class="hero-text font-lemon-bold text-[2.244rem] md:text-[3.196rem] font-bold">Reto de 21 Días*</h1>
      <!-- <div class="mt-6 md:max-w-[497.23px]">
        <div class="grid grid-cols-9 gap-2">
            <a v-for="(sofipo, index) in sofipos"
              :key="sofipo.id"
              :href="sofipo.url"
              :aria-label="sofipo.alt"
              :data-aos-delay="index * 100"
              data-aos="flip-right"
              data-aos-duration="3000"
              data-aos-anchor-placement="top-bottom"
              target="_blank"
            >
              <img
                class="transition-all duration-300 hover:scale-110 object-contain"
                :src="sofipo.src"
                :alt="sofipo.alt"
                width="180"
                height="96"
                loading="lazy"
              />
            </a>
        </div>
      </div> -->

      <img
            src="@/assets/img/SugarResetGLP1.svg"
            alt="Logo convension"
            class="w-full"
            loading="lazy" />
    </div>
    <div class="space-y-6 md:space-y-8 w-full md:w-1/3" data-aos="fade-left">
      <h2 class="text-end leading-7">
        <span class="text-[1.246rem] font-lemon-light">Del </span>
        <span class="text-[2.244rem] font-lemon-bold">20 de enero al 9 de febrero</span>
        <span class="text-[1.246rem] font-lemon-light">*Dirigido a cualquier persona interesada en salud y bienestar así como para profesionales de la salud.</span>
      </h2>
    </div>
  </section>
</template>

<script setup>
  import { ref } from 'vue'
  import amextra from '@/assets/img/sofipos/amextra.png';
  import asp from '@/assets/img/sofipos/asp.png';
  import bbcd from '@/assets/img/sofipos/bbcd.png';
  import bienestar from '@/assets/img/sofipos/bienestar.png';
  import broxel from '@/assets/img/sofipos/broxel.png';
  import capital_activo from '@/assets/img/sofipos/capital_activo.png';
  import credicapital from '@/assets/img/sofipos/credicapital.png';
  import crediclub from '@/assets/img/sofipos/crediclub.png';
  import fincomun from '@/assets/img/sofipos/fincomun.png';
  import fin_amigo from '@/assets/img/sofipos/fin_amigo.png';
  import fondedora from '@/assets/img/sofipos/fondedora.png';
  import grensa from '@/assets/img/sofipos/grensa.png';
  import klar from '@/assets/img/sofipos/klar.png';
  import kubo from '@/assets/img/sofipos/kubo.png';
  import monte_de_piedad from '@/assets/img/sofipos/monte_de_piedad.png';
  import paso_seguro from '@/assets/img/sofipos/paso_seguro.png';
  import porvenir from '@/assets/img/sofipos/porvenir.png';
  import premu from '@/assets/img/sofipos/premu.png';
  import progressa from '@/assets/img/sofipos/progressa.png';
  import resuelve from '@/assets/img/sofipos/resuelve.png';
  import sofiexpress from '@/assets/img/sofipos/sofiexpress.png';
  import stori from '@/assets/img/sofipos/stori.png';
  import sumate from '@/assets/img/sofipos/sumate.png';
  import unagra from '@/assets/img/sofipos/unagra.png';
  import xepelin from '@/assets/img/sofipos/xepelin.png';

  const sofipos = ref([
    { id: 1, url: 'https://amextrafinanzas.com/', src: amextra, alt: 'Amextra Finanzas' },
    { id: 2, url: 'https://www.aspintegraopciones.com/fr/home/', src: asp, alt: 'ASP Integra Opciones' },
    { id: 3, url: 'https://bbdcdigital.com.mx/', src: bbcd, alt: 'BBDC Digital' },
    { id: 4, url: 'https://www.ahorrosbienestar.com/', src: bienestar, alt: 'Bienestar' },
    { id: 5, url: 'https://broxel.com/', src: broxel, alt: 'Broxel' },
    { id: 6, url: 'https://capitalactivo.com.mx/', src: capital_activo, alt: 'Capital Activo' },
    { id: 7, url: 'https://credicapital.com.mx/', src: credicapital, alt: 'Credi Capital' },
    { id: 8, url: 'https://www.crediclub.com/', src: crediclub, alt: 'CrediClub' },
    { id: 10, url: 'https://www.finamigo.com.mx/', src: fin_amigo, alt: 'Finamigo' },
    { id: 15, url: 'https://financieramontedepiedad.com.mx/', src: monte_de_piedad, alt: 'Financiera Monte de Piedad' },
    { id: 9, url: 'https://www.fincomun.com.mx/', src: fincomun, alt: 'Fincomún' },
    { id: 11, url: 'https://empresarial.fondeadora.com/', src: fondedora, alt: 'Fondeadora' },
    { id: 12, url: 'https://grensa.com/', src: grensa, alt: 'Grensa' },
    { id: 24, url: 'https://unagra.com.mx/', src: unagra, alt: 'Unagra' },
    { id: 13, url: 'https://www.klar.mx/', src: klar, alt: 'Klar' },
    { id: 14, url: 'https://www.kubofinanciero.com/', src: kubo, alt: 'Kubo Financiero' },
    { id: 16, url: 'https://www.pasoseguro.com.mx/', src: paso_seguro, alt: 'Paso Seguro' },
    { id: 17, url: 'https://porvenirsofipo.mx/', src: porvenir, alt: 'Porvenir SFP' },
    { id: 18, url: 'https://premo.mx/', src: premu, alt: 'Premo' },
    { id: 19, url: 'https://progressa.com.mx/', src: progressa, alt: 'Progressa' },
    { id: 20, url: 'https://resuelvetusfinanzas.com/', src: resuelve, alt: 'Resuelve' },
    { id: 21, url: 'https://sofiexpress.com.mx/home/', src: sofiexpress, alt: 'Sofi Express' },
    { id: 22, url: 'https://www.storicard.com/', src: stori, alt: 'Stori' },
    { id: 23, url: 'https://www.financierasumate.com.mx/', src: sumate, alt: 'Sumate' },
    { id: 25, url: 'https://xepelin.com/mx', src: xepelin, alt: 'Xepelin' },
  ])
</script>

<style scoped>
</style>