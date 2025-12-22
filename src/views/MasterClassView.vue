<script setup>
import { useHead } from '@vueuse/head'

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
  <div class="min-h-screen bg-gradient-to-br from-violet-950 to-[#3a3a82] flex flex-col items-center justify-center p-6 text-white text-center">
    <div class="max-w-4xl w-full bg-white/10 backdrop-blur-md rounded-[40px] border border-white/20 p-8 md:p-12 shadow-2xl">
      <img src="@/assets/img/logo-isfmc.svg" alt="Logo ISFMC" class="w-20 mx-auto mb-8" />

      <h1 class="text-3xl md:text-5xl font-nexa-bold mb-6 text-teal-300">Bienvenido a la Master Class</h1>

      <p class="text-lg md:text-xl font-nexa mb-10 max-w-2xl mx-auto">Prepárate para descubrir cómo transformar tu metabolismo. Disfruta el contenido exclusivo que hemos preparado para ti.</p>

      <div class="w-full aspect-video bg-black/50 rounded-2xl mb-10 flex items-center justify-center border border-white/10 shadow-inner">
        <span class="text-white/50 font-nexa">Aquí iría tu reproductor de video (YouTube/Vimeo)</span>
      </div>

      <router-link to="/" class="inline-flex items-center gap-3 bg-teal-600 hover:bg-teal-500 text-white font-nexa-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-teal-500/40 hover:-translate-y-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
        Regresar al Inicio
      </router-link>
    </div>

    <p class="mt-8 text-sm text-white/40 font-nexa">© {{ new Date().getFullYear() }} Instituto de Salud Funcional Mente - Cuerpo.</p>
  </div>
</template>
