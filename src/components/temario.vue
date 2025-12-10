<script setup>
import { ref } from 'vue'

// ----------------------------------------------------
// DATOS: Temario (Acordeón A)
// Nota: Agregué clases de Tailwind directamente en el HTML string
// para asegurar que los bullets se vean (list-disc pl-5).
// ----------------------------------------------------
const faqsA = ref([
  {
    id: 1,
    question: 'GLP-1: El hack metabólico que todos usan (y pocos entienden)',
    answer: `
      <ul class="list-disc pl-5 space-y-2 text-zinc-700">
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
    answer: `
      <ul class="list-disc pl-5 space-y-2 text-zinc-700">
        <li>Cómo el GLP-1 cambia tu digestión y tu hambre.</li>
        <li>La verdad sobre tu segundo cerebro y la conexión intestino-cerebro.</li>
        <li>Las bacterias que te ayudan a perder grasa… y las que te la sabotean.</li>
        <li>Motilidad lenta: cómo evitar que la semaglutida te “pare” el estómago.</li>
        <li>Protocolo de fibra inteligente para GLP-1: sin inflamación y sin malestar.</li>
        <li>¿Por qué el estreñimiento aparece? Soluciones funcionales reales.</li>
        <li>Cómo preparar al intestino para un plan Sugar Reset.</li>
        <li>Hábitos que transforman la microbiota en 7 días.</li>
      </ul>
    `,
  },
  {
    id: 3,
    question: 'Come para nutrirte no para inflamarse',
    answer: `
      <ul class="list-disc pl-5 space-y-2 text-zinc-700">
        <li>El “Plato GLP-1”: la fórmula para comer menos sin perder la salud.</li>
        <li>Proteínas anti pérdida muscular: cómo elegir la correcta para ti.</li>
        <li>¿Qué carbohidratos sí y cuáles no?</li>
        <li>Azúcar: cómo romper el ciclo hambre–ansiedad–antojo.</li>
        <li>Menú funcional para 21 días (estructura y distribución).</li>
        <li>Suplementación obligada y opcional:</li>
          <ul class="list-disc pl-8 space-y-2 text-zinc-700">
            <li>proteína vegana</li>
            <li>magnesio</li>
            <li>omega 3</li>
            <li>electrolitos</li>
            <li>colágeno + glicina</li>
            <li>akkermansia</li>
            <li>omega</li>
            <li>berberina</li>
            <li> Vinagre de manzana orgánico </li>
            <li>Canela</li>
          </ul>
        <li>Cómo prevenir náuseas, reflujo y diarrea desde la comida.</li>
        <li>Estrategia “Sugar Fasting”: apagando antojos desde la raíz.</li>
      </ul>
    `,
  },
  {
    id: 4,
    question: 'Tu cuerpo está cambiando: cómo evitar perder masa muscular',
    answer: `
    <ul class="list-disc pl-5 space-y-2 text-zinc-700">
        <li>¿Por qué el GLP-1 te hace perder músculo? (La explicación que nadie da).</li>
        <li>Cómo calcular tu proteína exacta según tu peso.</li>
        <li>El triángulo dorado: proteína + fuerza + descanso.</li>
        <li>Rutinas simples para casa que SÍ funcionan con GLP-1.</li>
        <li>Cómo mantener el metabolismo activo aunque comas menos.</li>
        <li>Colágeno, creatina, electrolitos y aminoácidos: cuándo sí y cuándo no. </li>
        <li>Cómo evitar la “flacidez GLP-1”: cuidado de colágeno, piel y tono muscular</li>
      </ul>
    `,
  },
  {
    id: 5,
    question: 'SOS GLP-1: Sobrevive (y gana) a los efectos secundarios',
    answer: `
    <ul class="list-disc pl-5 space-y-2 text-zinc-700">
      <li>Náuseas: causas y protocolos de alivio inmediato.</li>
      <li>Estreñimiento: soluciones rápidas y preventivas.</li>
      <li>Inflamación abdominal: cómo evitarla desde la comida.</li>
      <li>Mareos, hipoglucemia y fatiga.</li>
      <li>7 señales de alarma que NO debes ignorar.</li>
      <li>Cómo ajustar la dosis y evitar picos de malestar.</li>
      <li>Cuándo consultar médico (de forma clara y responsable).</li>
      <li>Rutina de autocuidado digestivo para quienes usan GLP-1.</li>
    </ul>
    `,
  },
  {
    id: 6,
    question: 'Salida segura: Cómo mantenerte delgado(a), fuerte y estable por meses (o años)',
    answer: `
    <ul class="list-disc pl-5 space-y-2 text-zinc-700">
      <li>Por qué la mayoría rebota al dejar GLP-1… y cómo evitarlo.</li>
      <li>Estrategia de salida 30/60/90 días.</li>
      <li>Cómo mantener la saciedad sin medicamento.</li>
      <li>Qué comer al salir del GLP-1: proteína, fibra y glucosa estable.</li>
      <li>Reprogramación del apetito: comer por hambre real, no emocional.</li>
      <li>Hábitos ancla (los que más predicen éxito a largo plazo).</li>
      <li>Rutina básica de fuerza para mantener tu nuevo metabolismo.</li>
      <li>Cómo seguir un plan Sugar Reset sin volver a caer en la adicción al dulce.</li>
      <li>Mantenimiento emocional y mental: evitar sabotaje, ansiedad y culpa.</li>
    </ul>
    `,
  },
])

// ----------------------------------------------------
// DATOS: Preguntas Frecuentes (Acordeón B)
// ----------------------------------------------------
const faqsB = ref([
  {
    id: 101,
    question: '¿Quedarán grabadas las clases?',
    answer: '<p>Sí. Todas las clases quedan grabadas y estarán disponibles durante tres meses a partir de la última sesión, para que puedas verlas cuantas veces quieras.</p>',
  },
  {
    id: 102,
    question: '¿Cuánto tiempo tengo acceso al curso?',
    answer: '<p>Tienes acceso completo al curso Sugar Reset GLP-1 por tres meses.</p>',
  },
  {
    id: 103,
    question: '¿Para quién está diseñado el curso?',
    answer: '<p>Está dirigido a cualquier persona interesada en salud y bienestar, así como a profesionales de la salud que deseen profundizar en el uso funcional del GLP-1.</p>',
  },
  {
    id: 104,
    question: '¿Cuáles son los objetivos del curso?',
    // Convertí tu lista de texto a HTML real para mejor estilo
    answer: `
      <p class="mb-2">El curso Sugar Reset GLP-1 te ayudará a:</p>
      <ul class="list-disc pl-5 space-y-1 text-zinc-700">
        <li>Regular glucosa e insulina para reducir antojos y mejorar tu metabolismo.</li>
        <li>Optimizar la función del GLP-1 mediante alimentación, hábitos y suplementación.</li>
        <li>Disminuir antojos de azúcar y romper el ciclo ansiedad–antojo–compulsión.</li>
        <li>Reducir inflamación, fatiga y malestar digestivo.</li>
        <li>Equilibrar tu microbiota y mejorar la comunicación intestino–cerebro.</li>
        <li>Proteger tu masa muscular aunque comas menos o uses GLP-1.</li>
        <li>Aprender a elegir alimentos correctos para un Plato GLP-1 sin inflamación.</li>
        <li>Prevenir efectos secundarios como náuseas, estreñimiento e hipoglucemia.</li>
        <li>Dominar estrategias como azúcar fasting, fibra inteligente y hacks metabólicos.</li>
        <li>Crear hábitos sostenibles que transformen tu relación con el azúcar.</li>
        <li>Ajustar dosis, suplementos y rutinas al usar GLP-1 para maximizar beneficios.</li>
        <li>Evitar el rebote al dejar GLP-1 y mantener el metabolismo activo y saciedad.</li>
        <li>Reprogramar apetito para comer por hambre real, no emocional.</li>
        <li>Diseñar un plan de alimentación y fuerza que puedas sostener meses o años.</li>
        <li>Construir un estilo de vida Sugar Reset que eleve tu energía y bienestar.</li>
      </ul>
    `,
  },
  {
    id: 105,
    question: '¿Cuándo puedo descargar mi diploma?',
    answer: '<p>Podrás descargar tu diploma una vez que hayas visto todas las clases y descargado los materiales del curso.</p>',
  },
  {
    id: 106,
    question: '¿Cuándo se sube la grabación de cada clase?',
    answer: '<p>La grabación se carga al día siguiente, alrededor del mediodía, y recibirás un correo avisando que ya está disponible.</p>',
  },
  {
    id: 107,
    question: '¿Puedo descargar los videos?',
    answer: '<p>No. Los videos son propiedad del ISFMC, pero podrás verlos cuantas veces quieras durante tres meses.</p>',
  },
  {
    id: 108,
    question: '¿Cómo ingreso al grupo de Telegram y Facebook?',
    answer: `
      <ul class="list-disc pl-5 space-y-1 mb-2">
        <li><strong>Telegram:</strong> grupo informativo con contenido diario.</li>
        <li><strong>Facebook:</strong> espacio para preguntar dudas, compartir fotos e interactuar con la comunidad.</li>
      </ul>
      <p>Un día antes de iniciar el curso recibirás los accesos a ambos grupos.</p>
    `,
  },
  {
    id: 109,
    question: '¿Puedo hacer preguntas a los ponentes?',
    answer: '<p>Sí. Al final de cada clase se destinan unos minutos para responder tus preguntas relacionadas con el tema.</p>',
  },
  {
    id: 110,
    question: '¿Puedo descargar mi menú y recetario?',
    answer: '<p>Sí, puedes descargar e imprimir todos los materiales de apoyo del curso.</p>',
  },
  {
    id: 111,
    question: '¿Al inscribirse se incluye el kit de suplementos?',
    answer: '<p>No, el kit de suplementos no está incluido. Sin embargo, al inscribirte obtienes descuentos especiales para adquirirlos.</p>',
  },
  {
    id: 112,
    question: '¿Es obligatorio iniciar el menú desde la clase 1?',
    answer: '<p>No. Puedes comenzar el menú cuando te sientas listo(a). Desde la primera clase tendrás todas las bases y herramientas para iniciarlo en el momento que mejor se adapte a ti.</p>',
  },
  {
    id: 113,
    question: '¿El menú es vegano?',
    answer: '<p>No, el menú no es completamente vegano. Sin embargo, incluye varias opciones veganas y es posible adaptarlo fácilmente según tus necesidades.</p>',
  },
  {
    id: 114,
    question: '¿Qué pasa si no tengo los ingredientes exactos del menú?',
    answer: '<p>No te preocupes. Puedes sustituirlos por ingredientes similares que tengas a la mano, siempre respetando la intención del plato.</p>',
  },
  {
    id: 115,
    question: '¿Qué pasa si no adquiero el kit de suplementos?',
    answer: '<p>Puedes seguir tu menú y recetarios sin problema. Los suplementos no son obligatorios, aunque pueden acelerar y potenciar tus resultados. Sin ellos, el progreso simplemente puede ser un poco más lento.</p>',
  },
  {
    id: 116,
    question: '¿Qué hago si ya pagué y no me llega el correo?',
    answer: '<p>Si ya realizaste tu pago y no has recibido tu correo de acceso, por favor escríbenos directamente al <a href="https://wa.me/5571477728" class="text-teal-600 font-bold hover:underline">55 7147 7728</a> y con gusto te ayudamos.</p>',
  },
])

// ----------------------------------------------------
// LÓGICA COMPARTIDA DE ACORDEÓN (Refactorización)
// ----------------------------------------------------
const openFaqAId = ref(null)
const openFaqBId = ref(null)

const toggleFaq = (group, id) => {
  if (group === 'A') {
    openFaqAId.value = openFaqAId.value === id ? null : id
  } else {
    openFaqBId.value = openFaqBId.value === id ? null : id
  }
}

const isFaqOpen = (group, id) => {
  return group === 'A' ? openFaqAId.value === id : openFaqBId.value === id
}
</script>

<template>
  <section class="py-10 md:py-20 px-4 relative">
    <div class="mx-auto flex max-w-7xl flex-col items-start gap-10 lg:flex-row">
      <div id="section5" class="w-full lg:sticky lg:top-24 lg:w-5/12 lg:order-2 z-10" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
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

      <div id="section4" class="flex flex-col gap-12 w-full flex-1 lg:w-7/12 lg:order-1" data-aos-anchor-placement="top-bottom">
        <div class="px-6 py-10 text-white rounded-[32px] bg-temario shadow-lg" data-aos="fade-down">
          <h2 class="text-2xl mb-4 font-thin">Temario</h2>
          <h3 class="text-4xl font-nexa-bold mb-6 leading-tight">¿Qué lograrás en Sugar Reset GLP-1: Reto de 21 Días?</h3>

          <div class="space-y-1">
            <div v-for="(faq, index) in faqsA" :key="faq.id" class="overflow-hidden rounded-2xl transition-all duration-300" :class="isFaqOpen('A', faq.id) ? 'bg-white shadow-md' : 'bg-white/60 backdrop-blur-3xl'">
              <button class="flex justify-between items-center w-full p-5 text-left focus:outline-none" @click="toggleFaq('A', faq.id)" :aria-expanded="isFaqOpen('A', faq.id)">
                <div class="flex items-center gap-4 pr-4">
                  <span
                    class="flex-shrink-0 flex items-center justify-center w-8 h-8 bg-gradient-to-b from-teal-700 to-teal-400 rounded-lg bg-teal-700 text-white font-nexa-bold text-sm transition-colors"
                    :class="isFaqOpen('A', faq.id) ? 'bg-teal-700 text-white' : 'bg-white/30 text-white'">
                    {{ index + 1 }}
                  </span>
                  <span class="font-nexa-bold text-lg leading-snug transition-colors" :class="isFaqOpen('A', faq.id) ? 'text-teal-700' : 'text-white'">
                    {{ faq.question }}
                  </span>
                </div>

                <img src="@/assets/img/toggler.svg" alt="Toggle" class="w-6 h-6 transition-transform duration-300 flex-shrink-0" :class="{ 'rotate-180': isFaqOpen('A', faq.id), '': !isFaqOpen('A', faq.id) }" />
              </button>

              <div v-show="isFaqOpen('A', faq.id)" class="px-6 pb-6 pt-0 text-base leading-relaxed text-gray-700 animate-fadeIn">
                <div v-html="faq.answer"></div>
              </div>
            </div>
          </div>
        </div>

        <hr class="border-gray-300/50" />

        <div id="section6" data-aos="fade-up">
          <div class="px-6 py-10 rounded-[48px] bg-gray-50/80 border border-gray-100">
            <h3 class="text-teal-700 text-3xl text-center md:text-4xl font-nexa-bold mb-8">Preguntas frecuentes</h3>

            <div class="space-y-1">
              <div v-for="faq in faqsB" :key="faq.id" class="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <button class="flex justify-between items-center w-full p-5 text-left focus:outline-none" @click="toggleFaq('B', faq.id)">
                  <span class="font-nexa-bold text-lg text-teal-700 pr-4">
                    {{ faq.question }}
                  </span>
                  <img src="@/assets/img/toggler.svg" alt="Toggle" class="w-6 h-6 transition-transform duration-300 flex-shrink-0" :class="{ 'rotate-180': isFaqOpen('B', faq.id) }" />
                </button>

                <div v-show="isFaqOpen('B', faq.id)" class="px-6 pb-6 pt-0 text-gray-600 text-base leading-relaxed">
                  <div v-html="faq.answer"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Animación suave para el contenido */
.animate-fadeIn {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Background para la sección de temario si no tienes la clase global */
.bg-temario {
  background-color: #3a3a82; /* Fallback color */
  /* background-image: url('@/assets/img/bg-temario.png'); */ /* Descomentar si tienes la imagen */
  background-size: cover;
  background-position: center;
}
</style>
