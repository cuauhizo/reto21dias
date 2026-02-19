<script setup>
import HeroVariantB from '@/components/heroVariantB.vue'
</script>

<template>
  <HeroVariantB />
  <section>
    <div class="container mx-auto lg:px-4 py-4">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-y-6 lg:gap-x-12 items-center">
        <div class="flex flex-col col-start-3 col-span-8 gap-4 lg:gap-6">
          <div class="lg:max-w-[577px] lg:text-center lg:mx-auto">
            <p class="text-sky-950 text-3xl leading-9 lg:text-4xl lg:leading-10">
              Lo que vas a descubrir en este
              <span class="font-black nunito-sans-bold">Curso</span>
            </p>
          </div>
          <div class="grid grid-cols-8 lg:gap-4">
            <div class="bg-teal-50 p-4 my-0.5 rounded-2xl flex flex-col col-span-12 lg:col-span-4">
              <p class="text-sky-950 text-lg font-black nunito-sans-bold leading-5">El Secreto del GLP-1:</p>
              <p class="text-base">Qué es esta hormona y cómo activarla naturalmente para silenciar el "ruido de comida" en tu cerebro.</p>
            </div>
            <div class="bg-teal-50 p-4 my-0.5 rounded-2xl flex flex-col col-span-12 lg:col-span-4">
              <p class="text-sky-950 text-lg font-black nunito-sans-bold leading-5">Proteger y conservar tus músculos</p>
              <p class="text-base">Importancia de combinar ejercicio y nutrución.</p>
            </div>
            <div class="bg-teal-50 p-4 my-0.5 rounded-2xl flex flex-col col-span-12 lg:col-span-4">
              <p class="text-sky-950 text-lg font-black nunito-sans-bold leading-5">Biohacking Metabólico:</p>
              <p class="text-base">Herramientas de nutrición funcional para mejorar tu sensibilidad a la insulina.</p>
            </div>
            <div class="bg-teal-50 p-4 my-0.5 rounded-2xl flex flex-col col-span-12 lg:col-span-4">
              <p class="text-sky-950 text-lg font-black nunito-sans-bold leading-5">Propósitos 2026:</p>
              <p class="text-base">Cómo hacer que este sea, finalmente, el año en que logres tu peso ideal con salud y no castigándote.</p>
            </div>
          </div>
        </div>
        <div id="inscribete" class="flex flex-col col-span-12 lg:col-start-4 lg:col-span-6">
          <div class="lg:my-8 rounded-2xl">
            <div
              id="section5"
              class="flex flex-col items-center justify-center text-center gap-3 md:gap-4 bg-white/90 rounded-[40px] shadow-[4px_4px_16px_0px_rgba(60,60,60,0.08)] border-2 border-teal-500 p-8 lg:p-12 w-full max-w-[505px] lg:max-h-[908px] mx-auto lg:mt-4">
              <h3 class="text-teal-700 text-3xl lg:text-4xl font-nexa-bold leading-tight">Pago único</h3>
              <div class="flex flex-col items-center gap-1">
                <div class="flex items-center text-teal-700 font-nexa">
                  <span class="text-xl font-thin mr-1">$</span>
                  <span class="text-6xl font-black font-nexa-bold tracking-tight">2,500.</span>
                  <sup class="text-3xl font-black font-nexa-bold top-[-0.5em]">00</sup>
                  <span class="text-xl font-thin ml-2">MXN</span>
                </div>
                <span class="text-zinc-700 text-xs font-thin font-nexa">
                  <span>Paga con tarjeta de crédito o débito</span>
                </span>
              </div>

              <img src="@/assets/img/SugarResetGLP1.svg" alt="Sugar Reset Logo" class="w-[60px] h-auto object-contain" loading="lazy" />
              <ul class="list-disc pl-5 space-y-1 text-start text-base text-zinc-700">
                <li class="flex items-center">
                  <img class="flex-none w-6 h-full mr-2 -rotate-90" src="@/assets/img/toggler.svg" />
                  Certificado al aprobar el curso
                </li>
                <li class="flex items-center">
                  <img class="flex-none w-6 h-full mr-2 -rotate-90" src="@/assets/img/toggler.svg" />
                  Certificado al aprobar el curso
                </li>
                <li class="flex items-center">
                  <img class="flex-none w-6 h-full mr-2 -rotate-90" src="@/assets/img/toggler.svg" />
                  Acceso completo al curso
                </li>
                <li class="flex items-center">
                  <img class="flex-none w-6 h-full mr-2 -rotate-90" src="@/assets/img/toggler.svg" />
                  12 meses de acceso
                </li>
                <li class="flex items-center">
                  <img class="flex-none w-6 h-full mr-2 -rotate-90" src="@/assets/img/toggler.svg" />
                  Pago único
                </li>
                <li class="flex items-center">
                  <img class="flex-none w-6 h-full mr-2 -rotate-90" src="@/assets/img/toggler.svg" />
                  Pago a meses sin intereses, solo en México
                </li>
              </ul>
              <a
                href="https://isfmc.app/course/60/purchase"
                target="_blank"
                id="clic_temario"
                class="flex items-center gap-2 bg-gradient-to-r from-violet-950 to-violet-700 rounded-3xl shadow-[0px_0px_4px_0px_rgba(0,0,0,0.56)] font-nexa-bold text-lg text-white py-2 px-1.5 pl-10 transition-all duration-500">
                <span style="vertical-align: inherit"><span style="vertical-align: inherit">¡Inscríbete aquí!</span></span>
                <i><img src="@/assets/img/icon-contacto.svg" class="pl-4 lg:pl-8" alt="icono contacto" /></i>
              </a>
              <p class="max-w-[320px] text-zinc-700 text-xs font-thin font-nexa leading-tight">Consultar bancos participantes.</p>
              <img src="@/assets/img/pago.png" alt="Métodos de pago" class="w-[320px] h-auto object-contain" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
