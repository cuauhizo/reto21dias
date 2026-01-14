<script setup>
import { onMounted } from 'vue'
import { useHead } from '@vueuse/head'

// 1. Cargar scripts externos necesarios para el teléfono
useHead({
  link: [{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/css/intlTelInput.css' }],
  script: [
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/intlTelInput.min.js',
      async: true,
      defer: true,
    },
  ],
})

onMounted(() => {
  // 2. Inicializar el selector de teléfono (intl-tel-input)
  const initPhoneInterval = setInterval(() => {
    if (window.intlTelInput) {
      clearInterval(initPhoneInterval)

      const phoneInputField = document.querySelector('#mce-PHONE')
      if (phoneInputField) {
        const phoneInput = window.intlTelInput(phoneInputField, {
          initialCountry: 'auto',
          geoIpLookup: function (success, failure) {
            fetch('https://ipapi.co/json')
              .then(res => res.json())
              .then(data => success(data.country_code))
              .catch(() => success('MX'))
          },
          utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
        })

        // TRUCO IMPORTANTE: Al enviar, actualizar el input con el número completo (+52...)
        // para que Mailchimp lo guarde correctamente con lada.
        const form = document.getElementById('mc-embedded-subscribe-form')
        if (form) {
          form.addEventListener('submit', function () {
            phoneInputField.value = phoneInput.getNumber() // Obtiene el número completo internacional
          })
        }
      }
    }
  }, 100)
})
</script>

<template>
  <div id="mc_embed_signup" class="bg-[#2D0A6C] rounded-[20px] p-8 text-white max-w-[500px] mx-auto font-sans">
    <form
      action="https://tolkogroup.us9.list-manage.com/subscribe/post?u=7cf16f1918720e2f7ee24374a&id=30837c0ae2&f_id=00a0eee3f0"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      class="validate"
      target="_blank"
      novalidate>
      <div id="mc_embed_signup_scroll">
        <h2 class="text-2xl font-bold text-center mb-6">Regístrate para la Master Class</h2>

        <div class="mc-field-group mb-4">
          <label for="mce-FNAME" class="block font-light mb-2">Escribe tu nombre y apellido</label>
          <input type="text" name="FNAME" class="required text w-full p-4 rounded-xl border-none text-[#333] outline-none" id="mce-FNAME" placeholder="Ej. Juan Hernández" required />
        </div>

        <div class="mc-field-group mb-4">
          <label for="mce-EMAIL" class="block font-light mb-2">Ingresa tu e-mail</label>
          <input type="email" name="EMAIL" class="required email w-full p-4 rounded-xl border-none text-[#333] outline-none" id="mce-EMAIL" placeholder="Ej. jhernandez@gmail.com" required />
        </div>

        <div class="mc-field-group mb-4 text-black">
          <label for="mce-PHONE" class="block font-light mb-2 text-white">Ingresa tu número de WhatsApp</label>
          <input type="tel" name="PHONE" class="required w-full p-4 rounded-xl border-none text-[#333] outline-none" id="mce-PHONE" required />
        </div>

        <div id="mce-responses" class="clear foot">
          <div class="response" id="mce-error-response" style="display: none"></div>
          <div class="response" id="mce-success-response" style="display: none"></div>
        </div>

        <div aria-hidden="true" style="position: absolute; left: -5000px">
          <input type="text" name="b_7cf16f1918720e2f7ee24374a_30837c0ae2" tabindex="-1" value="" />
        </div>

        <div class="optionalParent mt-6">
          <div class="clear foot">
            <input
              type="submit"
              name="subscribe"
              id="mc-embedded-subscribe"
              class="button w-full bg-[#1B8B82] hover:bg-[#146d66] text-white font-bold text-lg h-[55px] rounded-[30px] border-2 border-white cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              value="Inscríbete y mejora tu vida" />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
/* Estilo necesario para que el selector de banderas se vea bien sobre el input */
:deep(.iti) {
  width: 100%;
  color: #000; /* Texto negro dentro del input */
}
:deep(.iti__country-list) {
  color: #000;
}
</style>
