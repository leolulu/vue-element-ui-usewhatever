import Vue from 'vue'
import Router from 'vue-router'
import mainpage from './components/mainpage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainpage',
      component: mainpage,
      children:[
        {
          path:'/module1',
          component:()=>import('./components/page1.vue')
        }
      ]
    },
    {
      path: '/page1',
      name: 'page1',
      component: () => import(/* webpackChunkName: "about" */ './components/page1.vue')
    }
  ]
})
