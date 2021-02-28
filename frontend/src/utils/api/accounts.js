import {getUrl} from "@/utils/api/utils";
import auth from "@/utils/auth";
import axios from "axios";

const urls = {
  signUp: getUrl("api/v1/auth/users/"),
  login: getUrl("api/v1/auth/token/login/"),
  logout: getUrl("api/v1/auth/token/logout/"),
  whoAmI: getUrl("api/v1/auth/users/me/"),
  userDetail: userId => getUrl("api/v1/auth/users/", userId.toString()),
};

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
  if (!auth.isAuthenticated()) return {}

  return (await axios.get(urls.whoAmI, auth.getCredentials())).data
}

export async function signUp(data) {
  return (await axios.post(urls.signUp, data)).data
}

export async function userDetail(id) {
  if (!auth.isAuthenticated()) return {}

  return (await axios.get(urls.userDetail(id), auth.getCredentials())).data
}