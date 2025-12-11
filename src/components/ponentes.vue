<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { ponentes } from '@/data/ponentes.js'

// const getImageUrl = imageName => {
//   return new URL(`/src/assets/img/ponentes/${imageName}`, import.meta.url).href
// }

// --- El resto de tu lógica de carrusel permanece intacta ---
const currentIndex = ref(0)
const carouselTrack = ref(null)
const cardWidth = ref(0)
const autoSlideInterval = ref(null)

const visibleCards = computed(() => {
  if (typeof window === 'undefined') return 3 // Valor por defecto para SSR
  const width = window.innerWidth
  if (width >= 1024) return 3
  if (width >= 768) return 3
  return 3
})

const maxIndex = computed(() => Math.max(0, ponentes.length - visibleCards.value))

const transformStyle = computed(() => {
  const offset = -currentIndex.value * cardWidth.value
  return `translateX(${offset}px)`
})

const updateCarousel = () => {
  nextTick(() => {
    if (carouselTrack.value && carouselTrack.value.firstElementChild) {
      cardWidth.value = carouselTrack.value.firstElementChild.offsetWidth
    }
  })
}

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % (maxIndex.value + 1)
  resetAutoSlide()
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + (maxIndex.value + 1)) % (maxIndex.value + 1)
  resetAutoSlide()
}

const startAutoSlide = () => {
  clearInterval(autoSlideInterval.value)
  autoSlideInterval.value = setInterval(nextSlide, 3000) // 3 segundos
}

const resetAutoSlide = () => {
  startAutoSlide()
}

const pauseAutoSlide = () => {
  clearInterval(autoSlideInterval.value)
}

onMounted(() => {
  setTimeout(() => {
    updateCarousel()
    startAutoSlide()
  }, 300)
  window.addEventListener('resize', () => {
    updateCarousel()
    if (currentIndex.value > maxIndex.value) {
      currentIndex.value = maxIndex.value
    }
  })
})

onUnmounted(() => {
  clearInterval(autoSlideInterval.value)
  // Considera también remover el event listener de resize
})
</script>

<template>
  <section id="section3" class="grid gap-5 items-center py-20 lg:grid-cols-3">
    <div class="px-4 grid-cols-1" data-aos="zoom-in-right" data-aos-anchor-placement="center-bottom">
      <div class="flex justify-end">
        <div class="w-full xl:max-w-[395px] xl:col-start-2">
          <div>
            <h2 class="text-teal-700 text-4xl font-nexa-bold leading-10">Aprende de los mejores</h2>
            <p class="mb-6">
              Nuestros expertos te
              <span class="font-nexa-bold">ofrecen la ruta más directa y probada para conocer más de GLP-1 y cómo lograr la desintoxicación del azúcar</span>
              , asegurando que obtengas resultados reales y duraderos.
            </p>
            <a
              href="https://pay.hotmart.com/T103270473P?checkoutMode=10&bid=1765329714305&fromExitPopup=true"
              class="flex items-center gap-2 w-full max-w-[283px] mx-auto bg-gradient-to-r from-violet-950 to-violet-700 rounded-3xl shadow-[0px_0px_4px_0px_rgba(0,0,0,0.56)] font-nexa-bold text-sm text-white py-2 px-1.5 pl-10 mt-6 transition-all duration-500 sm:text-lg">
              <span>¡Regístrate aquí!</span>
              <img src="@/assets/img/icon-contacto.svg" class="pl-4 lg:pl-8" alt="icono contacto" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-2" data-aos="zoom-in-left" data-aos-anchor-placement="center-bottom">
      <div class="relative">
        <div id="carousel" class="overflow-hidden relative" @mouseenter="pauseAutoSlide" @mouseleave="startAutoSlide">
          <div ref="carouselTrack" id="ponente-track" class="flex transition-transform duration-500 ease-in-out" :style="{ transform: transformStyle }">
            <figure v-for="ponente in ponentes" :key="ponente.id" class="ponente-card flex-shrink-0 relative h-auto max-w-[332px] px-4">
              <!-- Enlace en imagen -->
              <a :href="ponente.enlace" target="_blank" rel="noopener noreferrer" class="block">
                <img :src="ponente.imagen" :alt="ponente.nombre" class="rounded-2xl" loading="lazy" />
              </a>

              <!-- Enlace en figcaption -->
              <figcaption class="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] text-center">
                <a :href="ponente.enlace" target="_blank" rel="noopener noreferrer" class="block bg-white/80 backdrop-blur-md border border-white/40 rounded-xl py-2 px-4 shadow-sm hover:bg-white transition">
                  <span class="text-zinc-800 text-sm md:text-base font-nexa-bold block truncate">
                    {{ ponente.nombre }}
                  </span>
                </a>
              </figcaption>
            </figure>
          </div>
        </div>

        <div class="flex justify-center lg:justify-start gap-4 mt-8">
          <button
            @click="prevSlide"
            aria-label="Ver ponente anterior"
            class="w-12 h-12 flex items-center justify-center rounded-full border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            @click="nextSlide"
            aria-label="Ver siguiente ponente"
            class="w-12 h-12 flex items-center justify-center rounded-full border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
