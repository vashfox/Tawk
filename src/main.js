import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ViewUI from "view-design";
import "./registerServiceWorker";

Vue.config.productionTip = false;
Vue.config.silent = true;

Vue.use(ViewUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
