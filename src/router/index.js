import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/index/compnents/Home';
import Detail from '../pages/index/compnents/Detail.vue';

Vue.use(Router);
export default new Router({
  mode: 'hash',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
  ]
});
