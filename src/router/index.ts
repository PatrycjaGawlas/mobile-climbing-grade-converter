import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomeView.vue';
import PrivacyView from '../views/PrivacyView.vue';
import CookiesView from '../views/CookiesView.vue';
import TermsView from '../views/TermsView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: PrivacyView
  },
  {
    path: '/cookies',
    name: 'Cookies',
    component: CookiesView
  },
  {
    path: '/terms',
    name: 'Terms',
    component: TermsView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router


