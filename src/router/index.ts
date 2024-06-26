import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/group",
    name: "group",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GroupData.vue"),
  },
];

const router = createRouter({
  history: createWebHistory('/fruits'),
  routes,
});

export default router;
