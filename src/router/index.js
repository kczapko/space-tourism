import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Crew from "../views/Crew.vue";
import Destination from "../views/Destination.vue";
import Technology from "../views/Technology.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/destination",
    name: "destination",
    component: Destination,
  },
  {
    path: "/crew",
    name: "crew",
    component: Crew,
  },
  {
    path: "/technology",
    name: "technology",
    component: Technology,
  },
  // {
  // path: "/about",
  // name: "About",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
