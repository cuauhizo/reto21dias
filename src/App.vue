<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Responsive from '@/components/responsive.vue';

const anio = ref(new Date().getFullYear());
const showScrollTopButton = ref(false);
const activeSection = ref(null);
const sectionIds = ['section1', 'section2', 'section3', 'section4', 'section5', 'section6'];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const handleScroll = () => {
  const scrollTop = window.scrollY;
  showScrollTopButton.value = scrollTop > 0;

  // Detectar sección activa
  for (const id of sectionIds) {
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        activeSection.value = id;
        break;
      }
    }
  }
};

const cerrarMenu = () => {
  const checkbox = document.getElementById('menu');
  if (checkbox) checkbox.checked = false;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const scrollToSection = index => {
  const element = document.getElementById(`section${index}`);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <!-- Header -->
  <header class="">
    <div class="fixed z-30 w-full nav-menu bg-white bg-opacity-15 mt-2 md:-mt-10">
      <nav class="container h-30 flex items-center justify-between px-8 py-4 relative text-white">
        <div class="flex items-center gap-6">
          <a href="./" class="w-1/3 max-w-[55px]">
            <img src="@/assets/img/logo-isfmc.svg" alt="Logo convension" class="w-full" width="55" height="55" loading="lazy" />
          </a>
          <div class="flex items-center justify-start gap-2 text-[14px]">
            <input type="checkbox" id="menu" class="peer hidden" />
            <label for="menu" class="bg-open-menu w-6 h-5 bg-cover bg-center cursor-pointer peer-checked:bg-close-menu transition-all z-10 md:hidden"></label>
            <div class="fixed inset-0 bg-gradient-to-b from-white/20 to-[#3a3a82]/70 translate-x-full peer-checked:translate-x-0 transition-transform md:static md:translate-x-0 md:bg-none">
              <ul
                class="absolute inset-x-0 top-24 p-10 items-center font-nexa-bold text-[15px] bg-white text-black w-[90%] mx-auto rounded-md h-max text-center grid gap-6 shadow-2xl md:static md:w-max md:bg-transparent md:p-0 md:grid-flow-col md:text-white md:shadow-none">
                <li>
                  <a
                    href="#beneficios"
                    :class="['py-2 px-2 rounded-full hover:bg-white hover:text-black', activeSection === 'section2' ? 'bg-white text-[#3a3a82]' : '']"
                    @click="
                      scrollToSection(2);
                      cerrarMenu();
                    ">
                    Beneficios
                  </a>
                </li>
                <li>
                  <a
                    href="#temario"
                    :class="['py-2 px-2 rounded-full hover:bg-white hover:text-black', activeSection === 'section4' ? 'bg-white text-[#3a3a82]' : '']"
                    @click="
                      scrollToSection(4);
                      cerrarMenu();
                    ">
                    Temario
                  </a>
                </li>
                <li>
                  <a
                    href="#costo"
                    @click="
                      scrollToSection(5);
                      cerrarMenu();
                    "
                    :class="['py-2 px-2 rounded-full hover:bg-white hover:text-black', activeSection === 'section5' ? 'bg-white text-[#3a3a82]' : '']">
                    Costo
                  </a>
                </li>
                <li>
                  <a
                    href="#preguntas_frecuentes"
                    @click="
                      scrollToSection(6);
                      cerrarMenu();
                    "
                    :class="['py-2 px-2 rounded-full hover:bg-white hover:text-black', activeSection === 'section6' ? 'bg-white text-[#3a3a82]' : '']">
                    Preguntas frecuentes
                  </a>
                </li>
                <li class="md:hidden">
                  <a
                    href="#"
                    class="flex items-center justify-center gap-2 bg-gradient-to-r from-violet-950 to-violet-700 rounded-3xl shadow-[0px_0px_4px_0px_rgba(0,0,0,0.56)] font-nexa-bold text-lg text-white py-2 px-1.5 pl-4 transition-all duration-500">
                    <span style="vertical-align: inherit"><span style="vertical-align: inherit">¡Regístrate aquí!</span></span>
                    <i><img src="@/assets/img/icon-contacto.svg" class="pl-2" alt="icono contacto" /></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <a href="#" class="hidden md:flex items-center gap-2 bg-gradient-to-r from-violet-950 to-violet-700 rounded-3xl shadow-[0px_0px_4px_0px_rgba(0,0,0,0.56)] font-nexa-bold text-lg text-white py-2 px-1.5 pl-10 transition-all duration-500">
          <span style="vertical-align: inherit"><span style="vertical-align: inherit">¡Regístrate aquí!</span></span>
          <i><img src="@/assets/img/icon-contacto.svg" class="pl-4 lg:pl-8" alt="icono contacto" /></i>
        </a>
      </nav>
    </div>
  </header>

  <!-- Main -->
  <main>
    <router-view></router-view>
    <button class="btn-irArriba" @click="scrollToTop" v-show="showScrollTopButton" aria-label="Ir al inicio">
      <span class="sr-only">Ir Arriba</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
      </svg>
    </button>
  </main>

  <!-- Footer -->
  <footer>
    <div class="container py-10 md:py-20">
      <div class="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-y-12 md:gap-x-8">
        <div class="text-[15px] md:col-span-4 xl:col-span-6 max-w-md">
          <a class="flex items-center justify-start">
            <img src="@/assets/img/logo-isfmc.svg" alt="Logo convension" loading="lazy" width="127" height="32" />
          </a>
          <!-- Social Icons -->
          <div class="mt-4">
            <span class="inline-flex gap-2.5 mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
              <a class="text-sm rounded cursor-pointer py-2 px-4 text-white bg-[#3a3a82]" href="https://www.linkedin.com/company/amsofipo/?originalSubdomain=mx" alt="Linkedin" target="_blank">Linkedin</a>
              <a class="text-sm rounded cursor-pointer py-2 px-4 text-white bg-[#3a3a82]" href="https://www.facebook.com/Amsofipo/?locale=es_LA" alt="Facebook" target="_blank">Facebook</a>
              <a class="text-sm rounded cursor-pointer py-2 px-4 text-white bg-[#3a3a82]" href="https://x.com/amsofipo" alt="X" target="_blank">X</a>
            </span>
          </div>
        </div>
        <div class="hidden md:block md:col-span-1 lg:hidden"></div>
        <div class="grid grid-cols-1 text-sm sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-6 col-span-1 md:col-span-7 xl:col-span-6 gap-y-8 sm:gap-x-8 md:gap-x-8 xl:gap-x-3">
          <div class="sm:col-span-2 xl:col-span-3">
            <h3 class="mb-3 font-bold">Dirección</h3>
            <p>Ave. Insurgentes Sur #2047 Esq. Cracovia Edificio "B", Colonia San Ángel, Del. Álvaro Obregón C.P. 01000, CDMX</p>
          </div>
          <div class="sm:col-span-1 xl:col-span-2">
            <h3 class="mb-3 font-bold">Contacto</h3>
            <nav class="mb-10 list-none">
              <ul>
                <li class="mt-3">
                  <a class="cursor-pointer hover:text-gray-500" href="mailto:contacto@amsofipo.mx">contacto@amsofipo.mx</a>
                </li>
                <li class="">
                  <a href="tel:+5550014851" class="cursor-pointer hover:text-gray-500">+55 5001 4851</a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="sm:col-span-1 md:col-span-1 xl:-ml-3">
            <h3 class="mb-3 font-bold">Ligas de interés</h3>
            <nav class="mb-10 list-none">
              <ul>
                <li class="">
                  <a href="https://www.gob.mx/shcp" target="_blank" alt="enlace a SHCP" class="cursor-pointer hover:text-gray-500">SHCP</a>
                </li>
                <li class="">
                  <a href="https://www.gob.mx/cnbv" target="_blank" alt="enlace a CNBV" class="cursor-pointer hover:text-gray-500">CNBV</a>
                </li>
                <li class="">
                  <a href="https://www.condusef.gob.mx/" target="_blank" alt="enlace a CONDUSEF" class="cursor-pointer hover:text-gray-500">CONDUSEF</a>
                </li>
                <li class="">
                  <a href="https://www.fira.gob.mx/Nd/index.jsp" target="_blank" alt="enlace a FIRA" class="cursor-pointer hover:text-gray-500">FIRA</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div class="mt-16 pt-6 border-t border-[#3A3482]">
        <div class="flex flex-col text-sm justify-center items-center text-center md:flex-row md:justify-between">
          <div class="flex space-x-6 mb-4 md:mb-0">
            <a href="#" class="cursor-pointer hover:text-gray-500">Aviso de privacidad</a>
          </div>
          <div class="">
            <p class="">Todos los derechos reservados. AMS® {{ anio }}</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <Responsive />
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
  /* background: rgba(255 255 255 0.16); */
  /* background: rgba(25 130 127 0.65); */
  background: rgba(25, 130, 127, 0.65);
}

/* Estilos opcionales para el botón de ir arriba */
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
}
</style>
