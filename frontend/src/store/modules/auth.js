const api = require("@/utils/api/index").default
const tokenKey = "token";


const state = {
  me: JSON.parse(localStorage.getItem("me") || "{}"),
  token: localStorage.getItem(tokenKey)
}

const mutations = {
  setMeData(state, payload) {
    localStorage.setItem("me", JSON.stringify(payload))
  },
  deleteMeData() {
    localStorage.setItem("me", JSON.stringify({}))
  },

  setCredentials(state, payload) {
    localStorage.setItem(tokenKey, payload["auth_token"])
  },
  removeCredentials() {
    localStorage.removeItem(tokenKey)
  }
}

const actions = {
  async setMeState(state) {
    const res = await api.whoAmI()
    state.commit("setMeData", res)
  },

  async login(state, formData) {
    const res = await api.login(formData)
    state.commit('setCredentials', res)
    await state.dispatch('setMeState')
  },
  async logout(state) {
    await api.logout()
    state.commit('removeCredentials')
    state.commit("deleteMeData")
  }
}

const getters = {
  me(state) {
    return state.me
  },

  credentials(state) {
    return {headers: {Authorization: `Token ${state.token}`}};
  },

  isAuthenticated: (state) => state.token !== null,
}


export default {
  state,
  mutations,
  actions,
  getters
}
