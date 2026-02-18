<script setup>
const beneficiosAdicionales = [
  { text: 'Ebook', color: 'bg-violet-700' },
  { text: 'Libro digital: The blood sugar solution', color: 'bg-violet-700' },
  { text: 'Menú y recetario de 21 días', color: 'bg-violet-800' },
  { text: 'Meditación para reset de cuerpo', color: 'bg-violet-900' },
  { text: 'Paquete de suplementos con precio especial', color: 'bg-violet-900' },
  { text: 'Constancia por el ISFMC', color: 'bg-violet-900' },
  { text: 'Clases pregrabadas', color: 'bg-violet-950' },
]
</script>

<template>
  <section id="section2" class="container grid gap-12 justify-items-center items-center pt-24 pb-10 md:py-20 md:pt-40 lg:pt-64 lg:grid-cols-2">
    <div data-aos="fade-down" data-aos-anchor-placement="top-center">
      <div class="w-full xl:w-[505px] justify-start text-zinc-700">
        <p class="text-2xl font-thin font-Nexa leading-8 mb-7">
          Este curso está
          <strong class="font-nexa-bold">dirigido a cualquier persona interesada en salud y bienestar</strong>
          , así como a profesionales de la salud que deseen profundizar en el uso funcional del GLP-1.
        </p>
      </div>
    </div>
    <div data-aos="fade-up" data-aos-anchor-placement="top-center" class="w-10/12 mt-24 lg:w-full lg:mt-0">
      <div class="text-center justify-start w-full 2xl:w-[616px] bg-white/90 rounded-[40px] shadow-[4px_4px_16px_0px_rgba(60,60,60,0.08)] border-2 border-teal-500 p-5 pt-28 sm:pt-20 md:py-24 md:px-12">
        <img src="@/assets/img/SugarResetGLP1.svg" alt="Logo Sugar Reset" class="w-[232px] absolute -top-36 -left-3 md:-top-24 -rotate-45 md:-left-20 lg:-top-32" loading="lazy" width="232" height="100" />

        <h3 class="text-teal-700 text-4xl leading-10">
          <span class="font-thin font-Nexa block">Reset intensivo impartido por</span>
          <span class="font-nexa-bold block">expertos de primer nivel.</span>
        </h3>

        <a
          href="https://isfmc.app/course/60/purchase"
          target="_blank"
          id="clic_beneficios"
          class="flex items-center gap-2 w-full max-w-[283px] mx-auto bg-gradient-to-r from-violet-950 to-violet-700 rounded-3xl shadow-[0px_0px_4px_0px_rgba(0,0,0,0.56)] font-nexa-bold text-sm text-white py-2 px-1.5 pl-10 mt-6 transition-all duration-500 sm:text-lg">
          <span>¡Inscríbete aquí!</span>
          <img src="@/assets/img/icon-contacto.svg" class="pl-4 lg:pl-8" alt="" aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
  <section class="relative py-20">
    <!-- <img src="/GLOBO_ESTOMAGO.png" alt="" class="w-1/3 max-w-[400px] lg:max-w-[635px] absolute top-0 left-0 -translate-x-1/4 -z-10 opacity-80" loading="lazy" aria-hidden="true" /> -->

    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full px-4">
          <div class="mx-auto mb-[60px] max-w-[616px] text-center">
            <h2 class="text-4xl leading-tight">
              <span class="text-teal-700 font-thin leading-[47.24px]">
                Al inscribirte, obtienes estos
                <br />
              </span>
              <span class="text-teal-500 font-black leading-[47.24px]">beneficios adicionales</span>
            </h2>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap">
        <div class="w-full lg:w-[948px] lg:mx-auto">
          <ul class="grid gap-2">
            <li v-for="(item, index) in beneficiosAdicionales" :key="index" :class="['p-4 flex items-center rounded-2xl shadow-sm hover:shadow-md transition-shadow md:justify-center', item.color]">
              <div class="mr-4 flex-shrink-0 w-12 h-12 flex items-center justify-center">
                <img src="@/assets/img/icono-credibilidad.png" alt="Icono check" width="48" height="48" loading="lazy" />
              </div>
              <h3 class="text-white text-xl md:text-2xl font-black">{{ item.text }}</h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- <img src="/ESPOSAS_DONA.png" alt="" class="w-1/3 lg:w-[460px] absolute bottom-0 right-0 translate-y-1/4 -z-10 opacity-80" loading="lazy" aria-hidden="true" /> -->
  </section>
</template>
