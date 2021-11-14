import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/scss/main.scss";

const init = async () => {
  const app = createApp(App);
  app.use(router);

  await router.isReady();

  app.mount("body");
};

init();
