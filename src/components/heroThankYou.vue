<script setup>
import { ref } from 'vue'
</script>

<template>
  <section id="section1" class="relative flex items-center justify-center overflow-hidden mx-4 md:mx-6 rounded-[32px] md:rounded-[48px] my-4 md:my-12 min-h-[80vh] py-12 md:py-0">
    <div class="absolute inset-0 bg-violet-950/40 backdrop-blur-[6px] z-10"></div>

    <div class="relative z-20 text-white w-full h-full flex flex-col justify-center items-center mt-10 px-4 md:px-0 md:mt-24 md:mb-8 xl:mt-0">
      <div class="container mx-auto my-10 md:my-20 md:py-4">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 items-center">
          <div class="lg:col-start-3 lg:col-span-8 flex flex-col items-center">
            <img src="@/assets/img/SugarResetGLP1.svg" alt="Logo Reto Sugar Reset GLP1" class="w-full max-w-[280px] md:max-w-[332px] h-auto drop-shadow-2xl mb-4 md:mb-3 animate-fade-in-up" width="332" height="491" fetchpriority="high" />
          </div>

          <div class="lg:col-start-3 lg:col-span-8 flex flex-col gap-6">
            <div>
              <div class="mx-auto md:mx-0 py-3 rounded-[32px]">
                <h1 class="text-center justify-end text-sky-950 text-4xl font-black nunito-sans-bold leading-10">¡Gracias por decir “sí”!</h1>
                <p class="text-sky-950 text-base nunito-sans leading-5| mb-6 text-center lg:text-left">
                  Te damos la bienvenida a la
                  <span class="nunito-sans-bold">Masterclass de Sugar Reset</span>
                  con
                  <span class="nunito-sans-bold">Nathaly Marcos</span>
                  y por decidirte a transformar tu salud desde la raíz. Estás a punto de comenzar el camino para
                  <span class="nunito-sans-bold">tener el cuerpo que quieres.</span>
                </p>
                <p class="text-sky-950 text-base nunito-sans leading-5| mb-6 text-center lg:text-left">Da el siguiente paso uniéndote a nuestra comunidad en WhatsApp y descargando nuestro e-book.</p>
              </div>
            </div>

            <div class="flex flex-col lg:flex-row justify-center items-center gap-4 w-full">
              <div class="w-80 h-64 relative">
                <div class="w-80 h-64 left-0 top-0 absolute bg-sky-200/25 rounded-2xl backdrop-blur-md"></div>
                <div class="w-56 left-[40px] top-[68px] absolute text-center justify-start">
                  <p class="text-sky-950 text-lg font-normal nunito-sans leading-5">
                    Únete a nuestra
                    <span class="font-black nunito-sans-bold">comunidad de Whats App</span>
                  </p>
                </div>

                <img src="@/assets/img/icon-whatsapp-color.svg" alt="WhatsApp" class="w-12 h-12 left-[131.51px] top-[133px] absolute" loading="lazy" />
              </div>
              <a
                href="https://chat.whatsapp.com/FJFEzdUGSNwIlknvv9hFdI"
                target="_blank"
                id="clic_whatsapp_gracias"
                rel="noopener noreferrer"
                class="flex items-center justify-center gap-2 bg-teal-700 rounded-full shadow-[0px_0px_4px_0px_rgba(0,0,0,0.56)] nunito-sans-bold text-base md:text-lg text-white py-3 px-7 transition-all duration-500 w-full md:w-auto md:min-w-[347px] border-2 border-white text-center hover:bg-teal-600 hover:scale-105">
                <span>Únete al grupo de WhatsApp</span>
              </a>

              <a
                href="https://bit.ly/3LEFPsl"
                target="_blank"
                id="clic_ebook_gracias"
                rel="noopener noreferrer"
                class="flex items-center justify-center gap-2 bg-teal-700 rounded-full shadow-[0px_0px_4px_0px_rgba(0,0,0,0.56)] nunito-sans-bold text-base md:text-lg text-white py-3 px-7 transition-all duration-500 w-full md:w-auto md:min-w-[347px] border-2 border-white text-center hover:bg-teal-600 hover:scale-105">
                <span>Descarga el eBook</span>
              </a>
            </div>
          </div>

          <div class="lg:col-start-3 lg:col-span-8 flex flex-col gap-6">
            <div>
              <div class="mx-auto md:mx-0 py-3 rounded-[32px]">
                <p class="text-lg md:text-xl font-black nunito-sans-bold leading-tight mb-4 text-center mt-4">También puedes inscribirte de una vez al SUGAR RESET GLP-1 EN 21 DÍAS. ¡Comenzamos el 27 de enero!</p>
              </div>
            </div>

            <div class="flex flex-col lg:flex-row justify-center items-center gap-4 w-full">
              <a
                href="https://pay.hotmart.com/T103270473P?off=7gm88kj9&checkoutMode=10"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center gap-2 bg-teal-700 rounded-full shadow-[0px_0px_4px_0px_rgba(0,0,0,0.56)] nunito-sans-bold text-base md:text-lg text-white py-3 px-7 transition-all duration-500 w-full md:w-auto md:min-w-[347px] border-2 border-white text-center hover:bg-teal-600 hover:scale-105">
                <span>Sí quiero transormarme en 21 días</span>
              </a>
            </div>
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
}
</style>
