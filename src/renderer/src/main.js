// import './assets/main.css'

import { createApp } from "vue";
import App from "./App.vue";

import { createI18n } from "vue-i18n";
import VueResizeObserver from "vue-resize-observer";

createApp(App).mount("#app");

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "cn",
  messages: {
    en: {
      message: {
        hello: "hello world",
      },
      warning: {
        stop: "stop",
      },
      label: {
        l1: "Port",
      },
    },
    cn: {
      message: {
        hello: "こんにちは、世界",
      },
      warning: {
        stop: "こ",
      },
      label: {
        l1: "串口",
      },
    },
  },
});

const app = createApp({
  App,
  directives: { resize: VueResizeObserver },
});

app.use(i18n);
app.mount("#app");
