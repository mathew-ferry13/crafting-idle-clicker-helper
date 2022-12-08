import { createRouter, createWebHistory } from "vue-router";
import BlueprintCountView from "../views/BlueprintCountView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/events/BASE",
    },
    {
      path: "/events/:type",
      name: "event",
      component: BlueprintCountView,
      props: (route) => ({
        type: route.params.type,
      }),
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
