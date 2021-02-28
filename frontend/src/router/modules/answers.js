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
        name: 'myanswer',
        meta: {
          mode: "my"
        },
        component: () => import("@/views/forms/QuestionnaireAnswers")
      },
      {
        path: 'tome', //Вам ответили
        name: 'askyou',
        meta: {
          mode: "to-me"
        },
        component: () => import("@/views/forms/QuestionnaireAnswers")
      },
    ]
  },
]