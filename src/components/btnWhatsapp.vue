<script setup>
import { computed } from 'vue'

// Definimos las propiedades para hacerlo reutilizable
// 525571477728 - old
// 525640007778 - new

const props = defineProps({
  phone: {
    type: String,
    default: '525640007778', // Tu número por defecto
  },
  message: {
    type: String,
    default: 'Hola, me interesa inscribirme al Reto 21 Días',
  },
})

// Generamos el link dinámicamente
const whatsappLink = computed(() => {
  const encodedMessage = encodeURIComponent(props.message)
  return `https://wa.me/${props.phone}?text=${encodedMessage}`
})
</script>

<template>
  <a
    :href="whatsappLink"
    target="_blank"
    id="btn_whatsapp"
    rel="noopener noreferrer"
    class="group fixed bottom-24 right-5 z-50 flex items-center bg-[#25D366] p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:pr-6 hover:rounded-3xl animate-pulse-green overflow-hidden"
    aria-label="Contactar por WhatsApp">
    <span class="max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:mr-3 transition-all duration-500 ease-in-out text-white font-nexa-bold text-sm md:text-base whitespace-nowrap overflow-hidden">
      ¿Tienes dudas? Escríbenos
    </span>
    <img src="@/assets/img/icon-whatsapp.svg" alt="WhatsApp" class="w-8 h-8 md:w-9 md:h-9 brightness-0 invert shrink-0" />
  </a>
</template>

<style scoped>
/* Animación de "latido" personalizada.
  No se usa Tailwind para esto porque es más fácil de controlar en CSS puro.
*/
@keyframes pulse-green {
  0% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
}

.animate-pulse-green {
  animation: pulse-green 2s infinite;
}

/* Pausar animación al hover para que no distraiga al leer */
.animate-pulse-green:hover {
  animation: none;
}
</style>
