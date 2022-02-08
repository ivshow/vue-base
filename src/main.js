/*
 * @Author : vshow
 * @Date   : 2020-09-26 12:09
 * @WeChat : i-vshow
 * @Email  : vshow@dooomi.com
 * @Blog   : http://dooomi.com
 */

import Vue from 'vue';
import App from './App';
import Doui, { Vuex } from 'doui-vue';
import { router, createI18n } from './plugins';
import { vuexConfig } from './common';
import './components';
import './service';
import './utils';
import './styles';

Vue.use(Doui);

const { store } = new Vuex(vuexConfig);

new Vue({
  router,
  store,
  i18n: createI18n(store.state),
  render: h => h(App)
}).$mount('#app');
