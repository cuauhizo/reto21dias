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

// Función para el botón inferior
const scrollToForm = () => {
  const element = document.getElementById('inscribete')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <HeroMaster />
  <section id="inscribete">
    <div class="container mx-auto px-4 py-4">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-y-6 lg:gap-x-12 items-center">
        <div class="flex flex-col col-start-3 col-span-8 gap-4 lg:gap-6">
          <div class="lg:max-w-[577px] lg:text-center lg:mx-auto">
            <p class="text-sky-950 text-3xl leading-9 lg:text-4xl lg:leading-10">
              Lo que vas a descubrir en esta
              <span class="font-black font-nexa-bold">Masterclass Gratuita:</span>
            </p>
          </div>
          <div class="grid grid-cols-8 lg:gap-4">
            <div class="bg-teal-50 p-4 my-0.5 rounded-2xl flex flex-col col-span-12 lg:col-span-4">
              <p class="text-sky-950 text-lg font-black font-nexa-bold leading-5">El Secreto del GLP-1:</p>
              <p class="text-base">Qué es esta hormona y cómo activarla naturalmente para silenciar el "ruido de comida" en tu cerebro.</p>
            </div>
            <div class="bg-teal-50 p-4 my-0.5 rounded-2xl flex flex-col col-span-12 lg:col-span-4">
              <p class="text-sky-950 text-lg font-black font-nexa-bold leading-5">Proteger y conservar tus músculos</p>
              <p class="text-base">Importancia de combinar ejercicio y nutrución.</p>
            </div>
            <div class="bg-teal-50 p-4 my-0.5 rounded-2xl flex flex-col col-span-12 lg:col-span-4">
              <p class="text-sky-950 text-lg font-black font-nexa-bold leading-5">Biohacking Metabólico:</p>
              <p class="text-base">Herramientas de nutrición funcional para mejorar tu sensibilidad a la insulina.</p>
            </div>
            <div class="bg-teal-50 p-4 my-0.5 rounded-2xl flex flex-col col-span-12 lg:col-span-4">
              <p class="text-sky-950 text-lg font-black font-nexa-bold leading-5">Propósitos 2026:</p>
              <p class="text-base">Cómo hacer que este sea, finalmente, el año en que logres tu peso ideal con salud y no castigándote.</p>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-12 lg:gap-x-12 items-center p-4 mt-8 rounded-2xl">
            <div class="flex flex-col col-span-12 lg:text-center">
              <p class="text-sky-950 text-2xl leading-6 mb-5">
                Aprende de la mano de
                <span class="font-black font-nexa-bold">Nathaly Marcus</span>
              </p>
              <p class="text-base">
                Nutrióloga Funcional, autora y pionera en bienestar integral. Con
                <span class="font-black font-nexa-bold">más de 25 años de experiencia,</span>
                Nathaly se ha especializado también en neurociencia, psicología transpersonal y epigenética, enfocada en salud mente-cuerpo y longevidad, ayudando a miles de personas a reprogramar su metabolismo.
                <span class="font-black font-nexa-bold">Su enfoque es construir salud.</span>
              </p>
            </div>
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
      <div class="grid grid-cols-1 md:grid-cols-12 gap-y-12 lg:gap-x-12">
        <div class="flex flex-col col-span-12 lg:col-start-3 lg:col-span-8 lg:mx-auto text-center items-center">
          <p class="text-sky-950 text-4xl font-black font-nexa-bold leading-10">¿Estás listo para resetear tu metabolismo?</p>
          <p class="text-lg">La ciencia ha avanzado. Tu cuerpo tiene la capacidad de sanar si le das las señales correctas. No dejes que otro año pase sintiéndote igual.</p>
          <p class="text-lg font-nexa-bold"><strong>Masterclass GRATUITA: 26 de enero, 7 PM (hora de CDMX)</strong></p>
          <a
            href="#inscribete"
            @click.prevent="scrollToForm"
            class="flex items-center justify-center gap-2 bg-teal-700 rounded-full shadow-[0px_0px_4px_0px_rgba(0,0,0,0.56)] font-nexa-bold text-lg text-white py-3 my-4 px-7 transition-all duration-500 w-fit border-2 border-white lg:pl-10 cursor-pointer hover:bg-teal-600 hover:scale-105">
            <span>Inscríbete y mejora tu vida</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
