import Router from 'vue-router'
import Vue from 'vue';
Vue.use(Router)

import Demo from "@/components/Demo"
import HelloWorld from "@/components/HelloWorld"
let router = new Router({
  mode: 'abstract',
  routes: [
    { // 
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    { // 
      path: '/Demo',
      name: 'Demo',
      component: Demo
    }
  ]
})

export default router
