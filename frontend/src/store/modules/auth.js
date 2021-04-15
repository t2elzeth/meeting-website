const api = require("@/utils/api/index").default
const tokenKey = "token";


const state = {
  me: JSON.parse(localStorage.getItem("me") || "{}"),
  testState: "FUCK YOU BITHC"
}

const mutations = {
  setMeData(state, payload) {
    localStorage.setItem("me", JSON.stringify(payload))
  },
  deleteMeData() {
    localStorage.setItem("me", JSON.stringify({}))
  },
}

const actions = {
  async setMeState(state) {
    const res = await api.whoAmI()
    state.commit("setMeData", res)
  },

  async setCredentials(state, payload) {
    await localStorage.setItem(tokenKey, payload["auth_token"])
  },
  async removeCredentials(state) {
    await localStorage.removeItem(tokenKey)
    state.commit("deleteMeData")
  },

  async login(state, formData) {
    const res = await api.login(formData)
    await state.dispatch('setCredentials', res)
    await state.dispatch('setMeState')
  },
  async logout(state) {
    await api.logout()
    await state.dispatch('removeCredentials')
  }
}

const getters = {
  me(state) {
    return state.me
  },
  token() {
    return localStorage.getItem(tokenKey)
  },

  credentials(state, getters) {
    return {headers: {Authorization: `Token ${getters.token}`}};
  },

  isAuthenticated: (state, getters) => getters.token != null,
}


export default {
  state,
  mutations,
  actions,
  getters
}
