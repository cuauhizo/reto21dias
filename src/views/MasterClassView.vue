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
  <section>
    <div class="container mx-auto lg:px-4 py-4">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-y-6 lg:gap-x-12 items-center">
        <div class="flex flex-col col-start-3 col-span-8 gap-4 lg:gap-6">
          <div class="lg:max-w-[577px] lg:text-center lg:mx-auto">
            <p class="text-sky-950 text-3xl leading-9 lg:text-4xl lg:leading-10">
              Lo que vas a descubrir en esta
              <span class="font-black nunito-sans-bold">Masterclass Gratuita:</span>
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
          <div class="grid grid-cols-1 md:grid-cols-12 lg:gap-x-12 items-center">
            <div class="flex flex-col col-span-12 lg:text-center">
              <p class="text-sky-950 text-2xl leading-6 mb-5">
                Aprende de la mano de
                <span class="font-black nunito-sans-bold">Nathaly Marcus</span>
              </p>
              <p class="text-base">
                Nutrióloga Funcional, autora y pionera en bienestar integral. Con
                <span class="font-black nunito-sans-bold">más de 25 años de experiencia,</span>
                Nathaly se ha especializado también en neurociencia, psicología transpersonal y epigenética, enfocada en salud mente-cuerpo y longevidad, ayudando a miles de personas a reprogramar su metabolismo.
                <span class="font-black nunito-sans-bold">Su enfoque es construir salud.</span>
              </p>
            </div>
          </div>
        </div>
        <div id="inscribete" class="flex flex-col col-span-12 lg:col-start-4 lg:col-span-6">
          <div class="lg:my-8 rounded-2xl">
            <NewsletterForm />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
