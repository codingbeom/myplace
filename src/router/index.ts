import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import { ROUTER_NAME } from "./route.name";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/404",
    name: ROUTER_NAME.NOTFOUND,
    component: () => import("@/views/NotFound.vue"),
  },
  {
    path: "/",
    name: ROUTER_NAME.ROOT,
    component: () => import("@/views/Index.vue"),
    children: [
      {
        path: "",
        name: ROUTER_NAME.HOME,
        component: () => import("@/views/MyHome.vue"),
      },
      {
        path: "/about",
        name: ROUTER_NAME.ABOUT,
        component: () => import("@/views/About.vue"),
      },
      {
        path: "/service",
        name: ROUTER_NAME.SERVICE,
        component: () => import("@/views/Service.vue"),
      },
      {
        path: "/skill",
        name: ROUTER_NAME.SKILL,
        component: () => import("@/views/Skill.vue"),
      },
      {
        path: "/contact",
        name: ROUTER_NAME.CONTACT,
        component: () => import("@/views/Contact.vue"),
      },
      {
        path: "/test",
        name: ROUTER_NAME.TEST,
        component: () => import("@/views/Test.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
