import Vue from 'vue'
import Router from 'vue-router'
import Vtour from '@/components/Vtour'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Vtour',
      component: Vtour
    }
  ]
})
