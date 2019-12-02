import Vue from 'vue';
import App from './App.vue';
import router from '../../router/detail';
// import store from './store';
import 'lib-flexible/flexible';
import '../../components/index';

import { Toast, Button } from 'vant';

// window.onresize = resizeFontSize;
// resizeFontSize();
Vue.use(Toast).use(Button);

new Vue({
  el: '#app',
  router,
  // store,
  components: {
    App
  },
  template: `<App/>`
});