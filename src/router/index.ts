import { createWebHistory, createRouter } from 'vue-router';

import AboutComponent from '../pages/about-component.vue';
import ComponentsComponent from '../pages/components-component.vue';
import SwitchShowComponent from '../pages/switch-show-component.vue';
import ButtonComponent from '../components/button-component.vue';
import DialogComponent from '../components/dialog-component.vue';
import TabsComponent from '../components/tabs-component.vue';

const history = createWebHistory();
const router = createRouter({
  history,
  routes: [
    {
      path: '/components', component: ComponentsComponent, children: [
        { path: 'switch', component: SwitchShowComponent },
        { path: 'button', component: ButtonComponent },
        { path: 'dialog', component: DialogComponent },
        { path: 'tabs', component: TabsComponent },
      ],
    },
    { path: '/about', component: AboutComponent },
    { path: '/', redirect: '/components' },
  ],
});

export default router;
