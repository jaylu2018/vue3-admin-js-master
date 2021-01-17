import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  // 登录 
  {
    path: "/",
    name: "Login",
    component: () => import("../views/acount/Login.vue")
  },
  // 注册 
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/acount/Register.vue")
  },
  // 忘记密码 
  {
    path: "/forget",
    name: "Forget",
    component: () => import("../views/acount/Forget.vue")
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
