import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Rank from '@/components/rank/rank'
import Singer from '@/components/singer/singer'
import Recommend from '@/components/recommend/recommend'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '/rank',
          name: 'rank',
          component: Rank
        },
        {
          path: '/recommend',
          name: 'recommend',
          component: Recommend
        },
        {
          path: '/singer',
          name: 'singer',
          component: Singer
        }
      ]
    }
  ]
})
