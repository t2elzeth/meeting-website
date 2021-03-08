import {getUrl} from "@/utils/api/utils";
import axios from "axios";
import store from '@/store/index'

const urls = {
  signUp: getUrl("api/v1/auth/users/"),
  login: getUrl("api/v1/auth/token/login/"),
  logout: getUrl("api/v1/auth/token/logout/"),
  whoAmI: getUrl("api/v1/auth/users/me/"),
  userDetail: userId => getUrl("api/v1/auth/users/", userId.toString()),
};

export async function login(data) {
  const responseData = (await axios.post(urls.login, data)).data
  store.commit('setCredentials', responseData)
}

export async function logout() {
  await axios.post(urls.logout, {}, store.getters.credentials)
  store.commit('removeCredentials')
}

export async function editAccount(data) {
  return (await axios.patch(urls.whoAmI, data, store.getters.credentials)).data
}

export async function whoAmI() {
  if (!store.getters.isAuthenticated) return {}

  return (await axios.get(urls.whoAmI, store.getters.credentials)).data
}

export async function signUp(data) {
  return (await axios.post(urls.signUp, data)).data
}

export async function userDetail(id) {
  if (!store.getters.isAuthenticated) return {}

  return (await axios.get(urls.userDetail(id), store.getters.credentials)).data
}