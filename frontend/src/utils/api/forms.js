import axios from "axios";

import auth from "@/utils/auth";
import {getUrl} from "@/utils/api/utils";

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
  if (!auth.isAuthenticated()) return []

  if (mode === "to-me") {
    return (await axios.get(urls.questionnairesReceived, auth.getCredentials())).data
  } else if (mode === "all") {
    return (await axios.get(urls.questionnairesAll, {...auth.getCredentials(), params: {...params}})).data
  } else if (mode === "my") {
    return (await axios.get(urls.questionnairesMy, auth.getCredentials())).data
  }
}

export async function newQuestionnaire(data) {
  await axios.post(urls.questionnaireCreate, data, auth.getCredentials())
}

export async function answers(mode) {
  if (!auth.isAuthenticated()) return []

  if (mode === "to-me") {
    return (await axios.get(urls.answersToMe, auth.getCredentials())).data
  } else if (mode === "my") {
    return (await axios.get(urls.answersMy, auth.getCredentials())).data
  }
}

export async function questions(id) {
  if (!auth.isAuthenticated()) return []

  return (await axios.get(urls.questionnaireDetail(id), auth.getCredentials())).data
}

export async function sendQuestionnaire(to_user, questionnaireId) {
  await axios.post(urls.sendQuestionnaire(questionnaireId), {to_user}, auth.getCredentials())
}

export async function answerToQuestionnaire(answers, questionnaireId) {
  if (!auth.isAuthenticated()) return {}

  return (await axios.post(urls.questionnaireAnswer(questionnaireId), {answers}, auth.getCredentials())).data
}

export async function receivedQuestionnaires() {
  if (!auth.isAuthenticated()) return []

  return (await axios.get(urls.questionnairesReceived, auth.getCredentials())).data
}
