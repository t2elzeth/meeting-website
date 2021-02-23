import {createRouter, createWebHistory} from 'vue-router'
import auth from "@/utils/auth";

import Questionnaires from "@/views/forms/Questionnaires";

const SimpleRouterViewComponent = {
  template: `
  <div>
    <router-view></router-view>
  </div>
`
}

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import("@/views/Home")
  },
  {
    path: '/test',
    name: 'test',
    component: () => import("@/components/layout/Sidenav")
  },
  {
    path: '/users/',
    component: SimpleRouterViewComponent,
    children: [
      {
        path: ':id', //Страница для просмотра информаций аккаунта
        name: 'account-detail',
        meta: {
          requiresAuth: true
        },
        component: () => import("@/views/accounts/AccountDetail")
      },
      {
        path: 'login', //Авторизоваться (войти)
        name: 'login',
        component: () => import("@/views/accounts/Login")
      },
      {
        path: 'signup', //Зарегестрироваться
        name: 'signup',
        component: () => import("@/views/accounts/SignUp")
      },
      {
        path: 'settings', //Настройки
        name: 'settings',
        meta: {
          requiresAuth: true
        },
        component: () => import("@/views/accounts/Settings")
      },
      {
        path: 'logout',
        name: 'logout',
        meta: {
          requiresAuth: true
        },
        component: () => import("@/views/accounts/Logout")
      }
    ]
  },
  {
    path: '/questionnaires',
    meta: {
      requiresAuth: true
    },
    component: SimpleRouterViewComponent,
    children: [
      {
        path: '',
        name: 'allques',
        meta: {
          mode: "all",
          search: true
        },
        component: Questionnaires
      },
      {
        path: 'my',
        name: 'myques',
        meta: {
          mode: "my"
        },
        component: Questionnaires
      },
      {
        path: ':id/questions',
        name: 'questionnaire-questions',
        component: () => import("@/views/forms/Questions")
      },
      {
        path: 'tome', //Вам задали
        name: 'ansyou',
        meta: {
          mode: "to-me"
        },
        component: Questionnaires
      },
      {
        path: 'new', //Создать вопрос
        name: 'addques',
        component: () => import("@/views/forms/NewQuestionnaire")
      },
    ]
  },
  {
    path: '/answers',
    meta: {
      requiresAuth: true
    },
    component: SimpleRouterViewComponent,
    children: [
      {
        path: 'my', // Мои ответы
        name: 'myanswer',
        meta: {
          mode: "my"
        },
        component: () => import("@/views/forms/Answers")
      },
      {
        path: 'tome', //Вам ответили
        name: 'askyou',
        meta: {
          mode: "to-me"
        },
        component: () => import("@/views/forms/Answers")
      },
    ]
  },
  {
    path: '/support', // Тех. Поддержка
    name: 'support',
    meta: {
      requiresAuth: true
    },
    component: () => import("@/views/Support")
  },
  {
    path: '/search', //Страница поиска
    name: 'search',
    component: () => import("@/views/accounts/SearchAccounts")
  },
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
