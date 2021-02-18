import {createRouter, createWebHashHistory} from 'vue-router'

import MainPage from '../pages/MainPage' //Главная
import Myques from '../pages/Myques' //Мои вопросы
import Allques from '../pages/Allques' //Все вопросы
import Myanswer from '../pages/Myanswer' //Мои ответы
import AskedYou from '../pages/AskedYou' //Вам ответили
import AnswerYou from '../pages/AnswerYou' //Вам задали
import Support from '../pages/Support' //Тех. поддержка
import Addques from '../pages/Addques' //Создать вопрос
import LookAns from '../pages/LookAns' //Посмотреть на вопрос (то на что ты уже ответил)
import LookAnsList from '../pages/LookAnsList' //Посмотреть на список людей которые ответили на этот тест
import LookAnsHum from '../pages/LookAnsHum' //Посмотреть на ответы человека который ответил на этот тест
import LookYouQuestion from '../pages/LookYouQuestion' //Посмотреть на вопросы которые ты составил
import SignUp from '../pages/SignUp' //Регистрация
import Authorize from '../pages/Authorize' //Авторизация
import Settings from '../pages/Settings' //Настройки
import AnsQues from '../pages/AnsQues' //Ответить на тест
import Search from '../pages/Search' //Страница поиска
import LookaccList from '../pages/LookaccList' //Страница с результатами поиска людей
import Lookacc from '../pages/AccountDetail' //Страница с информацией аккаунта (другого человека)

const routes = [
  {
    path: '/', //Главная
    name: 'main',
    component: MainPage
  },
  {
    path: '/my-questions', //Мои вопросы
    name: 'myques',
    component: Myques
  },
  {
    path: '/all-questions', //Все вопросы
    name: 'allques',
    component: Allques
  },
  {
    path: '/my-answers', // Мои ответы
    name: 'myanswer',
    component: Myanswer
  },
  {
    path: '/you-asked', //Вам ответили
    name: 'askyou',
    component: AskedYou
  },
  {
    path: '/you-answer', //Вам задали
    name: 'ansyou',
    component: AnswerYou
  },
  {
    path: '/support', // Тех. Поддержка
    name: 'support',
    component: Support
  },
  {
    path: '/add-question', //Создать вопрос
    name: 'addques',
    component: Addques
  },
  {
    path: '/look-answer', //Посмотреть на ответы (то на что ты уже ответил)
    name: 'look-answer',
    component: LookAns
  },
  {
    path: '/look-list-answers', //Посмотреть на список людей которые ответили на твой вопрос
    name: 'look-list-ans',
    component: LookAnsList
  },
  {
    path: '/look-answer-human', //Посмотреть на ответы человека который ответил на твой тест
    name: 'look-answer-human',
    component: LookAnsHum
  },
  {
    path: '/look-your-question', //Посмотреть на свои вопросы (какого либо теста)
    name: 'look-you-question',
    component: LookYouQuestion
  },
  {
    path: '/login', //Авторизоваться (войти)
    name: 'autorize',
    component: Authorize
  },
  {
    path: '/signup', //Зарегестрироваться
    name: 'regis',
    component: SignUp
  },
  {
    path: '/settings', //Настройки
    name: 'settings',
    component: Settings
  },
  {
    path: '/answered-on-question', //Ответить на вопрос
    name: 'ansques',
    component: AnsQues
  },
  {
    path: '/search', //Страница поиска
    name: 'search',
    component: Search
  },
  {
    path: '/look-acc-list', //Страница со списком людей от поиска
    name: 'lookacc-list',
    component: LookaccList
  },
  {
    path: '/look-account', //Страница для просмотра информаций аккаунта
    name: 'lookacc',
    component: Lookacc
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
