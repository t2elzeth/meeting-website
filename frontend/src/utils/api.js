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

export default urls
