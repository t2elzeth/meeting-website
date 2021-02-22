import {createRouter, createWebHistory} from 'vue-router'
import auth from "@/utils/auth";

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
    component: () => import("@/views/Test")
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
        component: () => import("@/views/forms/Questionnaires")
      },
      {
        path: ':id/questions',
        name: 'questionnaire-questions',
        component: () => import("@/views/forms/Questions")
      },
      {
        path: 'my',
        name: 'myques',
        component: () => import('@/views/forms/MyQuestionnaires')
      },
      {
        path: 'tome', //Вам задали
        name: 'ansyou',
        component: () => import("@/views/forms/QuestionnairesToMe")
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
        path: ':id', //Посмотреть на ответы человека который ответил на твой тест
        name: 'look-answer-human',
        component: () => import("@/views/forms/Answers")
      },
      {
        path: 'my', // Мои ответы
        name: 'myanswer',
        component: () => import("@/views/forms/MyAnswers")
      },
      {
        path: 'tome', //Вам ответили
        name: 'askyou',
        component: () => import("@/views/forms/AnswersToMe")
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
