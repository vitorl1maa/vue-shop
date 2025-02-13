import { createRouter, createWebHistory } from 'vue-router';
import ShirtsList from "@/pages/ShirtsList.vue";
import MuscleShirtsList from "@/pages/MuscleShirtsList.vue";
import CheckoutPage from "@/pages/CheckoutPage.vue"

const routes = [
  {
    path: '/',
    name: 'Shirts',
    component: ShirtsList
  },
  {
    path: '/tank-tops',
    name: 'TankTops',
    component: MuscleShirtsList
  },
  {
    path: '/checkout',
    name: 'CheckoutPage',
    component: CheckoutPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
