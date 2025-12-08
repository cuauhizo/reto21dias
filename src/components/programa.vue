<template>
  <section
    id="section4"
    class="container grid sm:grid-cols-12 gap-12 justify-items-center items-center py-10 md:py-20">
    <div
      class="col-span-full sm:col-span-8"
      data-aos="zoom-in-right"
      data-aos-anchor-placement="center-bottom">
      <h2 class="titulo-seccion">Programa</h2>
      <p class="titulo">Conoce la agenda y los horarios</p>
    </div>
    <div
      class="col-span-full sm:col-span-4"
      data-aos="zoom-in-left"
      data-aos-anchor-placement="center-bottom">
      <p>
        Descubre las pláticas que preparamos para ti con los temas principales en
        <span class="font-bold">tecnología e inclusión financiera</span>.
      </p>
    </div>
    <div
      class="col-span-full"
      data-aos="zoom-in"
      data-aos-anchor-placement="top-bottom">
      <div class="md:flex md:max-w-4xl mx-auto gap-10 ">
        <button
          class="w-full md:w-1/2 py-4 text-center text-lg font-extralight focus:outline-none"
          :class="{ 'active-tab-button': activeTab === 'tab1' }"
          @click="openTab('tab1')">
          <h3>Miércoles 3 de Septiembre</h3>
        </button>
        <button
          class="w-full md:w-1/2 py-4 text-center text-lg font-extralight focus:outline-none"
          :class="{ 'active-tab-button': activeTab === 'tab2' }"
          @click="openTab('tab2')">
          <h3>Jueves 4 de Septiembre</h3>
        </button>
      </div>
      <div
        id="tab2"
        class="tabcontent pt-4 lg:pt-20"
        :class="{ hidden: activeTab !== 'tab1' }">
        <div class="bg-programa rounded-3xl p-4 h-auto w-full md:w-auto lg:max-w-[636px]">
          <div
            v-for="programa1 in programaDia1"
            :key="programa1.id"
            class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            <div class="col  text-sm flex">
              <p class="">{{ programa1.horario }}</p>
            </div>
            <div class="col md:col-span-2  text-sm mb-4">
              <p class="font-normal leading-[1.237rem]">{{ programa1.actividad }}</p>
              <div
                v-if="programa1.name"
                class="flex items-center ">
                <div>
                  <p class="">{{ programa1.name }}</p>
                  <p class="text-sm">{{ programa1.title }}</p>
                </div>
              </div>
              <!-- Mostrar reparto si existe -->
              <div
                v-if="programa1.reparto"
                class="mt-4">
                <div
                  class="grid grid-cols-6 gap-3 mb-3  items-center"
                  v-for="(ponente, key) in programa1.reparto"
                  :key="key">
                  <p class="col-span-4">
                    {{ ponente.nombre }} <br />
                    <a
                      v-if="ponente.enlace"
                      :href="ponente.enlace"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-xs underline">
                      Ver Semblanza
                    </a>
                  </p>
                  <p class="col-span-2">{{ ponente.sofipo }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="tab3"
        class="tabcontent pt-4 lg:pt-20"
        :class="{ hidden: activeTab !== 'tab2' }">
        <div class="bg-programa rounded-3xl p-4 h-auto w-full md:w-auto lg:max-w-[636px]">
          <div
            v-for="programa2 in programaDia2"
            :key="programa2.id"
            class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            <div class="col  text-sm flex">
              <p class="">{{ programa2.horario }}</p>
            </div>
            <div class="col md:col-span-2  text-sm mb-4">
              <p class="font-normal leading-[1.237rem]">{{ programa2.actividad }}</p>
              <div
                v-if="programa2.name"
                class="flex items-center ">
                <div>
                  <p class="">{{ programa2.name }}</p>
                  <p class="text-sm">{{ programa2.title }}</p>
                </div>
              </div>
              <!-- Mostrar reparto si existe -->
              <div
                v-if="programa2.reparto"
                class="mt-4">
                <div
                  class="grid grid-cols-6 gap-3 mb-3  items-center"
                  v-for="(ponente, key) in programa2.reparto"
                  :key="key">
                  <p class="col-span-4">
                    {{ ponente.nombre }} <br />
                    <a
                      v-if="ponente.enlace"
                      :href="ponente.enlace"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-xs underline">
                      Ver Semblanza
                    </a>
                  </p>
                  <p class="col-span-2">{{ ponente.sofipo }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref } from 'vue';

  // `activeTab` es una ref reactiva que almacena el nombre de la pestaña actualmente activa.
  // La inicializamos con 'tab1' para que esa pestaña esté visible por defecto al cargar el componente.
  const activeTab = ref('tab1');

  /**
   * Función para cambiar la pestaña activa.
   * Vue se encarga automáticamente de actualizar el DOM cuando `activeTab.value` cambia.
   * @param {string} tabName - El identificador de la pestaña a activar (por ejemplo, 'tab1', 'tab2').
   */
  const openTab = (tabName) => {
    activeTab.value = tabName;
  };

  // Miércoles 3 de Septiembre
  const programaDia1 = ref([
    {
      id: 3,
      horario: '13:30 - 15:00',
      actividad: 'Comida',
      name: '',
      title: '',
    },
    {
      id: 4,
      horario: '15:00 - 15:45',
      actividad: 'Ceremonia Inaugural',
      name: '',
      title: '',
      reparto: {
        ponete1: {
          nombre: 'Dr. Alfredo Navarrete Martínez',
          // enlace: '/semblanzas/AMS_semblanza_Alfredo_Navarrete.pdf',
          sofipo: 'SHCP',
        },
        ponete2: {
          nombre: 'Dra. Galia Borja Gómez',
          // enlace: '/semblanzas/AMS_semblanza_Galia_Borja.pdf',
          sofipo: 'BANXICO',
        },
        ponete3: {
          nombre: 'Lic. Oscar Rosado Jiménez',
          // enlace: "/semblanzas/AMS_semblanza_Oscar_Rosado.pdf",
          sofipo: 'CONDUSEF',
        },
        ponete4: {
          nombre: 'Marlene Garayzar',
          // enlace: '/semblanzas/AMS_semblanza_Marlene_Garayzar.pdf',
          sofipo: 'AMS',
        },
      },
    },
    {
      id: 5,
      horario: '15:45 - 16:00',
      actividad: 'Receso',
      name: '',
      title: '',
    },
    {
      id: 6,
      horario: '16:00 - 17:00',
      actividad: 'El Valor de la confianza en la era digital',
      name: '',
      title: '',
      reparto: {
        ponete1: {
          nombre: 'Dr. Alejandro Moreno',
          // enlace: "",
          sofipo: '',
        },
      },
    },
    {
      id: 7,
      horario: '17:00 - 17:40',
      actividad: 'Panel: Factores de desarrollo en beneficio de la inclusión financiera',
      name: '',
      title: '',
      reparto: {
        ponete1: {
          nombre: 'Mtra. Karina Villanueva',
          // enlace: '',
          sofipo: 'UBVA',
        },
        ponete2: {
          nombre: 'Vidal Llerenas',
          // enlace: "",
          sofipo: 'Sría. Economía',
        },
        ponete3: {
          nombre: 'Alicia Salgado',
          // enlace: '/semblanzas/AMS_semblanza_Alicia_Salgado.pdf',
          sofipo: 'Moderador',
        },
      },
    },
    {
      id: 8,
      horario: '17:40 - 18:10',
      actividad: 'Receso',
      name: '',
      title: '',
      reparto: {
        ponete1: {
          nombre: '',
          // enlace: "",
          sofipo: '',
        },
      },
    },
    {
      id: 9,
      horario: '18:10 - 18:40',
      actividad: 'Red de mujeres en el sector financiero',
      name: '',
      title: '',
      reparto: {
        ponete1: {
          nombre: 'Marlene Garayzar',
          // enlace: '/semblanzas/AMS_semblanza_Marlene_Garayzar.pdf',
          sofipo: 'AMS',
        },
        ponete2: {
          nombre: 'Regina García Cuellar',
          // enlace: "",
          sofipo: 'ABM',
        },
        ponete3: {
          nombre: 'Dr. Alfredo Navarrete Martínez',
          // enlace: '/semblanzas/AMS_semblanza_Alfredo_Navarrete.pdf',
          sofipo: 'SHCP',
        },
      },
    },
    {
      id: 10,
      horario: '19:30 - 24:00',
      actividad: 'Coctel de Bienvenida',
      name: '',
      title: '',
      reparto: {
        ponete1: {
          nombre: '',
          // enlace: '',
          sofipo: '',
        },
        ponete2: {
          // nombre: "Regina García Cuellar",
          nombre: '',
          // enlace: "",
          sofipo: '',
        },
      },
    },
  ]);

  // Jueves 4 de Septiembre
  const programaDia2 = ref([
    {
      id: 1,
      horario: '7:30 - 8:30',
      actividad: 'Actividad de Integración',
      name: '',
      title: '',
      reparto: {},
    },
    {
      id: 2,
      horario: '9:30 - 10:10',
      actividad: 'Conferencia: El Uso de la tecnología y su impacto en la inclusión financiera',
      name: '',
      title: '',
      reparto: {
        ponete1: {
          nombre: 'Dr. Mauricio Rodríguez Abreu',
          // enlace: "/semblanzas/AMS_semblanza_Mauricio_Rodriguez.pdf",
          sofipo: 'INEGI',
        },
      },
    },
    {
      id: 3,
      horario: '10:10 - 10:50',
      actividad: 'La Banca de Desarrollo, trabajo cercano con las SOFIPOS',
      name: '',
      title: '',
      reparto: {
        ponete1: {
          nombre: 'Act. Alán Elizondo',
          // enlace: "",
          sofipo: 'FIRA',
        },
        ponete2: {
          nombre: 'Mtro. Javier Vázquez',
          // enlace: "",
          sofipo: 'Nafin',
        },
        ponete3: {
          nombre: 'Alicia Salgado',
          // enlace: '/semblanzas/AMS_semblanza_Alicia_Salgado.pdf',
          sofipo: 'Moderador',
        },
      },
    },
    {
      id: 4,
      horario: '10:50 - 11:10',
      actividad: 'Receso',
      name: '',
      title: '',
      reparto: {
        ponete1: {
          nombre: '',
          // enlace: "",
          sofipo: '',
        },
        ponete2: {
          nombre: '',
          // enlace: "",
          sofipo: '',
        },
      },
    },
    {
      id: 5,
      horario: '11:10 - 12:00',
      actividad: 'Fortaleciendo a las SOFIPOS: Panorama Actual y Perspectivas Regulatorias',
      name: '',
      title: '',
      reparto: {
        ponete1: {
          nombre: 'Dra. Lucia Buenrostro',
          // enlace: '/semblanzas/AMS_semblanza_Lucia_Buenrostro.pdf',
          sofipo: 'CNBV',
        },
        ponete2: {
          nombre: '',
          // enlace: "",
          sofipo: '',
        },
      },
    },
    {
      id: 6,
      horario: '12:00 - 12:50',
      actividad: 'Panel: Retos para el futuro de los Servicios Digitales',
      name: '',
      title: '',
      reparto: {
        ponete1: {
          nombre: 'Dr. Othón Moreno',
          // enlace: '/semblanzas/AMS_semblanza_Othon_Moreno.pdf',
          sofipo: 'Banxico',
        },
        ponete2: {
          nombre: 'Mary Pilly Loo',
          // enlace: "",
          sofipo: 'CNBV',
        },
        ponete3: {
          nombre: 'Jeanette Leyva',
          // enlace: '/semblanzas/AMS_semblanza_Jeanette_Leyva.pdf',
          sofipo: 'Moderador',
        },
      },
    },
    {
      id: 7,
      horario: '12:50 - 13:20',
      actividad: 'Receso',
      name: '',
      title: '',
      reparto: {},
    },
    {
      id: 8,
      horario: '13:20 - 14:00',
      actividad: 'Uso de IA para el fortalecimiento de la Infraestructura tecnológica',
      name: '',
      title: '',
      reparto: {
        ponete1: {
          nombre: 'Manuel Contreras',
          // enlace: "",
          sofipo: 'Oracle',
        },
        ponete2: {
          nombre: '',
          // enlace: "",
          sofipo: '',
        },
      },
    },
    {
      id: 9,
      horario: '14:00 - 15:30',
      actividad: 'Comida',
      name: '',
      title: '',
      reparto: {
        ponete1: {
          nombre: '',
          // enlace: "",
          sofipo: '',
        },
        ponete2: {
          nombre: '',
          // enlace: "",
          sofipo: '',
        },
      },
    },
    {
      id: 10,
      horario: '15:30 - 16:10',
      actividad: 'Panel: Las SOFIPOS fortaleciendo el ecosistema para las PYME',
      name: '',
      title: '',
      reparto: {
        ponete1: {
          nombre: 'Carlos Marmolejo',
          // enlace: "/semblanzas/AMS_semblanza_Carlos_Marmolejo.pdf",
          sofipo: 'Finsus',
        },
        ponete2: {
          nombre: 'Oscar Salcedo Yúdico',
          // enlace: '/semblanzas/AMS_semblanza_Oscar_Salcedo_Yudico.pdf',
          sofipo: 'ASP',
        },
        ponete3: {
          nombre: 'Alejandro Toiber',
          // enlace: "/semblanzas/AMS_semblanza_Alejandro_Toiber.pdf",
          sofipo: 'Xepelin',
        },
        ponete4: {
          nombre: 'Edgar Guerrero',
          // enlace: '',
          sofipo: 'Bienestar',
        },
        ponete5: {
          nombre: 'Marcela Galicia Fitch México',
          // enlace: "",
          sofipo: 'Moderador',
        },
      },
    },
    {
      id: 11,
      horario: '16:10 - 17:00',
      actividad: 'Panel: Transformando cómo te conectas con tu dinero',
      name: '',
      title: '',
      reparto: {
        ponete1: {
          nombre: 'Juan Francisco Fernández',
          // enlace: "/semblanzas/AMS_semblanza_Juan_Francisco_Fernandez.pdf",
          sofipo: 'Crediclub',
        },
        ponete2: {
          nombre: 'Juan Pablo Zorrilla',
          // enlace: '/semblanzas/AMS_semblanza_Juan_Pablo_Zorrilla.pdf',
          sofipo: 'SAE',
        },
        ponete3: {
          nombre: 'Stefhan Möller',
          // enlace: "",
          sofipo: 'Klar',
        },
      },
    },
    {
      id: 12,
      horario: '17:00 - 17:20',
      actividad: 'Receso',
      name: '',
      title: '',
      reparto: {
        ponete1: {
          nombre: '',
          // enlace: "",
          sofipo: '',
        },
        ponete2: {
          nombre: '',
          // enlace: "",
          sofipo: '',
        },
      },
    },
    {
      id: 13,
      horario: '17:20 - 18:00',
      actividad: 'Panel: Los 3 pilares de la regulación de las SOFIPOS',
      name: '',
      title: '',
      reparto: {
        ponete1: {
          nombre: 'Aurora Cervantes Martínez',
          // enlace: '/semblanzas/AMS_semblanza_Aurora_Cervantes_Martinez.pdf',
          sofipo: 'CNBV',
        },
        ponete2: {
          nombre: 'Elizabeth Noriega',
          // enlace: '/semblanzas/AMS_semblanza_Elizabeth_Noriega.pdf',
          sofipo: 'CONDUSEF',
        },
        ponete3: {
          nombre: 'Viviana Garza',
          // enlace: "",
          sofipo: 'Banxico',
        },
        ponete4: {
          nombre: 'Salomón Woldenberg',
          // enlace: "",
          sofipo: 'Moderador',
        },
      },
    },
    {
      id: 14,
      horario: '18:00 - 18:30',
      actividad: 'Clausura',
      // name: "Margarita Gonzalez Saravia",
      // title: "Gobernadora del Estado de Morelos",
      name: '',
      title: '',
      reparto: {
        ponete1: {
          nombre: 'Marlene Garayzar',
          // enlace: '/semblanzas/AMS_semblanza_Marlene_Garayzar.pdf',
          sofipo: 'AMS',
        },
        ponete2: {
          nombre: 'Lic. Ángel Cabrera Mendoza',
          // enlace: "",
          sofipo: 'CNBV',
        },
        ponete3: {
          nombre: 'Act. Alán Elizondo',
          // enlace: "",
          sofipo: 'FIRA',
        },
        ponete4: {
          nombre: 'Mto. Javier Vázquez',
          // enlace: "",
          sofipo: 'Nafin',
        },
      },
    },
    {
      id: 15,
      horario: '19:00 - 21:00',
      actividad: 'Coctel de Clausura',
      name: '',
      title: '',
      reparto: {
        ponete1: {
          nombre: '',
          // enlace: "",
          sofipo: '',
        },
        ponete2: {
          nombre: '',
          // enlace: "",
          sofipo: '',
        },
      },
    },
  ]);
</script>

<style scoped>
  .active-tab-button {
    /* background-color: #e5e7eb; */
    border-bottom: 1px solid #fff;
    font-weight: 400;
  }
</style>
