import {createRouter, createWebHistory} from 'vue-router'
import auth from "@/utils/auth";

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import("@/views/Home")
  },
  ...require("./modules/accounts").default,
  ...require("./modules/forms").default,
  ...require("./modules/support").default,
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import("@/views/404")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(to => {
  if (to.matched.some(record => record.meta.requiresAuth) && !auth.isAuthenticated()) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return {name: "login"};
  }
  return true // does not require auth
})


export default router
