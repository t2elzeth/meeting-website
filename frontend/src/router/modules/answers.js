import SimpleRouterView from "@/components/SimpleRouterView";

export default [
  {
    path: '/answers',
    meta: {
      requiresAuth: true
    },
    component: SimpleRouterView,
    children: [
      {
        path: 'my', // Мои ответы
        name: 'answers-my',
        meta: {
          mode: "my"
        },
        component: () => import("@/views/forms/QuestionnaireAnswers")
      },
      {
        path: 'to-me', //Вам ответили
        name: 'answers-to-me',
        meta: {
          mode: "to-me"
        },
        component: () => import("@/views/forms/QuestionnaireAnswers")
      },
    ]
  },
]