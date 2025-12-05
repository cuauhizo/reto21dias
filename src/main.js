import { ViteSSG } from 'vite-ssg'; // Importar de 'vite-ssg'
import App from './App.vue';
import router from './router'; // Importa tu archivo de router
import AOS from 'aos';
import 'aos/dist/aos.css';
import './assets/main.css';

// Tu código para scroll y sección activa probablemente se moverá a App.vue o a un plugin
// Sin embargo, para mantenerlo por ahora, lo adaptaremos un poco.

export const createApp = ViteSSG(
  App,
  {
    routes: router.options.routes, // Pasamos las rutas del router
    // Puedes configurar la base de la URL si es necesario
    // base: import.meta.env.BASE_URL,
  },
  ({ app, router, routes, isClient, initialState }) => {
    // Instalar plugins de Vue como Vue Router
    app.use(router);

    // Puedes mover la inicialización de AOS aquí, o en un componente de nivel superior como App.vue
    if (isClient) {
      AOS.init();
    }

    // Si tenías lógica para scroll o sección activa, considérala moverla.
    // La lógica actual en tu main.js de desplazamiento y sección activa podría requerir refactorización.
    // Idealmente, la gestión de secciones activas y desplazamiento debería estar en un componente o un hook de Vue.
    // Aquí un ejemplo muy básico de cómo integrar la lógica de AOS:
    if (isClient) {
        AOS.init({
            // tus opciones de AOS
        });
    }

    // Para la lógica de scroll y sección activa, es mejor que uses los hooks de Vue Router
    // o lo manejes dentro de un layout o componente principal.
    // Por ejemplo, para el scroll, puedes usar router.afterEach:
    // router.afterEach((to, from) => {
    //   if (isClient) {
    //     window.scrollTo({ top: 0, behavior: 'smooth' });
    //   }
    // });
  }
);