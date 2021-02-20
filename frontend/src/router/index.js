import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import("@/views/Home")
  },
  {
    path: '/users/:id', //Страница для просмотра информаций аккаунта
    name: 'account-detail',
    component: () => import("@/pages/AccountDetail")
  },
  {
    path: '/questionnaires', //Все вопросы
    name: 'allques',
    component: () => import("@/pages/AllQuestionnaires")
  },
  {
    path: '/questionnaires/:id/questions', //Посмотреть на свои вопросы (какого либо теста)
    name: 'questionnaire-questions',
    component: () => import("@/pages/QuestionsOfQuestionnaire")
  },
  {
    path: '/questionnaires/my', //Мои вопросы
    name: 'myques',
    component: () => import("@/pages/MyQuestionnaires")
  },
  {
    path: '/questionnaires/tome', //Вам задали
    name: 'ansyou',
    component: () => import("@/pages/AnswerYou")
  },
  {
    path: '/questionnaires/new', //Создать вопрос
    name: 'addques',
    component: () => import("@/pages/CreateNewQuestionnaire")
  },
  {
    path: '/answers/:id', //Посмотреть на ответы человека который ответил на твой тест
    name: 'look-answer-human',
    component: () => import("@/pages/LookAnsHum")
  },
  {
    path: '/answers/my', // Мои ответы
    name: 'myanswer',
    component: () => import("@/pages/MyAnswers")
  },
  {
    path: '/answers/tome', //Вам ответили
    name: 'askyou',
    component: () => import("@/pages/AskedYou")
  },
  {
    path: '/support', // Тех. Поддержка
    name: 'support',
    component: () => import("@/pages/Support")
  },
  {
    path: '/login', //Авторизоваться (войти)
    name: 'autorize',
    component: () => import("@/pages/Login")
  },
  {
    path: '/signup', //Зарегестрироваться
    name: 'regis',
    component: () => import("@/pages/SignUp")
  },
  {
    path: '/settings', //Настройки
    name: 'settings',
    component: () => import("@/pages/Settings")
  },
  {
    path: '/search', //Страница поиска
    name: 'search',
    component: () => import("@/pages/SearchAccounts")
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
