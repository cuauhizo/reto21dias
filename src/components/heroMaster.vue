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
  <div class="h-20 md:hidden"></div>
  <section id="section1" class="relative flex items-center justify-center overflow-hidden bg-hero-master-movil md:bg-hero-master mt-4 mx-4 rounded-2xl min-h-[auto] py-12 md:mx-6 md:mt-12 md:py-0 lg:h-[824px] lg:mt-4">
    <div class="absolute inset-0 mix-blend-multiply bg-[#486b8b] z-10"></div>

    <div class="relative z-20 text-white w-full h-full flex flex-col justify-center items-center px-4 md:px-0 md:mt-12 md:mb-8">
      <div class="md:container md:mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-4 items-center">
          <div class="lg:col-span-6 flex flex-col gap-6">
            <div class="overflow-hidden rounded-2xl p-4 py-6 transition-all duration-300 bg-white/15 backdrop-blur-md lg:py-16 lg:px-12">
              <h1 class="text-white text-center mb-6 lg:text-left text-3xl lg:text-4xl nunito-sans-bold leading-10">
                <span class="nunito-sans">¿Sientes que</span>
                el azúcar controla tu vida?
              </h1>
              <p class="text-lg nunito-sans leading-tight mb-6 text-center lg:text-left text-white">
                ¡Inicia el 2026
                <span class="font-black nunito-sans-bold">transformando tu metabolismo</span>
                en 21 días!
              </p>
              <div class="w-full text-white">
                <p class="text-lg mb-6 font-thin nunito-sans leading-relaxed text-center lg:text-left">
                  Acompaña a
                  <strong class="nunito-sans-bold">Nathaly Marcus</strong>
                  en esta
                  <strong class="nunito-sans-bold">Masterclass Gratuita.</strong>
                </p>
                <p class="text-lg mb-6 font-thin nunito-sans leading-relaxed text-center lg:text-left">
                  <strong class="nunito-sans-bold">Olvida las dietas que fallan</strong>
                  y convierte la frustración en resultados sostenibles, entendiendo la hormona
                  <strong class="nunito-sans-bold">GLP-1</strong>
                  y usándola a tu favor.
                </p>
                <div class="flex flex-col items-center lg:hidden">
                  <img src="@/assets/img/nathaly-master.webp" alt="Logo Reto Sugar Reset GLP1" class="w-full max-w-[320px] md:max-w-[490px] h-auto animate-fade-in-up" width="490" height="491" fetchpriority="high" />
                </div>
                <div class="hidden lg:flex flex-col gap-7 escritorio">
                  <a
                    href="#inscribete"
                    @click.prevent="scrollToForm"
                    class="relative inline-flex items-center gap-2 text-gray-100 rounded-2xl border border-teal-700 bg-teal-700 px-6 py-4 w-full shadow-[0_6px_0_#168b82] hover:bg-teal-600 hover:border-teal-600 active:translate-y-1 active:shadow-[0_2px_0_#168b82] transition-all duration-100 justify-center nunito-sans-bold text-lg">
                    <img src="@/assets/img/icon-lapiz.svg" class="pl-4 lg:pl-8" alt="" />
                    <span>Inscríbete y mejora tu vida</span>
                  </a>
                  <p class="text-lg md:text-2xl font-thin nunito-sans leading-relaxed text-center md:text-left">
                    <strong class="nunito-sans-bold text-white">Lunes 27 de enero, 7 PM (hora de CDMX)</strong>
                  </p>
                </div>
              </div>
            </div>
            <div class="movil flex flex-col gap-4 lg:hidden">
              <a
                href="#inscribete"
                @click.prevent="scrollToForm"
                class="relative inline-flex items-center gap-2 text-gray-100 rounded-2xl border border-teal-700 bg-teal-700 px-6 py-4 shadow-[0_6px_0_#168b82] hover:bg-teal-600 hover:border-teal-600 active:translate-y-1 active:shadow-[0_2px_0_#168b82] transition-all duration-100 justify-center nunito-sans-bold text-lg">
                <img src="@/assets/img/icon-lapiz.svg" class="pl-4 lg:pl-8" alt="" />
                <span>Inscríbete y mejora tu vida</span>
              </a>
              <p class="text-lg nunito-sans leading-relaxed text-center lg:text-left">
                <strong class="nunito-sans-bold text-white">
                  Lunes 27 de enero,
                  <span class="lg:hidden"><br /></span>
                  7 PM (hora de CDMX)
                </strong>
              </p>
            </div>
          </div>
          <div class="lg:col-span-6 hidden lg:flex flex-col items-center">
            <img src="@/assets/img/nathaly-master.webp" alt="Logo Reto Sugar Reset GLP1" class="w-full max-w-[320px] md:max-w-[490px] h-auto mb-8 lg:mb-3 animate-fade-in-up" width="490" height="491" fetchpriority="high" />
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
