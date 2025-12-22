import { ViteSSG } from 'vite-ssg';
import App from './App.vue';
import router from './router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './assets/main.css';

export const createApp = ViteSSG(
  App,
  {
    routes: router.options.routes,
    // AQUÍ AGREGAMOS EL COMPORTAMIENTO DE SCROLL
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      }
      if (to.hash) {
        return {
          el: to.hash,
          behavior: 'smooth',
        };
      }
      // Si no es ancla ni botón atrás, ir arriba
      return { top: 0, behavior: 'smooth' }; 
    },
  },
  ({ app, router, routes, isClient, initialState }) => {
    app.use(router);
    if (isClient) {
      AOS.init({});
    }
  }
);
