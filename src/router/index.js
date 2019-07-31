import Vue from 'vue'
import Router from 'vue-router'
import hello from '@/components/HelloWorld'
import smshome from '@/components/smshome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: hello
    },
    {
      path: '/sms',
      name: 'smshome',
      component: smshome
    }
  ]
})
