import axios from "axios";

const urljoin = require("url-join");
const auth = require("./auth").default

export const apiServer = "http://127.0.0.1:8001/";

function getUrl(...args) {
  return urljoin(apiServer, ...args)
}

const urls = {
  signUp: getUrl("api/v1/auth/users/"),
  login: getUrl("api/v1/auth/token/login/"),
  logout: getUrl("api/v1/auth/token/logout/"),
  whoAmI: getUrl("api/v1/auth/users/me/"),
  userDetail: userId => getUrl("api/v1/auth/users/", userId.toString()),
  allQues: getUrl("api/v1/forms/questionnaires/"),
  sendQuestionnaire: questionnaireId => getUrl("api/v1/forms/questionnaires/", questionnaireId.toString(), "send/"),
  receivedQuestionnaires: getUrl("api/v1/forms/questionnaires/received/"),
  myAnswers: getUrl("api/v1/forms/answers/my/"),
  myQuestionnaires: getUrl("api/v1/forms/questionnaires/my/"),
  answersToMyQuestionnaires: getUrl("api/v1/forms/answers/to_my_questionnaires/"),
  quesionnairyDetail: questionnaireId => getUrl("api/v1/forms/questionnaires/", questionnaireId.toString()),
  answerDetail: answerId => getUrl("api/v1/forms/answers/", answerId.toString()),
  ansQues: questionnaireId => getUrl("api/v1/forms/questionnaires/", questionnaireId.toString(), "answer/"),
  addQues: getUrl("api/v1/forms/questionnaires/")
};

export async function questionnaires(mode, params = {}) {
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

export async function answerDetail(id) {
  return (await axios.get(urls.answerDetail(id), auth.getCredentials())).data
}

export async function answersToMyQuestionnaires() {
  return (await axios.get(urls.answersToMyQuestionnaires, auth.getCredentials())).data
}

export async function myAnswers() {
  return (await axios.get(urls.myAnswers, auth.getCredentials())).data
}

export async function questions(id) {
  return (await axios.get(urls.quesionnairyDetail(id), auth.getCredentials())).data
}

export async function userDetail(id) {
  return (await axios.get(urls.userDetail(id), auth.getCredentials())).data
}

export async function sendQuestionnaire(to_user, questionnaireId) {
  await axios.post(urls.sendQuestionnaire(questionnaireId), {to_user}, auth.getCredentials())
}

export async function login(data) {
  const responseData = (await axios.post(urls.login, data)).data
  auth.setCredentials(responseData)
}

export async function logout() {
  await axios.post(urls.logout, {}, auth.getCredentials())
  auth.removeToken()
}

export async function editAccount(data) {
  return (await axios.patch(urls.whoAmI, data, auth.getCredentials())).data
}

export async function whoAmI() {
  return (await axios.get(urls.whoAmI, auth.getCredentials())).data
}

export async function signUp(data) {
  return (await axios.post(urls.signUp, data)).data
}

export async function answerToQuestionnaire(answers, questionnaireId) {
  return (await axios.post(urls.ansQues(questionnaireId), {answers}, auth.getCredentials())).data
}

export async function receivedQuestionnaires() {
  return (await axios.get(urls.receivedQuestionnaires, auth.getCredentials())).data
}
