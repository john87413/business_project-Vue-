import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import Home from './views/Home.vue'
import Brand from './views/Brand.vue'
import News from './views/News.vue'
import Drinks from './views/Drinks.vue'
import Store from './views/Store.vue'
import Contact from './views/Contact.vue'
import Join from './views/Join.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'Main',
      component: Main,
      children: [
        {path: '/', component: Home},
        {path: '/home/brand', component: Brand},
        {path: '/home/news', component: News},
        {path: '/home/drinks', component: Drinks},
        {path: '/home/store', component: Store},
        {path: '/home/contact', component: Contact},
        {path: '/home/join', component: Join},
      ],
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '*', 
      redirect: '/'
    },
  ]
})
