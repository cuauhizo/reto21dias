<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="h-20"></div>

  <section id="section1">
    <div class="container mx-auto bg-teal-50 backdrop-blur-[6px] rounded-2xl p-4 mt-28 mb-8 lg:mb-16 lg:mt-32 relative !overflow-visible">
      <div class="flex flex-col items-center gap-6 mb-12 text-center -mt-24 relative z-10">
        <img src="@/assets/img/SugarResetGLP1.svg" alt="Logo Reto Sugar Reset GLP1" class="w-full max-w-[144px] h-auto drop-shadow-2xl animate-fade-in-up hover:scale-105 transition-transform duration-300" fetchpriority="high" />

        <div class="max-w-3xl mx-auto">
          <h1 class="text-sky-950 text-4xl md:text-5xl font-black nunito-sans-bold leading-tight mb-6">¡Gracias por decir “sí”!</h1>

          <div class="p-6 md:p-0">
            <p class="text-sky-950 text-base md:text-lg nunito-sans leading-relaxed mb-4">
              Te damos la bienvenida a la
              <span class="nunito-sans-bold">Masterclass de Sugar Reset</span>
              con
              <span class="nunito-sans-bold">Nathaly Marcus</span>
              y por decidirte a transformar tu salud desde la raíz.
            </p>
            <p class="text-sky-950 text-base md:text-lg nunito-sans leading-relaxed">
              Estás a punto de comenzar el camino para
              <span class="nunito-sans-bold">tener el cuerpo que quieres.</span>
              Da el siguiente paso uniéndote a nuestra comunidad en WhatsApp y descargando nuestro e-book.
            </p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full max-w-7xl mx-auto pb-5 lg:pb-28">
        <div class="lg:col-start-2 lg:col-span-3 bg-sky-200/25 rounded-2xl backdrop-blur-md p-8 flex flex-col justify-center items-center h-full hover:bg-sky-200/30 transition-colors">
          <a href="https://chat.whatsapp.com/H1m0dlOjm20FMuB3b44c8Z" target="_blank" rel="noopener noreferrer" class="w-full h-full flex flex-col items-center justify-center gap-4 text-center group">
            <p class="text-sky-950 text-lg font-normal nunito-sans leading-snug">
              Únete a nuestra
              <br />
              <span class="font-black nunito-sans-bold">comunidad de WhatsApp</span>
            </p>
            <img src="@/assets/img/icon-whatsapp-color.svg" alt="WhatsApp" class="w-12 h-12 transition-transform group-hover:scale-110" loading="lazy" />
          </a>
        </div>

        <div class="lg:col-span-3 bg-sky-200/25 rounded-2xl backdrop-blur-md p-8 flex flex-col justify-center items-center h-full hover:bg-sky-200/30 transition-colors">
          <a href="https://bit.ly/3LEFPsl" target="_blank" rel="noopener noreferrer" class="w-full h-full flex flex-col items-center justify-center gap-4 text-center group">
            <p class="text-sky-950 text-lg font-normal nunito-sans leading-snug">
              Descarga nuestro
              <br />
              <span class="font-black nunito-sans-bold">e-book</span>
            </p>
            <img src="@/assets/img/icon-ebook.svg" alt="eBook" class="w-12 h-12 transition-transform group-hover:scale-110" loading="lazy" />
          </a>
        </div>

        <div class="lg:col-span-4 bg-sky-200/25 rounded-2xl backdrop-blur-md p-8 flex flex-col justify-center items-center h-full hover:bg-sky-200/30 transition-colors">
          <div class="flex flex-col items-center gap-5 text-center w-full">
            <p class="text-sky-950 text-lg font-normal nunito-sans leading-snug">
              También puedes inscribirte de una vez al Sugar Reset GLP-1 en 21 días.
              <span class="block mt-1 font-black nunito-sans-bold">¡Comenzamos el 27 de enero!</span>
            </p>
            <a
              href="https://pay.hotmart.com/T103270473P?off=7gm88kj9&checkoutMode=10"
              class="relative inline-flex items-center gap-2 text-gray-100 rounded-2xl border border-teal-700 bg-teal-700 px-6 py-4 w-full shadow-[0_6px_0_#168b82] hover:bg-teal-600 hover:border-teal-600 active:translate-y-1 active:shadow-[0_2px_0_#168b82] transition-all duration-100 justify-center nunito-sans-bold text-lg">
              <img src="@/assets/img/icon-lapiz.svg" class="w-5 h-5" alt="" />
              <span>¡Mejora tu vida!</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

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

.bg-hero {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
