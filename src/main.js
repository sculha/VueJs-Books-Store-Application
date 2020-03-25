import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { router } from "./router";
import axios from "axios";

axios.defaults.baseURL = 'https://my-project-3d4ba.firebaseio.com';

export const eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
