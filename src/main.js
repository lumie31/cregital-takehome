import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import axios from "axios";
import router from "./router";

// axios.defaults.headers["content-type"] = "application/json";
// axios.defaults.headers["accepts"] = "application/json";
axios.defaults.headers["Authorization"] =
  "563492ad6f91700001000001c857367b163049cdbd0a9b0924cb76ca";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
