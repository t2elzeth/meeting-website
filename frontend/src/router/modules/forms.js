import QuestionnaireAnswers from "@/views/forms/QuestionnaireAnswers";
import Questionnaires from "@/views/forms/QuestionnairesList";

export default [
  {
    path: '/questionnaires/:mode',
    name: 'questionnaires',
    meta: {
      requiresAuth: true
    },
    component: Questionnaires,
  },
  {
    path: '/answers/:mode',
    name: 'answers',
    meta: {
      requiresAuth: true
    },
    component: QuestionnaireAnswers,
  }
]