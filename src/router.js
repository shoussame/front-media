import Vue from "vue";
import VueRouter from "vue-router";
// component
const oeuvre = () => import("@/components/Oeuvre");
const adherent = () => import("@/components/Adherent");

Vue.use(VueRouter);

const routes = [
  {
    path: "/oeuvres",
    name: "oeuvre",
    component: oeuvre,
  },
  {
    path: "/adherents",
    name: "adherent",
    component: adherent,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
