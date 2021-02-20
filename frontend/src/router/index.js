import {createRouter, createWebHistory} from 'vue-router'
import auth from "@/utils/auth";

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import("@/views/Home")
  },
  {
    path: '/users/:id', //Страница для просмотра информаций аккаунта
    name: 'account-detail',
    meta: {
      requiresAuth: true
    },
    component: () => import("@/views/accounts/AccountDetail")
  },
  {
    path: '/questionnaires', //Все вопросы
    name: 'allques',
    meta: {
      requiresAuth: true
    },
    component: () => import("@/views/forms/AllQuestionnaires")
  },
  {
    path: '/questionnaires/:id/questions', //Посмотреть на свои вопросы (какого либо теста)
    name: 'questionnaire-questions',
    meta: {
      requiresAuth: true
    },
    component: () => import("@/views/forms/Questions")
  },
  {
    path: '/questionnaires/my', //Мои вопросы
    name: 'myques',
    meta: {
      requiresAuth: true
    },
    component: () => import("@/views/forms/MyQuestionnaires")
  },
  {
    path: '/questionnaires/tome', //Вам задали
    name: 'ansyou',
    meta: {
      requiresAuth: true
    },
    component: () => import("@/views/forms/QuestionnairesToMe")
  },
  {
    path: '/questionnaires/new', //Создать вопрос
    name: 'addques',
    meta: {
      requiresAuth: true
    },
    component: () => import("@/views/forms/CreateNewQuestionnaire")
  },
  {
    path: '/answers/:id', //Посмотреть на ответы человека который ответил на твой тест
    name: 'look-answer-human',
    meta: {
      requiresAuth: true
    },
    component: () => import("@/views/forms/Answers")
  },
  {
    path: '/answers/my', // Мои ответы
    name: 'myanswer',
    meta: {
      requiresAuth: true
    },
    component: () => import("@/views/forms/MyAnswers")
  },
  {
    path: '/answers/tome', //Вам ответили
    name: 'askyou',
    meta: {
      requiresAuth: true
    },
    component: () => import("@/views/forms/AnswersToMe")
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
    path: '/login', //Авторизоваться (войти)
    name: 'autorize',
    component: () => import("@/views/accounts/Login")
  },
  {
    path: '/signup', //Зарегестрироваться
    name: 'regis',
    component: () => import("@/views/accounts/SignUp")
  },
  {
    path: '/settings', //Настройки
    name: 'settings',
    meta: {
      requiresAuth: true
    },
    component: () => import("@/views/accounts/Settings")
  },
  {
    path: '/search', //Страница поиска
    name: 'search',
    component: () => import("@/views/accounts/SearchAccounts")
  },
  {
    path: "/",
    name: "404",
    component: () => import("@/views/404")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !auth.isAuthenticated()) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    next({name: "autorize"})

    return null;
  } else {
    next() // does not require auth
  }
})


export default router
