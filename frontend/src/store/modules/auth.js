const api = require("@/utils/api/index").default
const tokenKey = "token";


const state = {}

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
  me: () => JSON.parse(localStorage.getItem("me") || "{}"),
  token: () => localStorage.getItem(tokenKey),
  isAuthenticated: (state, getters) => getters.token != null,

  credentials(state, getters) {
    return {headers: {Authorization: `Token ${getters.token}`}};
  },
}


export default {
  state,
  mutations,
  actions,
  getters
}
