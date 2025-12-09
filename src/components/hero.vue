<template>
  <section id="section1" class="relative md:h-screen flex items-center justify-center overflow-hidden mx-6 rounded-[48px] mt-2 md:mt-16 lg:h-[824px]">
    <div class="absolute inset-0 w-full h-full">
      <video class="w-full h-full object-cover" autoplay loop muted playsinline>
        <source src="/video/TLK_MainHeaderEs.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
    </div>

    <div class="absolute inset-0 bg-[#371171] opacity-85"></div>

    <div class="relative z-10 text-center text-white p-4 w-full h-full backdrop-blur-[6px]">
      <img src="@/assets/img/SugarResetGLP1.svg" alt="Logo convension" class="m-auto mt-[100px] mb-10 md:max-w-[393px]" loading="lazy" />
      <h1 class="hero-text text-[2.244rem] md:text-[3.196rem] font-bold mb-4">
        <span class="bg-teal-700 p-3 leading-[50.38px] font-nexa-bold">en solo 21 días*</span>
      </h1>
      <h2 class="leading-7 mb-2">
        <span class="text-[2.244rem] leading-[50.38px] font-nexa-bold">
          Del 20
          <span class="font-nexa">de enero</span>
          al 9
          <span class="font-nexa">de febrero</span>
        </span>
      </h2>
      <p class="text-sm">*Dirigido a cualquier persona interesada en salud y bienestar así como para profesionales de la salud.</p>
    </div>
  </section>
</template>

<script setup></script>

<style scoped></style>
