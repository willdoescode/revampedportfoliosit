import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueClipboard from "vue-clipboard2";
import VueScrollProgressBar from "@guillaumebriday/vue-scroll-progress-bar";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueClipboard);
Vue.use(VueScrollProgressBar);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
