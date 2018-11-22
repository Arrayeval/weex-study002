import Vue from 'vue';
import weex from 'weex-vue-render';
// import router from '@/routers'
// import {IsPC} from '@/utils/common'

// if (IsPC) {
//   const App = require('@/index.vue')
//   new Vue(Vue.util.extend({el: '#root', router}, App))
//   router.push('/')
// } else {
//   weex.init(Vue);
// }
weex.init(Vue);
const App = require('..\\..\\src\\components\\MusicPlay.vue');
new Vue(Vue.util.extend({el: '#root'}, App));
