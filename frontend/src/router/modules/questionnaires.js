import Questionnaires from "@/views/forms/QuestionnairesList";

export default [
  {
    path: '/questionnaires/:mode',
    name: 'questionnaires',
    meta: {
      requiresAuth: true
    },
    component: Questionnaires,
  }
]