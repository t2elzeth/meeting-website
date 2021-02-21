import axios from "axios";
import auth from "@/utils/auth";

const urljoin = require("url-join");

export const apiServer = "http://127.0.0.1:8001/";

const urls = {
  signUp: urljoin(apiServer, "api/v1/auth/users/"),
  login: urljoin(apiServer, "api/v1/auth/token/login/"),
  logout: urljoin(apiServer, "api/v1/auth/token/logout/"),
  whoAmI: urljoin(apiServer, "api/v1/auth/users/me/"),
  userDetail: userId => urljoin(apiServer, "api/v1/auth/users/", userId.toString()),
  allQues: urljoin(apiServer, "api/v1/forms/questionnaires/"),
  sendQuestionnaire: questionnaireId => urljoin(apiServer, "api/v1/forms/questionnaires/", questionnaireId.toString(), "send/"),
  receivedQuestionnaires: urljoin(apiServer, "api/v1/forms/questionnaires/received/"),
  myAnswers: urljoin(apiServer, "api/v1/forms/answers/my/"),
  myQuestionnaires: urljoin(apiServer, "api/v1/forms/questionnaires/my/"),
  answersToMyQuestionnaires: urljoin(apiServer, "api/v1/forms/answers/to_my_questionnaires/"),
  quesionnairyDetail: questionnaireId => urljoin(apiServer, "api/v1/forms/questionnaires/", questionnaireId.toString()),
  answerDetail: answerId => urljoin(apiServer, "api/v1/forms/answers/", answerId.toString()),
  ansQues: questionnaireId => urljoin(apiServer, "api/v1/forms/questionnaires/", questionnaireId.toString(), "answer/"),
  addQues: urljoin(apiServer, "api/v1/forms/questionnaires/")
};

export async function getQuestionnairesList(params) {
  return (await axios.get(urls.allQues, {...auth.getCredentials(), params: {...params}})).data
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

export async function myQuestionnaires() {
  return (await axios.get(urls.myQuestionnaires, auth.getCredentials())).data
}

export async function questionnairesToMe() {
  return (await axios.get(urls.receivedQuestionnaires, auth.getCredentials())).data
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
  await axios.post(urls.login, {}, auth.getCredentials())
  auth.removeToken()
}

export async function editAccount(data) {
  return (await axios.patch(urls.whoAmI, data, auth.getCredentials())).data
}

export async function signUp(data) {
  return (await axios.post(urls.signUp, data)).data
}

export async function answerToQuestionnaire(answers, questionnaireId) {
  return (await axios.post(urls.ansQues(questionnaireId), {answers})).data
}
