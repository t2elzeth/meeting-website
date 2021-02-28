import axios from "axios";

import auth from "@/utils/auth";
import {getUrl} from "@/utils/api/utils";

const urls = {
  allQues: getUrl("api/v1/forms/questionnaires/"),
  sendQuestionnaire: questionnaireId => getUrl("api/v1/forms/questionnaires/", questionnaireId.toString(), "send/"),
  receivedQuestionnaires: getUrl("api/v1/forms/questionnaires/received/"),
  myAnswers: getUrl("api/v1/forms/answers/my/"),
  myQuestionnaires: getUrl("api/v1/forms/questionnaires/my/"),
  answersToMyQuestionnaires: getUrl("api/v1/forms/answers/to_my_questionnaires/"),
  quesionnairyDetail: questionnaireId => getUrl("api/v1/forms/questionnaires/", questionnaireId.toString()),
  ansQues: questionnaireId => getUrl("api/v1/forms/questionnaires/", questionnaireId.toString(), "answer/"),
  addQues: getUrl("api/v1/forms/questionnaires/")
};

export async function questionnaires(mode, params = {}) {
  if (!auth.isAuthenticated()) return []

  if (mode === "to-me") {
    return (await axios.get(urls.receivedQuestionnaires, auth.getCredentials())).data
  } else if (mode === "all") {
    return (await axios.get(urls.allQues, {...auth.getCredentials(), params: {...params}})).data
  } else if (mode === "my") {
    return (await axios.get(urls.myQuestionnaires, auth.getCredentials())).data
  }
}

export async function newQuestionnaire(data) {
  await axios.post(urls.addQues, data, auth.getCredentials())
}

export async function answers(mode) {
  if (!auth.isAuthenticated()) return []

  if (mode === "to-me") {
    return (await axios.get(urls.answersToMyQuestionnaires, auth.getCredentials())).data
  } else if (mode === "my") {
    return (await axios.get(urls.myAnswers, auth.getCredentials())).data
  }
}

export async function questions(id) {
  if (!auth.isAuthenticated()) return []

  return (await axios.get(urls.quesionnairyDetail(id), auth.getCredentials())).data
}

export async function sendQuestionnaire(to_user, questionnaireId) {
  await axios.post(urls.sendQuestionnaire(questionnaireId), {to_user}, auth.getCredentials())
}

export async function answerToQuestionnaire(answers, questionnaireId) {
  if (!auth.isAuthenticated()) return {}

  return (await axios.post(urls.ansQues(questionnaireId), {answers}, auth.getCredentials())).data
}

export async function receivedQuestionnaires() {
  if (!auth.isAuthenticated()) return []

  return (await axios.get(urls.receivedQuestionnaires, auth.getCredentials())).data
}
