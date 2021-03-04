import SimpleRouterView from "@/components/SimpleRouterView";

export default [
  {
    path: '/accounts/',
    component: SimpleRouterView,
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
]