import Questionnaires from "@/views/forms/QuestionnairesList";
import SimpleRouterView from "@/components/SimpleRouterView";

export default [
  {
    path: '/questionnaires',
    meta: {
      requiresAuth: true
    },
    component: SimpleRouterView,
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
        component: () => import("@/views/forms/QuestionnaireCreate")
      },
    ]
  },
]