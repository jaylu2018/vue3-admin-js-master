import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  // 登录 
  {
    path: "/",
    name: "Login",
    component: () => import("../views/account/LoginRegister.vue")
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
