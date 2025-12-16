<script setup>
import { useHead } from '@vueuse/head'
import Hero from '@/components/hero.vue'
import Beneficios from '@/components/beneficios.vue'
import Ponentes from '@/components/ponentes.vue'
import Temario from '@/components/temario.vue'

useHead({
  title: 'Sugar Reset GLP-1: Elimina el Azúcar, Protege Músculo y Transforma tu Metabolismo en 21 Días',
  meta: [
    {
      name: 'description',
      content: 'Únete al Reto Sugar Reset GLP-1 de 21 días. Aprende con expertos a eliminar tu dependencia del azúcar, proteger tu masa muscular y optimizar tu metabolismo. ¡Transforma tu salud sin efecto rebote!',
    },
    {
      name: 'keywords',
      content: 'reto 21 días, Sugar Reset, GLP-1, semaglutida, ozempic, dependencia del azúcar, eliminar antojos, transformar metabolismo, perder peso, proteger masa muscular, efectos secundarios GLP-1, dieta funcional, Nathaly Marcus',
    },
    { property: 'og:title', content: 'Sugar Reset GLP-1: Elimina el Azúcar, Protege Músculo y Transforma tu Metabolismo en 21 Días' },
    {
      property: 'og:description',
      content: 'Únete al Reto Sugar Reset GLP-1 de 21 días. Aprende con expertos a eliminar tu dependencia del azúcar, proteger tu masa muscular y optimizar tu metabolismo. ¡Transforma tu salud sin efecto rebote!',
    },
    { property: 'og:image', content: 'https://reset21dias.com/logo-isfmc.svg' },
    { property: 'og:url', content: 'https://reset21dias.com/' },
    { property: 'og:type', content: 'website' },

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Sugar Reset GLP-1: Elimina el Azúcar, Protege Músculo y Transforma tu Metabolismo en 21 Días' },
    { name: 'twitter:description', content: 'Únete al Reto Sugar Reset GLP-1 de 21 días. Aprende con expertos a eliminar tu dependencia del azúcar, proteger tu masa muscular y optimizar tu metabolismo. ¡Transforma tu salud sin efecto rebote!' },
    { name: 'twitter:image', content: 'https://reset21dias.com/logo-isfmc.svg' },
    { name: 'twitter:url', content: 'https://reset21dias.com/' },
  ],
})
</script>

<template>
  <Hero />
  <Beneficios />
  <Ponentes />
  <Temario />
</template>
