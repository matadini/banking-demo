import { createRouter, createWebHistory } from "vue-router";
import DashboardComponent from "@/components/dashboard/DashboardComponent.vue";
import PaymentsUnsupported from "@/components/payments/PaymentsUnsupported.vue";
import PaymentsWrapper from "@/components/payments/PaymentsWrapper.vue";
import PaymentsNew from "@/components/payments/PaymentsNew.vue";
import PaymentsOwn from "@/components/payments/PaymentsOwn.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      component: DashboardComponent,
    },
    {
      path: '/payments', component: PaymentsWrapper,
      children: [
        { path: 'new', component: PaymentsNew },
        { path: 'own', component: PaymentsOwn },
        {
          path: '/:patchMatch(.*)*',
          component: PaymentsUnsupported,
        },
      ],
    },
    {
      path: '/:patchMatch(.*)*',
      component: PaymentsUnsupported,
    },
  ],
});

export default router;
