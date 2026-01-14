<script setup>
import { useHead } from '@vueuse/head'
import HeroMaster from '@/components/heroMaster.vue'
import NewsletterForm from '@/components/NewsletterForm.vue'

// SEO específico para esta página
useHead({
  title: 'Master Class Exclusiva | Sugar Reset GLP-1',
  meta: [
    { name: 'description', content: 'Accede a nuestra Master Class exclusiva y aprende los fundamentos del método Sugar Reset.' },
    { name: 'robots', content: 'noindex, nofollow' }, // Opcional: Si no quieres que Google indexe esta página "oculta"
  ],
})
</script>

<template>
  <HeroMaster />
  <section>
    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-y-12 lg:gap-x-12 items-center">
        <div class="flex flex-col col-span-12 lg:col-span-7">
          <p class="text-teal-700 text-4xl font-black font-nexa-bold leading-10">Lo que vas a descubrir en esta Masterclass Gratuita:</p>
          <div class="p-4 my-2 rounded-2xl shadow-[0px_0px_24px_0px_rgba(0,0,0,0.16)] border-2 md:p-8">
            <p class="text-teal-700 text-center md:text-left text-xl font-nexa-bold leading-tight">El Secreto del GLP-1:</p>
            <p class="text-base">Qué es esta hormona y cómo activarla naturalmente para silenciar el "ruido de comida" en tu cerebro.</p>
          </div>

          <div class="p-4 my-2 rounded-2xl shadow-[0px_0px_24px_0px_rgba(0,0,0,0.16)] border-2 md:p-8">
            <p class="text-teal-700 text-center md:text-left text-xl font-nexa-bold leading-tight">Proteger y conservar tus músculos</p>
            <p class="text-base">Importancia de combinar ejercicio y nutrución.</p>
          </div>

          <div class="p-4 my-2 rounded-2xl shadow-[0px_0px_24px_0px_rgba(0,0,0,0.16)] border-2 md:p-8">
            <p class="text-teal-700 text-center md:text-left text-xl font-nexa-bold leading-tight">Biohacking Metabólico:</p>
            <p class="text-base">Herramientas de nutrición funcional para mejorar tu sensibilidad a la insulina.</p>
          </div>
          <div class="p-4 my-2 rounded-2xl shadow-[0px_0px_24px_0px_rgba(0,0,0,0.16)] border-2 md:p-8">
            <p class="text-teal-700 text-center md:text-left text-xl font-nexa-bold leading-tight">Propósitos 2026:</p>
            <p class="text-base">Cómo hacer que este sea, finalmente, el año en que logres tu peso ideal con salud y no castigándote.</p>
          </div>
        </div>
        <div class="flex flex-col col-span-12 lg:col-span-5">
          <div class="my-8 rounded-2xl shadow-[0px_0px_24px_0px_rgba(0,0,0,0.16)] border-2">
            <NewsletterForm />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-12 lg:gap-x-12 items-center p-4 my-2 rounded-2xl shadow-[0px_0px_24px_0px_rgba(0,0,0,0.16)] border-2 md:p-8">
        <div class="flex flex-col col-span-12">
          <p class="text-teal-700 text-4xl font-black font-nexa-bold leading-10">Aprende de la mano de Nathaly Marcus</p>
          <p class="text-base">
            Nutrióloga Funcional, autora y pionera en bienestar integral. Con más de 25 años de experiencia, Nathaly se ha especializado también en neurociencia, psicología transpersonal y epigenética, enfocada en salud mente-cuerpo y longevidad,
            ayudando a miles de personas a reprogramar su metabolismo. Su enfoque es construir salud.
          </p>
        </div>
        <div class="flex flex-col col-span-12 lg:col-span-7">
          <!-- <div class="p-4 my-2 rounded-2xl shadow-[0px_0px_24px_0px_rgba(0,0,0,0.16)] border-2 md:p-8">
            <p class="text-teal-700 text-center md:text-left text-xl font-nexa-bold leading-tight">El Secreto del GLP-1:</p>
          </div> -->
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-y-12 lg:gap-x-12">
        <div class="flex flex-col col-span-12 lg:col-start-3 lg:col-span-8 lg:mx-auto text-center items-center">
          <p class="text-teal-700 text-4xl font-black font-nexa-bold leading-10">¿Estás listo para resetear tu metabolismo?</p>
          <p class="text-lg">La ciencia ha avanzado. Tu cuerpo tiene la capacidad de sanar si le das las señales correctas. No dejes que otro año pase sintiéndote igual.</p>
          <p class="text-lg font-nexa-bold"><strong>Masterclass GRATUITA: 27 de enero, 7 PM (hora de CDMX)</strong></p>
          <a
            href="#"
            target="_blank"
            id="clic_header_desktop"
            rel="noopener noreferrer"
            class="flex items-center justify-center gap-2 bg-teal-700 rounded-full shadow-[0px_0px_4px_0px_rgba(0,0,0,0.56)] font-nexa-bold text-lg text-white py-3 my-4 px-7 transition-all duration-500 w-fit border-2 border-white lg:pl-10">
            <span>Inscríbete y mejora tu vida</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
