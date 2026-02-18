<script setup>
import { useHead } from '@vueuse/head'
import { ref, onMounted, shallowRef } from 'vue'

// Importamos las dos versiones completas
import HomeVariantA from '@/components/home/HomeVariantA.vue' // Diseño Original
import HomeVariantB from '@/components/home/HomeVariantB.vue' // Diseño Nuevo (Challenger)

// Usamos shallowRef para componentes (es más eficiente en rendimiento que ref)
const currentComponent = shallowRef(null)
const isLoading = ref(true)

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

onMounted(() => {
  if (typeof window !== 'undefined') {
    // 1. Persistencia: Checar si el usuario ya tiene una versión asignada
    const storedVariant = sessionStorage.getItem('ab_test_home_2026')
    let selectedVariant = 'A'

    if (storedVariant) {
      selectedVariant = storedVariant
    } else {
      // 2. Asignación aleatoria (50/50)
      selectedVariant = Math.random() < 0.5 ? 'A' : 'B'
      // sessionStorage.setItem('ab_test_home_2026', selectedVariant)
      sessionStorage.setItem('ab_test_home_2026', 'A')

      // 3. ENVIAR A ANALYTICS (GTM)
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'experiment_impression',
          experiment_id: 'home_redesign_v2', // ID único de tu prueba
          // variant_id: selectedVariant, // 'A' o 'B'
          variant_id: 'A', // 'A' o 'B'
        })
      }
    }

    // 4. Cargar el componente correspondiente
    if (selectedVariant === 'B') {
      currentComponent.value = HomeVariantB
    } else {
      currentComponent.value = HomeVariantA
    }

    isLoading.value = false
  }
})
</script>

<template>
  <div v-if="isLoading" class="min-h-screen flex items-center justify-center bg-violet-950">
    <div class="animate-pulse text-white font-nexa-bold">Cargando experiencia...</div>
  </div>

  <component v-else :is="currentComponent" />
</template>
