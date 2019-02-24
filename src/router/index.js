import Vue from 'vue'
import Router from 'vue-router'
import home from "../components/home.vue"
Vue.use(Router)
import hero from "../components/nav/Hero.vue"
import pifu from "../components/nav/pifu.vue"
import zhanji from "../components/nav/zhanji.vue"
import bisai from "../components/nav/bisai.vue"
import register from "../components/nav/register.vue"
import login from "../components/nav/login.vue"
import liebiao from "../components/nav/Hero-Children/liebiao.vue"
import tuku from "../components/nav/Hero-Children/tuku.vue"
export default new Router({
 // mode: 'history',
  mode: 'hash',
  routes: [
    {path:"/",redirect:"/home"},
    {path:"/home",component:home},
    {
      path:"/home/hero",
      component:hero,
      children:[
        {path:"liebiao",component:liebiao},
        {path:"tuku",component:tuku}
      ]
    },
    {path:"/home/pifu",
      component:pifu
    },
    {
      path:"/home/zhanji",
      component:zhanji
    },
    {path:"/home/bisai",component:bisai},
    {path:"/register",component:register},
    {path:"/login",component:login}
  ]
})
