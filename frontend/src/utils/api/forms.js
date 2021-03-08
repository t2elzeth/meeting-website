import axios from "axios";

import {getUrl} from "@/utils/api/utils";
import store from '@/store/index'

const urls = {
  questionnairesAll: getUrl("api/v1/forms/questionnaires/"),
  questionnairesReceived: getUrl("api/v1/forms/questionnaires/received/"),
  questionnairesMy: getUrl("api/v1/forms/questionnaires/my/"),
  questionnaireCreate: getUrl("api/v1/forms/questionnaires/"),
  sendQuestionnaire: questionnaireId => getUrl("api/v1/forms/questionnaires/", questionnaireId.toString(), "send/"),
  questionnaireAnswer: questionnaireId => getUrl("api/v1/forms/questionnaires/", questionnaireId.toString(), "answer/"),
  questionnaireDetail: questionnaireId => getUrl("api/v1/forms/questionnaires/", questionnaireId.toString()),

  answersMy: getUrl("api/v1/forms/answers/my/"),
  answersToMe: getUrl("api/v1/forms/answers/to_my_questionnaires/"),
};

export async function questionnaires(mode, params = {}) {
  if (!store.getters.isAuthenticated) return []

  if (mode === "to-me") {
    return (await axios.get(urls.questionnairesReceived, store.getters.credentials)).data
  } else if (mode === "all") {
    return (await axios.get(urls.questionnairesAll, {...store.getters.credentials, params: {...params}})).data
  } else if (mode === "my") {
    return (await axios.get(urls.questionnairesMy, store.getters.credentials)).data
  }
}

export const newQuestionnaire = async data => await axios.post(urls.questionnaireCreate, data, store.getters.credentials)
export const sendQuestionnaire = async (to_user, questionnaireId) =>
    await axios.post(urls.sendQuestionnaire(questionnaireId), {to_user}, store.getters.credentials)

export async function answers(mode) {
  if (!store.getters.isAuthenticated) return []

  if (mode === "to-me") {
    return (await axios.get(urls.answersToMe, store.getters.credentials)).data
  } else if (mode === "my") {
    return (await axios.get(urls.answersMy, store.getters.credentials)).data
  }
}

export async function questions(id) {
  if (!store.getters.isAuthenticated) return []

  return (await axios.get(urls.questionnaireDetail(id), store.getters.credentials)).data
}

export async function answerToQuestionnaire(answers, questionnaireId) {
  if (!store.getters.isAuthenticated) return {}

  return (await axios.post(urls.questionnaireAnswer(questionnaireId), {answers}, store.getters.credentials)).data
}

export async function receivedQuestionnaires() {
  if (!store.getters.isAuthenticated) return []

  return (await axios.get(urls.questionnairesReceived, store.getters.credentials)).data
}
