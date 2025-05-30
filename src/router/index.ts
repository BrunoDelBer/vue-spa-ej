import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/modules/landing/pages/HomePage.vue';

export const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: '/',
         name: 'home',
         component: HomePage,
      },
      {
         path: '/features',
         name: 'features',
         // route level code-splitting
         // this generates a separate chunk (About.[hash].js) for this route
         // which is lazy-loaded when the route is visited.
         component: () => import('@/modules/landing/pages/FeaturesPage.vue'),
      },
      {
         path: '/pricing',
         name: 'pricing',
         // route level code-splitting
         // this generates a separate chunk (About.[hash].js) for this route
         // which is lazy-loaded when the route is visited.
         component: () => import('@/modules/landing/pages/PricingPage.vue'),
      },
      {
         path: '/contact',
         name: 'contact',
         // route level code-splitting
         // this generates a separate chunk (About.[hash].js) for this route
         // which is lazy-loaded when the route is visited.
         component: () => import('@/modules/landing/pages/ContactPage.vue'),
      },
   ],
});

export default router;
