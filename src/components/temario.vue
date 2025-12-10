<script setup>
import { computed, ref } from 'vue';
import { ponentes } from '@/data/ponentes.js';

// ----------------------------------------------------
// Lógica de Imagen y Propiedad Computada (Sin cambios)
// ----------------------------------------------------
const getImageUrl = imageName => {
  return new URL(`/src/assets/img/ponentes/${imageName}`, import.meta.url).href;
};

const isPonentesCountOdd = computed(() => {
  return ponentes.length % 2 !== 0;
});

// ----------------------------------------------------
// 💡 NUEVA LÓGICA REACTIVA PARA DOS ACORDEONES
// ----------------------------------------------------

// 1. Estados Reactivos para cada acordeón
// Cada ref rastrea el ID del FAQ que está abierto en su respectiva sección.
const openFaqAId = ref(null); // Estado para el Acordeón A
const openFaqBId = ref(null); // Estado para el Acordeón B

// 2. Datos para el FAQ Principal (A)
const faqsA = ref([
  {
    id: 1,
    question: 'GLP-1: El hack metabólico que todos usan  (y pocos entienden)',
    answer: `
      <ul>
        <li>¿Qué es el GLP-1?</li>
        <li>¿Cómo funciona en el cuerpo?</li>
        <li>Principales beneficios más allá que bajar de peso</li>
        <li>¿Quiénes se benefician con el GLP 1 y quienes no?</li>
        <li>Errores típicos cuando alguien comienza a utilizar GLP-1</li>
      </ul>
    `,
  },
  {
    id: 2,
    question: 'Tu segundo cerebro en llamas: activa tu motor metabólico desde tu intestino',
    answer: 'The prices and product information can usually be found on the product detail pages on the official website or by contacting an authorized distributor.',
  },
  {
    id: 3,
    question: 'Come para nutrirte no para inflamarse',
    answer: 'The prices and product information can usually be found on the product detail pages on the official website or by contacting an authorized distributor.',
  },
  {
    id: 4,
    question: 'Tu cuerpo está cambiando: cómo evitar perder masa muscular',
    answer: 'The prices and product information can usually be found on the product detail pages on the official website or by contacting an authorized distributor.',
  },
  {
    id: 5,
    question: 'SOS GLP-1: Sobrevive (y gana) a los efectos secundarios',
    answer: 'The prices and product information can usually be found on the product detail pages on the official website or by contacting an authorized distributor.',
  },
  {
    id: 6,
    question: 'Salida segura: Cómo mantenerte delgado(a), fuerte y estable por meses (o años)',
    answer: 'The prices and product information can usually be found on the product detail pages on the official website or by contacting an authorized distributor.',
  },
]);

// 3. Datos para el FAQ Secundario (B)
const faqsB = ref([
  {
    id: 101, // Usar IDs distintos es buena práctica
    question: '¿Quedarán grabadas las clases?',
    answer: 'Sí. Todas las clases quedan grabadas y estarán disponibles durante tres meses a partir de la última sesión, para que puedas verlas cuantas veces quieras.',
  },
  {
    id: 102,
    question: '¿Cuánto tiempo tengo acceso al curso?',
    answer: 'Tienes acceso completo al curso Sugar Reset GLP-1 por tres meses.',
  },
  {
    id: 103,
    question: '¿Para quién está diseñado el curso?',
    answer: 'Está dirigido a cualquier persona interesada en salud y bienestar, así como a profesionales de la salud que deseen profundizar en el uso funcional del GLP-1.',
  },
  {
    id: 104,
    question: '¿Cuáles son los objetivos del curso?',
    answer: `El curso Sugar Reset GLP-1 te ayudará a:
● Regular glucosa e insulina para reducir antojos y mejorar tu metabolismo.
● Optimizar la función del GLP-1 mediante alimentación, hábitos y suplementación.
● Disminuir antojos de azúcar y romper el ciclo ansiedad–antojo–compulsión.
● Reducir inflamación, fatiga y malestar digestivo.
● Equilibrar tu microbiota y mejorar la comunicación intestino–cerebro.
● Proteger tu masa muscular aunque comas menos o uses GLP-1.
● Aprender a elegir alimentos correctos para un Plato GLP-1 sin inflamación.
● Prevenir efectos secundarios como náuseas, estreñimiento e hipoglucemia.
● Dominar estrategias como azúcar fasting, fibra inteligente y hacks metabólicos.
● Crear hábitos sostenibles que transformen tu relación con el azúcar.
● Ajustar dosis, suplementos y rutinas al usar GLP-1 para maximizar beneficios.
● Evitar el rebote al dejar GLP-1 y mantener el metabolismo activo y saciedad.
● Reprogramar apetito para comer por hambre real, no emocional.
● Diseñar un plan de alimentación y fuerza que puedas sostener meses o años.
● Construir un estilo de vida Sugar Reset que eleve tu energía y bienestar.`,
  },
  {
    id: 105,
    question: '¿Cuándo puedo descargar mi diploma?',
    answer: 'Podrás descargar tu diploma una vez que hayas visto todas las clases y descargado los materiales del curso.',
  },
  {
    id: 106,
    question: '¿Cuándo se sube la grabación de cada clase?',
    answer: 'La grabación se carga al día siguiente, alrededor del mediodía, y recibirás un correo avisando que ya está disponible.',
  },
  {
    id: 107,
    question: '¿Puedo descargar los videos?',
    answer: 'No. Los videos son propiedad del ISFMC, pero podrás verlos cuantas veces quieras durante tres meses.',
  },
  {
    id: 108,
    question: '¿Cómo ingreso al grupo de Telegram y Facebook?',
    answer: `Telegram: grupo informativo con contenido diario.
● Facebook: espacio para preguntar dudas, compartir fotos e interactuar con la
comunidad.
Un día antes de iniciar el curso recibirás los accesos a ambos grupos.
`,
  },
  {
    id: 109,
    question: '¿Puedo hacer preguntas a los ponentes?',
    answer: 'Sí. Al final de cada clase se destinan unos minutos para responder tus preguntas relacionadas con el tema.',
  },
  {
    id: 110,
    question: '¿Puedo descargar mi menú y recetario?',
    answer: 'Sí, puedes descargar e imprimir todos los materiales de apoyo del curso.',
  },
  {
    id: 111,
    question: '¿Al inscribirse se incluye el kit de suplementos?',
    answer: 'No, el kit de suplementos no está incluido. Sin embargo, al inscribirte obtienes descuentos especiales para adquirirlos.',
  },
  {
    id: 112,
    question: '¿Es obligatorio iniciar el menú desde la clase 1?',
    answer: 'No. Puedes comenzar el menú cuando te sientas listo(a). Desde la primera clase tendrás todas las bases y herramientas para iniciarlo en el momento que mejor se adapte a ti.',
  },
  {
    id: 113,
    question: '¿El menú es vegano?',
    answer: 'No, el menú no es completamente vegano. Sin embargo, incluye varias opciones veganas y es posible adaptarlo fácilmente según tus necesidades.',
  },
  {
    id: 114,
    question: '¿Qué pasa si no tengo los ingredientes exactos del menú?',
    answer: 'No te preocupes. Puedes sustituirlos por ingredientes similares que tengas a la mano, siempre respetando la intención del plato.',
  },
  {
    id: 115,
    question: '¿Qué pasa si no adquiero el kit de suplementos?',
    answer: 'Puedes seguir tu menú y recetarios sin problema. Los suplementos no son obligatorios, aunque pueden acelerar y potenciar tus resultados. Sin ellos, el progreso simplemente puede ser un poco más lento.',
  },
  {
    id: 116,
    question: '¿Qué hago si ya pagué y no me llega el correo?',
    answer: 'Si ya realizaste tu pago y no has recibido tu correo de acceso, por favor escríbenos directamente al 55 7147 7728 y con gusto te ayudamos.',
  },
]);

// 4. Funciones de Control para el Acordeón A
const toggleFaqA = id => {
  openFaqAId.value = openFaqAId.value === id ? null : id; // Alterna el estado
};

const isFaqOpenA = id => {
  return openFaqAId.value === id;
};

// 5. Funciones de Control para el Acordeón B
const toggleFaqB = id => {
  openFaqBId.value = openFaqBId.value === id ? null : id; // Alterna el estado
};

const isFaqOpenB = id => {
  return openFaqBId.value === id;
};
</script>

<template>
  <section class="py-10 md:py-20 px-4">
    <div class="mx-auto flex max-w-7xl flex-col items-start gap-10 lg:flex-row">
      <div id="section5" class="w-full lg:sticky md:top-20 lg:w-5/12 lg:order-2" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <div class="flex flex-col items-center justify-center text-center gap-6 bg-white/90 rounded-[40px] shadow-[4px_4px_16px_0px_rgba(60,60,60,0.08)] border-2 border-teal-500 p-8 lg:p-12 w-full max-w-[505px] h-[908px] mx-auto">
          <h3 class="text-teal-700 text-3xl lg:text-4xl font-nexa-bold leading-tight">¡Inscríbete ahora y aprovecha nuestro precio de lanzamiento!</h3>
          <div class="flex flex-col items-center gap-1">
            <span class="text-zinc-700 text-lg font-thin font-nexa line-through">$4,800.00 MXN</span>
            <div class="flex items-baseline text-teal-700 font-nexa">
              <span class="text-xl font-thin mr-1">$</span>
              <span class="text-6xl font-black font-nexa-bold tracking-tight">3,500.</span>
              <sup class="text-3xl font-black font-nexa-bold top-[-0.5em]">00</sup>
              <span class="text-xl font-thin ml-2">MXN</span>
            </div>
            <span class="text-zinc-700 text-base font-thin font-nexa mt-2">Descuento por tiempo limitado</span>
          </div>
          <a href="#" class="flex items-center gap-2 bg-gradient-to-r from-violet-950 to-violet-700 rounded-3xl shadow-[0px_0px_4px_0px_rgba(0,0,0,0.56)] font-nexa-bold text-lg text-white py-2 px-1.5 pl-10 transition-all duration-500">
            <span style="vertical-align: inherit"><span style="vertical-align: inherit">¡Regístrate aquí!</span></span>
            <i><img src="@/assets/img/icon-contacto.svg" class="pl-4 lg:pl-8" alt="icono contacto" /></i>
          </a>
          <img src="@/assets/img/SugarResetGLP1.svg" alt="Sugar Reset Logo" class="w-[233px] h-auto object-contain" loading="lazy" />
          <p class="max-w-[320px] text-zinc-700 text-sm font-thin font-nexa leading-tight">Paga a meses sin intereses con tarjetas de crédito participantes.</p>
          <img src="@/assets/img/pago.png" alt="Métodos de pago" class="w-[320px] h-auto object-contain" loading="lazy" />
        </div>
      </div>
      <div id="section4" class="flex flex-col gap-8 w-full flex-1 lg:w-7/12 lg:order-1" data-aos="fade-down" data-aos-anchor-placement="top-bottom">
        <div class="px-4 py-7 text-white rounded-[32px] sm:p-12 bg-temario">
          <h2 class="text-2xl mb-6">Temario</h2>
          <h3 class="text-4xl font-nexa-bold mb-6">¿Qué lograrás en Sugar Reset GLP-1: Reto de 21 Días?</h3>
          <div class="w-full">
            <div v-for="(faq, index) in faqsA" :key="faq.id">
              <div class="w-full p-6 mb-1 bg-white/60 rounded-2xl backdrop-blur-2xl" :class="{ 'bg-white/100': isFaqOpenA(faq.id) }">
                <div class="flex justify-between items-center w-full cursor-pointer" @click="toggleFaqA(faq.id)">
                  <div class="">
                    <p class="flex justify-center items-center text-white font-nexa-bold text-lg" :class="{ 'text-teal-700/100 font-semibold': isFaqOpenA(faq.id) }">
                      <span class="bg-gradient-to-b from-teal-700 to-teal-400 rounded-lg bg-teal-700 text-white p-2 w-8 h-8 mr-3 text-lg leading-4 font-nexa-bold">{{ index + 1 }}</span>
                      {{ faq.question }}
                    </p>
                  </div>
                  <button aria-label="toggler" class="">
                    <img class="transform dark:hidden transition duration-300" :class="{ 'rotate-180': isFaqOpenA(faq.id) }" src="@/assets/img/toggler.svg" alt="toggler" />
                    <img class="transform dark:block hidden transition duration-300" :class="{ 'rotate-180': isFaqOpenA(faq.id) }" src="@/assets/img/toggler.svg" alt="toggler" />
                  </button>
                </div>
                <div v-show="isFaqOpenA(faq.id)" class="mt-6 w-full">
                  <p class="text-base leading-6 text-black">
                    {{ faq.answer }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr class="w-full border-gray-400" />
        <div id="section6">
          <div class="px-4 py-7 rounded-[48px] bg-gray-100 sm:p-12">
            <h3 class="text-teal-700 text-3xl text-center lg:text-4xl font-nexa-bold leading-tight mb-6">Preguntas frecuentes</h3>
            <div class="w-full">
              <div v-for="(faq, index) in faqsB" :key="faq.id">
                <div class="w-full p-6 mb-1 bg-white rounded-2xl backdrop-blur-2xl" :class="{ '': isFaqOpenB(faq.id) }">
                  <div class="flex justify-between items-center w-full cursor-pointer" @click="toggleFaqB(faq.id)">
                    <div class="">
                      <p class="flex justify-center items-center text-teal-700 font-nexa-bold text-lg" :class="{ 'text-teal-700/100 font-semibold': isFaqOpenB(faq.id) }">
                        {{ faq.question }}
                      </p>
                    </div>
                    <button aria-label="toggler" class="">
                      <img class="transform dark:hidden transition duration-300" :class="{ 'rotate-180': isFaqOpenB(faq.id) }" src="@/assets/img/toggler.svg" alt="toggler" />
                      <img class="transform dark:block hidden transition duration-300" :class="{ 'rotate-180': isFaqOpenB(faq.id) }" src="@/assets/img/toggler.svg" alt="toggler" />
                    </button>
                  </div>
                  <div v-show="isFaqOpenB(faq.id)" class="mt-6 w-full">
                    <p class="text-base leading-6 text-black">
                      {{ faq.answer }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
