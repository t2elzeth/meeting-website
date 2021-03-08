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

export const signUp = async data => (await axios.post(urls.signUp, data)).data
export const editAccount = async data => (await axios.patch(urls.whoAmI, data, store.getters.credentials)).data
export const login = async data => (await axios.post(urls.login, data)).data
export const logout = async () => await axios.post(urls.logout, {}, store.getters.credentials)

export async function whoAmI() {
  if (!store.getters.isAuthenticated) return {}

  return (await axios.get(urls.whoAmI, store.getters.credentials)).data
}

export async function userDetail(id) {
  if (!store.getters.isAuthenticated) return {}

  return (await axios.get(urls.userDetail(id), store.getters.credentials)).data
}