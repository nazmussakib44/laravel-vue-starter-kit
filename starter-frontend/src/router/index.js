import { createRouter, createWebHistory } from "vue-router";
import home from "@/views/home";
import login from "@/views/login";
import registration from "@/views/registration";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => home,
  },
  {
    path: "/login",
    name: "login",
    component: () => login,
  },
  {
    path: "/registration",
    name: "registration",
    component: () => registration,
  },
  // {
  //   path: "/dashboard",
  //   name: "dashboard",
  //   component: () => dashboard,
  //   meta: { requiresAuth: true } //add this meta to enable router gurd for pages of only logged in users
  // },
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
     if(!localStorage.getItem('token')) {
        next({
           path: '/login',
        });
     }
     next();
  } else {
     next();
  }
});

export default router;
