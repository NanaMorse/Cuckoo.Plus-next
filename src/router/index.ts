import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { RoutersInfo } from '@/constant'
import OAuthPage from '@/views/OAuth.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: RoutersInfo.empty.path,
    redirect: RoutersInfo.oauth.path
  },

  {
    path: RoutersInfo.oauth.path,
    name: RoutersInfo.oauth.name,
    component: OAuthPage,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
