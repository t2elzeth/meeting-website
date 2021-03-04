import QuestionnaireAnswers from "@/views/forms/QuestionnaireAnswers";

export default [
  {
    path: '/answers/:mode',
    name: 'answers',
    meta: {
      requiresAuth: true
    },
    component: QuestionnaireAnswers,
  }
]