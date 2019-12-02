import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/detail/compnents/Home';
import Son from '../pages/detail/compnents/Son';

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
      path: '/Son',
      name: 'Son',
      component: Son
    }
  ]
});
