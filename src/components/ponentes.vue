<script setup>
  import { computed, ref } from 'vue'
  import { ponentes } from '@/data/ponentes.js'

  // ----------------------------------------------------
  // Lógica de Imagen y Propiedad Computada (Sin cambios)
  // ----------------------------------------------------
  const getImageUrl = imageName => {
    return new URL(`/src/assets/img/ponentes/${imageName}`, import.meta.url).href
  }

  const isPonentesCountOdd = computed(() => {
    return ponentes.length % 2 !== 0
  })

  // ----------------------------------------------------
  // 💡 NUEVA LÓGICA REACTIVA PARA DOS ACORDEONES
  // ----------------------------------------------------

  // 1. Estados Reactivos para cada acordeón
  // Cada ref rastrea el ID del FAQ que está abierto en su respectiva sección.
  const openFaqAId = ref(null) // Estado para el Acordeón A
  const openFaqBId = ref(null) // Estado para el Acordeón B

  // 2. Datos para el FAQ Principal (A)
  const faqsA = ref([
    {
      id: 1,
      question: 'How do i know if a product is available in boutiques?',
      answer:
        'Remember you can query the status of your orders any time in My orders in the My account section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your e-mail address and order number.',
    },
    {
      id: 2,
      question: 'How can i find the prices or get other information about chanel products?',
      answer: 'The prices and product information can usually be found on the product detail pages on the official website or by contacting an authorized distributor.',
    },
  ])

  // 3. Datos para el FAQ Secundario (B)
  const faqsB = ref([
    {
      id: 101, // Usar IDs distintos es buena práctica
      question: 'Pregunta Adicional B1: ¿Cuál es el horario del evento?',
      answer: 'El evento se llevará a cabo de 9:00 AM a 5:00 PM (hora de la Ciudad de México).',
    },
    {
      id: 102,
      question: 'Pregunta Adicional B2: ¿Se incluye el almuerzo?',
      answer: 'Sí, se incluye un box lunch para todos los asistentes con opciones para dietas especiales.',
    },
  ])

  // 4. Funciones de Control para el Acordeón A
  const toggleFaqA = id => {
    openFaqAId.value = openFaqAId.value === id ? null : id // Alterna el estado
  }

  const isFaqOpenA = id => {
    return openFaqAId.value === id
  }

  // 5. Funciones de Control para el Acordeón B
  const toggleFaqB = id => {
    openFaqBId.value = openFaqBId.value === id ? null : id // Alterna el estado
  }

  const isFaqOpenB = id => {
    return openFaqBId.value === id
  }
</script>

<template>
  <section id="section3" class="py-10 md:py-20 px-4">
    <div class="mx-auto flex max-w-7xl flex-col items-start gap-10 md:flex-row">
      <div class="w-full md:sticky md:top-20 md:w-1/2 md:order-2" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <div class="md:w-[505px] bg-white/90 rounded-[40px] shadow-[4px_4px_16px_0px_rgba(60,60,60,0.08)] border-2 border-teal-500 p-12">
          <p class="titulo">¡Inscríbete ahora y aprovecha nuestro precio de lanzamiento!</p>
          <p>
            $4,800.
            <sup>00</sup>
            MXN
          </p>
          <p>
            $3,500.
            <sup>00</sup>
            MXN
          </p>
          <p>Descuento por tiempo limitado</p>
          <div class="grid items-center justify-center">
            <button class="flex gap-2 rounded-full transition-all duration-500  text-xs justify-center items-center bg-gradient-to-r from-violet-950 to-violet-700 text-white hover:bg-gradient-to-br px-8 py-2">
              ¡Regístrate aquí!
            </button>
          </div>
          <img src="@/assets/img/SugarResetGLP1.svg" alt="Logo convension" class="w-[393px] m-auto" loading="lazy" />
          <p>Paga a meses sin intereses con tarjetas de crédito participantes.</p>
          <img src="@/assets/img/pago.png" alt="Logo convension" class="w-[320px] m-auto" loading="lazy" />
        </div>
      </div>

      <div class="flex flex-col gap-8 w-full min-w-0 flex-1 md:order-1" data-aos="fade-down" data-aos-anchor-placement="top-bottom">
        <div>
          <h1 class="text-center lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold mb-6">FAQ's Principales</h1>
          <div class="lg:w-8/12 w-full mx-auto">
            <div v-for="(faq, index) in faqsA" :key="faq.id">
              <hr class="w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />
              <div class="w-full md:px-6">
                <div id="mainHeading" class="flex justify-between items-center w-full cursor-pointer" @click="toggleFaqA(faq.id)">
                  <div class="">
                    <p class="flex justify-center items-center font-medium text-base leading-6 md:leading-4 text-gray-800" :class="{ 'font-semibold': isFaqOpenA(faq.id) }">
                      <span class="lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">Q{{ index + 1 }}.</span>
                      {{ faq.question }}
                    </p>
                  </div>
                  <button aria-label="toggler" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
                    <img class="transform dark:hidden transition duration-300" :class="{ 'rotate-180': isFaqOpenA(faq.id) }" src="@/assets/img/toggler.svg" alt="toggler" />
                    <img class="transform dark:block hidden transition duration-300" :class="{ 'rotate-180': isFaqOpenA(faq.id) }" src="@/assets/img/toggler.svg" alt="toggler" />
                  </button>
                </div>
                <div v-show="isFaqOpenA(faq.id)" class="mt-6 w-full">
                  <p class="text-base leading-6 text-gray-600 dark:text-gray-300 font-normal">
                    {{ faq.answer }}
                  </p>
                </div>
              </div>
            </div>
            <hr class="w-full lg:mt-10 my-8" />
          </div>
        </div>

        <hr class="w-full border-gray-400" />
        <div>
          <h2 class="text-center lg:text-3xl text-2xl lg:leading-9 leading-7 text-gray-800 font-semibold mb-6">Preguntas sobre el Evento</h2>
          <div class="lg:w-8/12 w-full mx-auto">
            <div v-for="(faq, index) in faqsB" :key="faq.id">
              <hr class="w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />
              <div class="w-full md:px-6">
                <div id="mainHeading" class="flex justify-between items-center w-full cursor-pointer" @click="toggleFaqB(faq.id)">
                  <div class="">
                    <p class="flex justify-center items-center font-medium text-base leading-6 md:leading-4 text-gray-800" :class="{ 'font-semibold': isFaqOpenB(faq.id) }">
                      <span class="lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">E{{ index + 1 }}.</span>
                      {{ faq.question }}
                    </p>
                  </div>
                  <button aria-label="toggler" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
                    <img class="transform dark:hidden transition duration-300" :class="{ 'rotate-180': isFaqOpenB(faq.id) }" src="@/assets/img/pago.png" alt="toggler" />
                    <img class="transform dark:block hidden transition duration-300" :class="{ 'rotate-180': isFaqOpenB(faq.id) }" src="@/assets/img/toggler.svg" alt="toggler" />
                  </button>
                </div>
                <div v-show="isFaqOpenB(faq.id)" class="mt-6 w-full">
                  <p class="text-base leading-6 text-gray-600 dark:text-gray-300 font-normal">
                    {{ faq.answer }}
                  </p>
                </div>
              </div>
            </div>
            <hr class="w-full lg:mt-10 my-8" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
