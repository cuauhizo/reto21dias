<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useHead } from '@vueuse/head'

const router = useRouter()
const isLoading = ref(false)
const errorMessage = ref('')

// Datos del formulario
const formData = ref({
  EMAIL: '',
  FNAME: '',
  PHONE: '',
})

// Referencia para la instancia del input de teléfono
let phoneInputInstance = null

// Cargar estilos y scripts del teléfono
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
  // Inicializar intl-tel-input
  const checkIntl = setInterval(() => {
    if (window.intlTelInput) {
      clearInterval(checkIntl)
      const input = document.querySelector('#mce-PHONE')
      if (input) {
        phoneInputInstance = window.intlTelInput(input, {
          initialCountry: 'auto',
          preferredCountries: ['mx', 'us', 'co', 'es'],
          geoIpLookup: cb =>
            fetch('https://ipapi.co/json')
              .then(r => r.json())
              .then(d => cb(d.country_code))
              .catch(() => cb('mx')),
          utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
        })
      }
    }
  }, 100)
})

// Función nativa para enviar a Mailchimp (JSONP) sin librerías extra
const submitForm = () => {
  isLoading.value = true
  errorMessage.value = ''

  // 1. Obtener teléfono con formato internacional
  if (phoneInputInstance) {
    const fullNumber = phoneInputInstance.getNumber()
    // Si el usuario escribió algo, usamos el número formateado
    if (fullNumber) formData.value.PHONE = fullNumber
  }

  // 2. Preparar URL de Mailchimp (jsonp)
  // NOTA: Cambiamos '/post?' por '/post-json?' para que funcione vía script
  const baseUrl = 'https://tolkogroup.us9.list-manage.com/subscribe/post-json?u=7cf16f1918720e2f7ee24374a&id=30837c0ae2&f_id=00a6eee3f0'

  // 3. Crear nombre único para la función de retorno
  const callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random())

  // 4. Construir parámetros
  const params = new URLSearchParams({
    EMAIL: formData.value.EMAIL,
    FNAME: formData.value.FNAME,
    PHONE: formData.value.PHONE,
    tags: '15369803', // Tu etiqueta
    b_7cf16f1918720e2f7ee24374a_30837c0ae2: '', // Anti-bot vacío
    c: callbackName, // Mailchimp ejecutará esta función al responder
  }).toString()

  // 5. Definir qué hacer cuando Mailchimp responda
  window[callbackName] = response => {
    // Limpieza
    delete window[callbackName]
    document.body.removeChild(script)
    isLoading.value = false

    if (response.result === 'success') {
      // ✅ ÉXITO: Redirigir a la página de gracias
      router.push('/gracias')
    } else {
      // ❌ ERROR: Mostrar mensaje (limpiando el prefijo "0 -")
      errorMessage.value = response.msg ? response.msg.replace(/^\d\s-\s/, '') : 'Ocurrió un error. Intenta de nuevo.'
    }
  }

  // 6. Inyectar el script para enviar los datos
  const script = document.createElement('script')
  script.src = `${baseUrl}&${params}`
  document.body.appendChild(script)
}
</script>

<template>
  <div class="bg-[#2D0A6C] w-full mx-auto p-8 rounded-2xl nunito-sans lg:p-12 lg:py-16">
    <p class="text-white text-3xl leading-9 mb-5">
      ¿Estás listo para
      <span class="font-black nunito-sans-bold">resetear tu metabolismo?</span>
    </p>
    <p class="text-base text-white mb-4">
      La ciencia ha avanzado.
      <span class="font-black nunito-sans-bold">Tu cuerpo tiene la capacidad de sanar si le das las señales correctas.</span>
      No dejes que otro año pase sintiéndote igual.
    </p>
    <p class="text-base text-white mb-4 nunito-sans">
      ¡Regístrate ahora a la
      <strong class="font-black nunito-sans-bold">Masterclass Gratuita</strong>
      y mejora tu vida!
    </p>
    <form @submit.prevent="submitForm" class="flex flex-col gap-5">
      <div class="overflow-hidden rounded-2xl p-4 py-6 space-y-6 transition-all duration-300 bg-white/15 backdrop-blur-md lg:py-16 lg:px-12">
        <div class="flex flex-col text-left">
          <label for="mce-FNAME" class="block text-base text-white font-light mb-2">
            Escribe tu nombre y apellido
            <span class="text-red-500">*</span>
          </label>
          <input v-model="formData.FNAME" type="text" class="w-full px-5 py-3 rounded-2xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 text-black" placeholder="Ej. Juan Pérez" required />
        </div>

        <div class="flex flex-col text-left">
          <label for="mce-EMAIL" class="block text-base text-white font-light mb-2">
            Ingresa tu e-mail
            <span class="text-red-500">*</span>
          </label>
          <input v-model="formData.EMAIL" type="email" class="w-full px-5 py-3 rounded-2xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 text-black" placeholder="tu@correo.com" required />
        </div>

        <div class="flex flex-col text-left text-black">
          <label for="mce-PHONE" class="block text-base text-white font-light mb-2">Ingresa tu número de WhatsApp</label>
          <input id="mce-PHONE" type="tel" class="w-full px-5 py-3 rounded-2xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="55 1234 5678" />
        </div>

        <div v-if="errorMessage" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-sm text-center">
          <span v-html="errorMessage"></span>
        </div>
      </div>
      <button
        type="submit"
        :disabled="isLoading"
        class="relative inline-flex items-center w-full gap-2 text-gray-100 rounded-2xl border border-teal-700 bg-teal-700 px-2 py-4 shadow-[0_6px_0_#168b82] hover:bg-teal-600 hover:border-teal-600 active:translate-y-1 active:shadow-[0_2px_0_#168b82] transition-all duration-100 justify-center nunito-sans-bold text-base">
        <img src="@/assets/img/icon-lapiz.svg" class="pl-4 lg:pl-8" alt="" />
        <span v-if="isLoading">Enviando...</span>
        <span v-else>Inscríbete y mejora tu vida</span>
      </button>
    </form>
  </div>
</template>

<style scoped>
/* Ajustes para que la librería de teléfonos se vea bien */
:deep(.iti) {
  width: 100%;
}
:deep(.iti__country-list) {
  color: #333;
  z-index: 50;
}
</style>
