<template>
  <section id="section1" class="relative h-screen flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 w-full h-full">
      <video class="w-full h-full object-cover" autoplay loop muted playsinline>
        <source src="/video/TLK_MainHeaderEs.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
    </div>

    <div class="absolute inset-0 bg-[#371171] opacity-85"></div>

    <div class="relative z-10 text-center text-white p-4">
      <img src="@/assets/img/SugarResetGLP1.svg" alt="Logo convension" class="w-[393px] m-auto" loading="lazy" />
      <h1 class="hero-text font-lemon-bold text-[2.244rem] md:text-[3.196rem] font-bold mb-4">Reto de 21 Días*</h1>
      <h2 class="leading-7 mb-3">
        <span class="text-[2.244rem] font-lemon-bold">
          <span class="font-lemon-light">Del</span>
          20 de enero al 9 de febrero
        </span>
      </h2>
      <p class="font-lemon-light text-sm">*Dirigido a cualquier persona interesada en salud y bienestar así como para profesionales de la salud.</p>
    </div>
  </section>
</template>

<script setup></script>

<style scoped></style>
