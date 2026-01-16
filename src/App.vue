<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import Responsive from '@/components/responsive.vue'
import BtnWhatsapp from '@/components/btnWhatsapp.vue'

const route = useRoute()
const anio = ref(new Date().getFullYear())
const showScrollTopButton = ref(false)
const activeSection = ref(null)
const isMenuOpen = ref(false)
const sectionIds = ['section1', 'section2', 'section3', 'section4', 'section5', 'section6']

let observer = null

// Control del Scroll Button (Optimizado)
const handleScrollButtonVisibility = () => {
  showScrollTopButton.value = window.scrollY > 100
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Navegación
const scrollToSection = index => {
  const element = document.getElementById(`section${index}`)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  closeMenu()
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScrollButtonVisibility, { passive: true })

  observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    { rootMargin: '-50% 0px -50% 0px' }
  )

  sectionIds.forEach(id => {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScrollButtonVisibility)
  if (observer) observer.disconnect()
})
</script>

<template>
  <header>
    <div v-if="!route.meta.hideUI" class="fixed z-30 w-full nav-menu bg-white bg-opacity-15 mt-2 md:-mt-10">
      <nav class="container h-30 flex items-center justify-between px-8 py-4 relative text-white">
        <div class="flex items-center gap-6 md:gap-0 lg:gap-6">
          <a href="./" class="lg:w-1/3 min-w-[55px]">
            <img src="@/assets/img/logo-isfmc.svg" alt="Logo convension" width="55" height="55" loading="lazy" />
          </a>
        </div>
        <div class="flex items-center justify-start gap-2 text-[14px]">
          <button @click="toggleMenu" class="w-6 h-5 bg-cover bg-center cursor-pointer transition-all z-20 md:hidden relative" :class="{ 'bg-close-menu': isMenuOpen, 'bg-open-menu': !isMenuOpen }" aria-label="Abrir menú"></button>

          <div class="fixed inset-0 bg-gradient-to-b from-white/20 to-[#3a3a82]/95 transition-transform duration-300 md:static md:translate-x-0 md:bg-none z-10" :class="isMenuOpen ? 'translate-x-0' : 'translate-x-full'">
            <ul
              class="absolute inset-x-0 top-24 p-10 items-center text-[15px] bg-white text-black w-[90%] mx-auto rounded-md h-max text-center grid gap-6 shadow-2xl md:static md:w-max md:bg-transparent md:p-0 md:grid-flow-col md:text-white md:shadow-none">
              <li><a href="#beneficios" :class="['py-2 px-2 rounded-full transition-colors hover:bg-white hover:text-black', activeSection === 'section2' ? 'bg-white text-[#3a3a82]' : '']" @click.prevent="scrollToSection(2)">Beneficios</a></li>
              <li><a href="#temario" :class="['py-2 px-2 rounded-full transition-colors hover:bg-white hover:text-black', activeSection === 'section4' ? 'bg-white text-[#3a3a82]' : '']" @click.prevent="scrollToSection(4)">Temario</a></li>
              <li><a href="#costo" :class="['py-2 px-2 rounded-full transition-colors hover:bg-white hover:text-black', activeSection === 'section5' ? 'bg-white text-[#3a3a82]' : '']" @click.prevent="scrollToSection(5)">Costo</a></li>
              <li>
                <a href="#preguntas_frecuentes" :class="['py-2 px-2 rounded-full transition-colors hover:bg-white hover:text-black', activeSection === 'section6' ? 'bg-white text-[#3a3a82]' : '']" @click.prevent="scrollToSection(6)">
                  Preguntas frecuentes
                </a>
              </li>
              <li class="hidden"><a href="masterClass" class="py-2 px-2 rounded-full border-2 border-solid transition-colors hover:bg-white hover:text-black">Master Class</a></li>
              <li class="hidden">
                <a
                  href="https://pay.hotmart.com/T103270473P?off=7gm88kj9&checkoutMode=10"
                  target="_blank"
                  id="clic_header_movil"
                  class="flex items-center justify-center gap-2 bg-gradient-to-r from-violet-950 to-violet-700 rounded-3xl shadow-[0px_0px_4px_0px_rgba(0,0,0,0.56)] font-nexa-bold text-lg text-white py-2 px-1.5 pl-4 transition-all duration-500">
                  <span>¡Inscríbete aquí!</span>
                  <i><img src="@/assets/img/icon-contacto.svg" class="pl-2" alt="icono contacto" /></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <div v-else class="fixed z-30 min-w-7xl md:w-full nav-menu-master flex justify-center w-full rounded-2xl bg-opacity-100 mt-2 mx-auto md:-mt-10 lg:mt-4">
      <nav class="min-w-7xl h-30 flex items-center justify-between gap-4 px-8 py-4 relative text-white rounded-2xl md:px-20 lg:px-20 lg:text-sky-950 2xl:px-40">
        <div class="flex gap-4">
          <a href="./" class="transition-transform hover:scale-105">
            <img src="@/assets/img/logo-isfmc.svg" class="lg:hidden" alt="Logo Instituto" width="40" height="40" loading="lazy" />
            <img src="@/assets/img/logo-isfmc-alt.svg" class="hidden lg:block" alt="Logo Instituto" width="40" height="40" loading="lazy" />
          </a>
          <img src="@/assets/img/SugarResetGLP1.svg" alt="Sugar Reset Logo" class="lg:hidden" loading="lazy" width="40" height="40" />
          <div class="flex items-center justify-start font-nexa-bold">Masterclass Gratuita</div>
        </div>
        <div class="flex items-center justify-start gap-8 text-base">
          <span class="hidden nunito-sans-bold">Master Class</span>
          <span class="hidden md:block">
            <a href="/" class="cursor-pointer">Conoce más</a>
          </span>
          <span class="hidden md:block">Masterclass</span>
        </div>
      </nav>
    </div>
  </header>

  <main>
    <router-view></router-view>

    <BtnWhatsapp />

    <transition name="fade">
      <button class="btn-irArriba transition-opacity duration-300 hover:scale-110" @click="scrollToTop" v-show="showScrollTopButton" aria-label="Ir al inicio">
        <span class="sr-only">Ir Arriba</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
          <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
        </svg>
      </button>
    </transition>

    <Responsive />
  </main>

  <footer>
    <div class="bg-teal-700 rounded-tl-[64px] rounded-tr-[64px] text-white">
      <div class="container py-10 md:py-12">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8 items-center text-center">
          <div class="col-span-4 md:col-span-4 lg:col-span-3">
            <div class="flex items-center justify-center md:justify-start gap-5">
              <img src="@/assets/img/logo-isfmc.svg" alt="Instituto Logo" class="h-auto object-contain" loading="lazy" width="112" height="114" />
              <img src="@/assets/img/SugarResetGLP1.svg" alt="Sugar Reset Logo" class="h-auto object-contain" loading="lazy" width="112" height="114" />
            </div>
          </div>

          <div class="col-span-4 md:col-span-8 lg:col-span-6 flex flex-col items-start gap-2 sm:items-center md:items-start">
            <div class="flex items-center gap-2">
              <img src="@/assets/img/icon-whatsapp.svg" alt="WhatsApp" loading="lazy" />
              <div class="text-base">56 4000 7778</div>
            </div>
            <div class="flex items-center gap-2">
              <img src="@/assets/img/icon-email.svg" alt="Email" loading="lazy" />
              <div class="text-base">info@isfmc.com</div>
            </div>
          </div>

          <div class="col-span-4 md:col-span-12 lg:col-span-3">
            <div class="flex gap-2.5 justify-center lg:justify-end">
              <a class="cursor-pointer hover:opacity-80 transition-opacity" href="https://www.facebook.com/isfmcmx" target="_blank"><img src="@/assets/img/icon-facebook.svg" alt="Facebook" /></a>
              <a class="cursor-pointer hover:opacity-80 transition-opacity" href="https://www.instagram.com/isfmcmx/" target="_blank"><img src="@/assets/img/icon-instagram.svg" alt="Instagram" /></a>
              <a class="cursor-pointer hover:opacity-80 transition-opacity" href="https://www.youtube.com/@isfmc645" target="_blank"><img src="@/assets/img/icon-youtube.svg" alt="Youtube" /></a>
              <a class="cursor-pointer hover:opacity-80 transition-opacity" href="https://x.com/isfmcmx" target="_blank"><img src="@/assets/img/icon-x.svg" alt="X" /></a>
              <a class="cursor-pointer hover:opacity-80 transition-opacity" href="https://mx.linkedin.com/company/isfmcmx" target="_blank"><img src="@/assets/img/icon-linkedin.svg" alt="Linkedin" /></a>
            </div>
          </div>
        </div>

        <div class="mt-6 pt-6 border-t border-white/35">
          <div class="flex flex-col text-sm justify-center items-center text-center md:flex-row md:justify-between gap-4 md:gap-0">
            <div>© {{ anio }} Instituto de Salud Funcional Mente - Cuerpo. Todos los derechos reservados.</div>
            <div class="flex flex-col md:flex-row gap-2 md:gap-6">
              <a href="https://isfmc.mx/aviso-de-privacidad" class="cursor-pointer hover:text-gray-300 transition-colors">Aviso de privacidad</a>
              <a href="https://isfmc.mx/terminos-y-condiciones" class="cursor-pointer hover:text-gray-300 transition-colors">Términos y Condiciones</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
nav {
  margin: 0 auto;
  width: 100%;
}

.nav-menu::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
  background: rgba(25, 130, 127, 0.65);
}

.nav-menu-master::before {
  content: '';
  position: absolute;
  width: 93%;
  height: 100%;
  /* -webkit-backdrop-filter: blur(16px); */
  /* backdrop-filter: blur(16px); */
  background: rgba(25, 130, 127);
  border-radius: 16px;
}

.btn-irArriba {
  padding: 15px;
  background-color: #3a3a82;
  color: #fff;
  position: fixed;
  right: 20px;
  bottom: 20px;
  border-radius: 50%;
  z-index: 50;
  border: 1px solid #000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

/* Transición simple para el botón */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (min-width: 1024px) {
  .nav-menu-master::before {
    width: 93%;
    background: #f1f2f6;
    border-radius: 16px;
  }
}
</style>
