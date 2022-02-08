/*
 * @Author : vshow
 * @Date   : 2021-06-19 22:04
 * @WeChat : i-vshow
 * @Email  : vshow@dooomi.com
 * @Blog   : http://dooomi.com
 */

import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const context = require.context('@locales', false, /\.json$/);

const messages = context.keys().reduce((prev, key) => {
  const language = key.replace(/\.\/|\.json/g, '');
  prev[language] = context(key);
  return prev;
}, {});

const createI18n = ({ vuex_common }) =>
  new VueI18n({
    locale: vuex_common.language,
    messages
  });

export { createI18n };
