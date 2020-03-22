import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("../pages/Home.vue");
const Assessment = () => import("../pages/Assessment.vue");
const FinancialAid = () => import("../pages/FinancialAid.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/assessment",
    name: "assessment",
    component: Assessment
  },
  {
    path: "/financialaid",
    name: "financialaid",
    component: FinancialAid
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// const app = new Vue({
//   router
// }).$mount("#app");

export default router;

// export default {
//   computed: {
//     username() {
//       // We will see what `params` is shortly
//       return this.$route.params.username;
//     }
//   },
//   methods: {
//     goBack() {
//       window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
//     }
//   }
// };
