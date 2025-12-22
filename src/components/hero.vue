<script setup>
import { ref } from 'vue';
// Importamos los assets para asegurar que Vite los procese correctamente en el v-for
import iconCalendario from '@/assets/img/icon-calendario.svg';
import iconClases from '@/assets/img/icon-clases.svg';
import iconHorario from '@/assets/img/icon-horario.svg';

// Datos de las tarjetas (Fácil de editar en un solo lugar)
const infoCards = [
  {
    id: 1,
    label: 'Duración',
    text: '21 días del 20 de Enero al 9 de Febrero',
    icon: iconCalendario,
    alt: 'Icono calendario'
  },
  {
    id: 2,
    label: 'Clases virtuales',
    text: '20 de Enero, 27 de Enero y 3 de Febrero',
    icon: iconClases,
    alt: 'Icono clases'
  },
  {
    id: 3,
    label: 'Horario',
    text: '19 a 21 horas tiempo CDMX',
    icon: iconHorario,
    alt: 'Icono reloj'
  }
];

</script>

<template>
  <section 
    id="section1" 
    class="relative flex items-center justify-center overflow-hidden bg-hero mx-4 md:mx-6 rounded-[32px] md:rounded-[48px] mt-4 md:mt-12 min-h-[auto] py-12 md:py-0 lg:h-[824px]"
  >
    <div class="absolute inset-0 bg-violet-950 md:bg-violet-950/40 backdrop-blur-[6px] z-10"></div>

    <div class="relative z-20 text-white w-full h-full flex flex-col justify-center items-center mt-20 px-4 md:px-0 md:mt-24 md:mb-8 xl:mt-0">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 items-center">
          
          <div class="lg:col-span-6 flex flex-col gap-6">
            
            <div>
              <p class="text-lg font-black font-nexa-bold leading-tight mb-4 text-center md:text-left text-teal-300 md:text-white">
                21 días que van a cambiar tu vida para bien
              </p>

              <div class="w-fit mx-auto md:mx-0 py-3 px-6 bg-black/30 rounded-[32px] border border-white/25 backdrop-blur-md">
                <h1 class="text-white text-center md:text-left text-3xl md:text-4xl font-nexa-bold leading-tight">
                  Sugar Reset GLP1 <span class="block text-teal-400 md:text-white md:inline">en 21 días</span>
                </h1>
              </div>
            </div>

            <div class="w-full text-white/90">
              <p class="text-xl md:text-2xl font-thin font-Nexa leading-relaxed text-center md:text-left">
                <strong class="font-nexa-bold text-white">Durante 21 días</strong>, te daremos las herramientas para que 
                <strong class="font-nexa-bold text-white">reduzcas tu dependencia del azúcar</strong>, actives el poder del GLP1 
                (de manera natural o ya sea que lo uses), <strong class="font-nexa-bold text-white">protejas tu masa muscular</strong> 
                y crees un <strong class="font-nexa-bold text-white">estilo de vida sostenible, funcional</strong> y 
                <strong class="font-nexa-bold text-white">sin rebote</strong>.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div 
                v-for="card in infoCards" 
                :key="card.id"
                class="bg-black/30 rounded-2xl border border-white/25 backdrop-blur-md p-5 hover:bg-black/40 transition-colors duration-300"
              >
                <div class="flex flex-col gap-3 h-full">
                  <div class="flex gap-2 items-center ">
                    <img :src="card.icon" :alt="card.alt" class="w-5 h-5" loading="lazy">
                    <p class="text-[15px] tracking-wide">{{ card.label }}</p>
                  </div>
                  <div>
                    <p class="text-base md:text-lg font-nexa-bold leading-tight text-white">
                      {{ card.text }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-6 flex flex-col items-center">
            <img 
              src="@/assets/img/SugarResetGLP1.svg" 
              alt="Logo Reto Sugar Reset GLP1" 
              class="w-full max-w-[320px] md:max-w-[490px] h-auto drop-shadow-2xl mb-8 lg:mb-10 animate-fade-in-up" 
              width="490" 
              height="491" 
              fetchpriority="high" 
            />

            <a
  href="https://pay.hotmart.com/T103270473P?checkoutMode=10&bid=1765329714305&fromExitPopup=true"
  target="_blank"
  id="clic_header_desktop"
  rel="noopener noreferrer"
  class="flex items-center justify-center gap-2 bg-teal-700 rounded-full shadow-[0px_0px_4px_0px_rgba(0,0,0,0.56)] font-nexa-bold text-lg text-white py-2 px-1.5 pl-7 transition-all duration-500 w-fit border-2 border-white lg:pl-10"
>
  <span>¡Inscríbete aquí!</span>
  <img src="@/assets/img/icon-contacto.svg" class="pl-0 lg:ml-8 rounded-full w-9 md:w-auto" alt="icono contacto" aria-hidden="true" />
</a>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Animación suave de entrada para la imagen */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

/* Fondo responsivo si tienes la clase bg-hero definida en global */
.bg-hero {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* background-image: url(...); Asegúrate de tener esto en tu CSS global o config */
}
</style>