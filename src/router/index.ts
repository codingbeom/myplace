import AboutVue from "@/views/About.vue";
import ContactVue from "@/views/Contact.vue";
import IndexVue from "@/views/Index.vue";
import MyHomeVue from "@/views/MyHome.vue";
import NotFoundVue from "@/views/NotFound.vue";
import ServiceVue from "@/views/Service.vue";
import SkillVue from "@/views/Skill.vue";
import TestVue from "@/views/Test.vue";
import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import { ROUTER_NAME } from "./route.name";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: ROUTER_NAME.ROOT,
    component: IndexVue,
    children: [
      {
        path: "",
        name: ROUTER_NAME.HOME,
        component: MyHomeVue,
      },
      {
        path: "/about",
        name: ROUTER_NAME.ABOUT,
        component: AboutVue,
      },
      {
        path: "/service",
        name: ROUTER_NAME.SERVICE,
        component: ServiceVue,
      },
      {
        path: "/skill",
        name: ROUTER_NAME.SKILL,
        component: SkillVue,
      },
      {
        path: "/contact",
        name: ROUTER_NAME.CONTACT,
        component: ContactVue,
      },
      {
        path: "/test",
        name: ROUTER_NAME.TEST,
        component: TestVue,
      },
    ],
  },
  // {
  //   path: "/:pathMatch(.*)*",
  //   name: ROUTER_NAME.NOTFOUND,
  //   component: NotFoundVue,
  // },
];

const router = createRouter({
  history: createWebHistory("/myplace/"),
  routes,
});

export default router;
