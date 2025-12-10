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
  },
  ({ app, router, routes, isClient, initialState }) => {
    app.use(router);
    if (isClient) {
      AOS.init({});
    }
  }
);
