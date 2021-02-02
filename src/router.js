import Vue from "vue";
import VueRouter from "vue-router";
// component
const oeuvre = () => import("@/components/Oeuvre");

Vue.use(VueRouter);

const routes = [
  {
    path: "/oeuvres",
    name: "oeuvre",
    component: oeuvre,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
