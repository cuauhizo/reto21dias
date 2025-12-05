<script setup>
  import { ref } from 'vue';
  import { useHead } from '@vueuse/head';

  // --- NO INDEXACIÓN ---
  useHead({
    title: 'Galería del Evento - Convención AMSOFIPO',
    meta: [
      {
        name: 'robots',
        content: 'noindex',
      },
    ],
  });

  // --- LÓGICA DE LA GALERÍA CON ORDEN ALEATORIO ---
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const originalImages = [
    'AMS 2025 D1-47.jpg',
    'AMS 2025 D1-61.jpg',
    'AMS 2025 D1-120.jpg',
    'AMS 2025 D1-127.jpg',
    'AMS 2025 D1-136.jpg',
    'AMS 2025 D1-138.jpg',
    'AMS 2025 D1-150.jpg',
    'AMS 2025 D1-172.jpg',
    'AMS 2025 D1-174.jpg',
    'AMS 2025 D2-10.jpg',
    'AMS 2025 D2-12.jpg',
    'AMS 2025 D2-72.jpg',
    'AMS 2025 D2-73.jpg',
    'AMS 2025 D2-75.jpg',
    'AMS 2025 D2-77.jpg',
    'AMS 2025 D2-79.jpg',
    'AMS 2025 D2-99.jpg',
    'AMS 2025 D2-101.jpg',
    'AMS 2025 D2-124.jpg',
    'AMS 2025 D2-129.jpg',
    'AMS 2025 D2-130.jpg',
    'AMS 2025 D2-131.jpg',
    'AMS 2025 D2-143.jpg',
    'AMS 2025 D2-145.jpg',
    'AMS 2025 D2-150.jpg',
    'AMS 2025 D2-151.jpg',
    'AMS 2025 D2-152.jpg',
    'AMS 2025 D2-155.jpg',
    'AMS 2025 D2-156.jpg',
    'AMS 2025 D2-157.jpg',
    'AMS 2025 D2-158.jpg',
    'AMS 2025 D2-159.jpg',
    'AMS 2025 D2-160.jpg',
    'AMS 2025 D2-161.jpg',
    'AMS 2025 D2-163.jpg',
    'AMS 2025 D2-164.jpg',
    'AMS 2025 D2-166.jpg',
    'AMS 2025 D2-167.jpg',
    'AMS 2025 D2-168.jpg',
    'AMS 2025 D2-169.jpg',
    'AMS 2025 D2-170.jpg',
    'AMS 2025 D2-172.jpg',
    'AMS 2025 D2-174.jpg',
    'AMS 2025 D2-175.jpg',
    'AMS 2025 D2-176.jpg',
    'AMS 2025 D2-177.jpg',
    'AMS 2025 D2-179.jpg',
    'AMS 2025 D2-180.jpg',
    'AMS 2025 D2-181.jpg',
    'AMS 2025 D2-187.jpg',
    'AMS 2025 D2-189.jpg',
    'AMS 2025 D2-191.jpg',
    'AMS 2025 D2-192.jpg',
    'AMS 2025 D2-193.jpg',
    'AMS 2025 D2-195.jpg',
    'AMS 2025 D2-196.jpg',
    'AMS 2025 D2-197.jpg',
    'AMS 2025 D2-198.jpg',
    'AMS 2025 D2-200.jpg',
    'AMS 2025 D2-203.jpg',
    'AMS 2025 D2-204.jpg',
    'AMS 2025 D2-207.jpg',
    'AMS 2025 D2-210.jpg',
    'AMS 2025 D2-211.jpg',
    'AMS 2025 D2-214.jpg',
    'AMS 2025 D2-215.jpg',
    'AMS 2025 D2-222.jpg',
    'AMS 2025 D2-224.jpg',
    'AMS 2025 D2-225.jpg',
    'AMS 2025 D2-226.jpg',
    'AMS 2025 D2-227.jpg',
    'AMS 2025 D2-228.jpg',
    'AMS 2025 D2-230.jpg',
    'AMS 2025 D2-235.jpg',
    'AMS 2025 D2-236.jpg',
    'AMS 2025 D2-239.jpg',
    'AMS 2025 D2-241.jpg',
    'AMS 2025 D2-242.jpg',
    'AMS 2025 D2-244.jpg',
    'AMS 2025 D2-251.jpg',
    'AMS 2025 D2-255.jpg',
    'AMS 2025 D2-256.jpg',
    'AMS 2025 D2-259.jpg',
    'AMS 2025 D2-264.jpg',
    'AMS 2025 D2-265.jpg',
    'AMS 2025 D2-268.jpg',
    'AMS 2025 D2-270.jpg',
    'AMS 2025 D2-271.jpg',
    'AMS 2025 D2-273.jpg',
    'AMS 2025 D2-275.jp',
  ];

  // Esta línea se ejecuta cada vez que el componente se carga.
  const images = ref(shuffleArray([...originalImages]));

  // lógica para el lightbox
  const isLightboxOpen = ref(false);
  const currentImageSrc = ref('');

  const getImageUrl = (imageName) => {
    return new URL(`../../public/galeria/${imageName}`, import.meta.url).href;
  };

  const openLightbox = (imageName) => {
    currentImageSrc.value = getImageUrl(imageName);
    isLightboxOpen.value = true;
  };

  const closeLightbox = () => {
    isLightboxOpen.value = false;
  };
</script>

<template>
  <div class="min-h-screen text-white py-10 md:py-20 p-4 sm:p-8">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold font-lemon-bold mb-2">Galería de la Convención</h1>
        <p class="text-lg text-gray-300 font-lemon-normal">Los mejores momentos de nuestro evento.</p>
        <router-link
          to="/"
          class="text-purple-400 hover:underline mt-4 inline-block"
          >← Volver al inicio</router-link
        >
      </div>

      <div class="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="break-inside-avoid cursor-pointer group"
          @click="openLightbox(image)">
          <img
            :src="getImageUrl(image)"
            alt="Foto del evento"
            class="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
            loading="lazy" />
        </div>
      </div>
    </div>

    <transition
      enter-active-class="transition-opacity duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0">
      <div
        v-if="isLightboxOpen"
        class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
        @click="closeLightbox">
        <img
          :src="currentImageSrc"
          alt="Vista ampliada"
          class="max-w-full max-h-full rounded-lg shadow-2xl"
          @click.stop />
        <button class="absolute top-4 right-4 text-white text-3xl">&times;</button>
      </div>
    </transition>
  </div>
</template>

<style scoped>
  .break-inside-avoid {
    break-inside: avoid;
  }
</style>
