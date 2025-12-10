<script setup>
import { useHead } from '@vueuse/head'
import Hero from '@/components/hero.vue'
import Beneficios from '@/components/beneficios.vue'
import Ponentes from '@/components/ponentes.vue'
import Temario from '@/components/temario.vue'

useHead({
  title: 'Reto 21 Días - Instituto de Salud Funcional',
  meta: [
    {
      name: 'description',
      content: 'Únete al reto de 21 días para transformar tu salud...',
    },
    {
      name: 'keywords',
      content: '',
    },
    { property: 'og:title', content: 'Reto 21 Días - Instituto de Salud Funcional' },
    {
      property: 'og:description',
      content: 'Únete al reto de 21 días para transformar tu salud...',
    },
    { property: 'og:image', content: 'https://reto21dias.com/logo-isfmc.svg' },
    { property: 'og:url', content: 'https://reto21dias.com/' },
    { property: 'og:type', content: 'website' },

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Reto 21 Días - Instituto de Salud Funcional' },
    { name: 'twitter:description', content: 'Únete al reto de 21 días para transformar tu salud...' },
    { name: 'twitter:image', content: 'https://reto21dias.com/logo-isfmc.svg' },
    { name: 'twitter:url', content: 'https://reto21dias.com/' },
  ],
})
</script>

<template>
  <Hero />
  <Beneficios />
  <Ponentes />
  <Temario />
</template>
