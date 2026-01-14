<script setup>
import { onMounted } from 'vue'
import { useHead } from '@vueuse/head'

// Cargar el script de validación de Mailchimp de forma segura (Opcional)
useHead({
  script: [
    {
      src: '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js',
      async: true,
      defer: true,
    },
  ],
})

onMounted(() => {
  // Configuración necesaria para que funcione la validación de Mailchimp sin jQuery
  window.fnames = new Array()
  window.ftypes = new Array()
  window.fnames[0] = 'EMAIL'
  window.ftypes[0] = 'email'
  window.fnames[1] = 'FNAME'
  window.ftypes[1] = 'text'
  window.fnames[4] = 'PHONE'
  window.ftypes[4] = 'phone'
})
</script>

<template>
  <div class="bg-[#2D0A6C] w-full max-w-lg mx-auto p-8 py-16 rounded-2xl shadow-xl font-nexa">
    <h2 class="text-2xl font-nexa-bold text-white text-center mb-6">Regístrate para la Master Class</h2>
    <form
      action="https://tolkogroup.us9.list-manage.com/subscribe/post?u=7cf16f1918720e2f7ee24374a&amp;id=30837c0ae2&amp;f_id=00a6eee3f0"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      class="validate"
      target="_blank"
      novalidate>
      <div id="mc_embed_signup_scroll" class="flex flex-col gap-5">
        <div class="flex flex-col text-left">
          <label for="mce-EMAIL" class="block text-white font-light mb-2">
            Correo Electrónico
            <span class="text-red-500">*</span>
          </label>
          <input type="email" name="EMAIL" class="required email w-full px-5 py-3 rounded-2xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all" id="mce-EMAIL" placeholder="tu@correo.com" required />
        </div>

        <div class="flex flex-col text-left">
          <label for="mce-FNAME" class="block text-white font-light mb-2">
            Nombre y Apellido
            <span class="text-red-500">*</span>
          </label>
          <input type="text" name="FNAME" class="required w-full px-5 py-3 rounded-2xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all" id="mce-FNAME" placeholder="Ej. Juan Pérez" required />
        </div>

        <div class="flex flex-col text-left">
          <label for="mce-PHONE" class="block text-white font-light mb-2">Número de teléfono</label>
          <input type="text" name="PHONE" class="w-full px-5 py-3 rounded-2xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all" id="mce-PHONE" placeholder="Ej. 55 1234 5678" />
        </div>

        <div id="mce-responses" class="clear foot text-sm mt-2">
          <div class="response text-red-600 font-bold" id="mce-error-response" style="display: none"></div>
          <div class="response text-green-600 font-bold" id="mce-success-response" style="display: none"></div>
        </div>

        <div aria-hidden="true" style="position: absolute; left: -5000px">
          <input type="text" name="b_7cf16f1918720e2f7ee24374a_30837c0ae2" tabindex="-1" value="" />
        </div>
        <div hidden=""><input type="hidden" name="tags" value="15369803" /></div>

        <div class="mt-2">
          <input
            type="submit"
            name="subscribe"
            id="mc-embedded-subscribe"
            class="w-full bg-teal-700 hover:bg-teal-600 text-white font-nexa-bold py-4 rounded-full cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-lg"
            value="Inscríbete y mejora tu vida" />
        </div>
      </div>
    </form>
  </div>
</template>
