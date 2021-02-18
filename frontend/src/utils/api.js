const urljoin = require("url-join");

export const apiServer = "http://127.0.0.1:8001/";

const urls = {
  signUp: urljoin(apiServer, "api/v1/auth/users/"),
  login: urljoin(apiServer, "api/v1/auth/token/login/"),
  logout: urljoin(apiServer, "api/v1/auth/token/logout/"),
  whoAmI: urljoin(apiServer, "api/v1/auth/users/me/"),
  userDetail: userId => urljoin(apiServer, "api/v1/auth/users/", userId.toString()),
  myQuestionnaires: userId => urljoin(apiServer, "api/v1/auth/users/", userId.toString(), "questionnaires/"),
  sendQuestionnaire: userId => urljoin(apiServer, "api/v1/auth/users/", userId.toString(), "send_questionnaire/"),
  receivedQuestionnaires: userId => urljoin(apiServer, "api/v1/auth/users/", userId.toString(), "received_questionnaires/"),
  allQues: urljoin(apiServer, "api/v1/forms/questionnaires/"),
  quesDetail: questionnaireId => urljoin(apiServer, "api/v1/forms/questionnaires/", questionnaireId.toString()),
  ansQues: questionnaireId => urljoin(apiServer, "api/v1/forms/questionnaires/", questionnaireId.toString(), "answer/"),
  addQues: urljoin(apiServer, "api/v1/forms/questionnaires/")
};

export default urls
