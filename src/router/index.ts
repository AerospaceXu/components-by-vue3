import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router';

import ComponentsPageComponent from '../views/components-page-component.vue';
import SwitchShowPageComponent from '../views/switch-show-page-component.vue';
import ButtonComponent from '../components/button-component.vue';
import DialogComponent from '../components/dialog-component.vue';
import TabsComponent from '../components/tabs-component.vue';

const history = createWebHistory(process.env.BASE_URL);

const routes: Array<RouteRecordRaw> = [
  {
    path: '/components',
    component: ComponentsPageComponent,
    children: [
      { path: 'switch', component: SwitchShowPageComponent },
      { path: 'button', component: ButtonComponent },
      { path: 'dialog', component: DialogComponent },
      { path: 'tabs', component: TabsComponent },
    ],
  },
  {
    path: '/about',
    component: () => import('../views/about-page-component.vue'),
  },
  { path: '/', redirect: '/components' },
];

export const router = createRouter({
  history,
  routes,
  linkActiveClass: 'router-active',
});
