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
        name: 'questionnaires-all',
        meta: {
          mode: "all",
          search: true
        },
        component: Questionnaires
      },
      {
        path: 'my',
        name: 'questionnaires-my',
        meta: {
          mode: "my"
        },
        component: Questionnaires
      },
      {
        path: 'to-me', //Вам задали
        name: 'questionnaires-to-me',
        meta: {
          mode: "to-me"
        },
        component: Questionnaires
      }
    ]
  },
]