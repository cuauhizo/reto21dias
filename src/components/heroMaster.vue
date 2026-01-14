<script setup>
// Función para desplazamiento suave
const scrollToForm = () => {
  const element = document.getElementById('inscribete')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section id="section1" class="relative flex items-center justify-center overflow-hidden bg-hero-master mx-4 md:mx-6 rounded-[32px] md:rounded-[48px] mt-4 md:mt-12 min-h-[auto] py-12 md:py-0 lg:h-[824px]">
    <div class="absolute inset-0 bg-violet-950 md:bg-violet-950/40 backdrop-blur-[6px] z-10"></div>

    <div class="relative z-20 text-white w-full h-full flex flex-col justify-center items-center mt-20 px-4 md:px-0 md:mt-24 md:mb-8 xl:mt-0">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 items-center">
          <div class="lg:col-span-8 flex flex-col gap-6">
            <div>
              <div class="w-fit mx-auto md:mx-0 py-3 rounded-[32px]">
                <h1 class="text-white text-center md:text-left text-3xl md:text-4xl font-nexa-bold leading-tight">¿Sientes que el azúcar controla tu vida?</h1>
                <p class="text-lg font-black font-nexa-bold leading-tight mb-4 text-center md:text-left text-teal-300 md:text-white">¡Inicia el 2026 transformando tu metabolismo en 21 días!</p>
              </div>
            </div>

            <div class="w-full text-white/90">
              <p class="text-xl mb-8 md:text-2xl font-thin font-Nexa leading-relaxed text-center md:text-left">
                <strong class="font-nexa-bold text-white">Acompaña a Nathaly Marcus en esta Masterclass Gratuita.</strong>
              </p>
              <p class="text-xl mb-8 md:text-2xl font-thin font-Nexa leading-relaxed text-center md:text-left">
                <strong class="font-nexa-bold text-white">Olvida las dietas que fallan y convierte la frustración en resultados sostenibles, entendiendo la hormona GLP-1 y usándola a tu favor.</strong>
              </p>

              <p class="text-xl mb-8 md:text-2xl font-thin font-Nexa leading-relaxed text-center md:text-left">
                <strong class="font-nexa-bold text-white">Lunes 27 de enero, 7 PM (hora de CDMX)</strong>
              </p>
              <a
                href="#inscribete"
                @click.prevent="scrollToForm"
                class="flex items-center justify-center gap-2 bg-teal-700 rounded-full shadow-[0px_0px_4px_0px_rgba(0,0,0,0.56)] font-nexa-bold text-lg text-white py-3 px-7 transition-all duration-500 w-fit border-2 border-white lg:pl-10 cursor-pointer hover:bg-teal-600 hover:scale-105">
                <span>Inscríbete y mejora tu vida</span>
              </a>
            </div>
          </div>

          <div class="lg:col-span-4 flex flex-col items-center">
            <img src="@/assets/img/nathaly-master.png" alt="Logo Reto Sugar Reset GLP1" class="w-full max-w-[320px] md:max-w-[490px] h-auto mb-8 lg:mb-3 animate-fade-in-up" width="490" height="491" fetchpriority="high" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Animación suave de entrada para la imagen */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

/* Fondo responsivo si tienes la clase bg-hero definida en global */
.bg-hero {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* background-image: url(...); Asegúrate de tener esto en tu CSS global o config */
}
</style>
