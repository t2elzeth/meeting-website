import {createStore} from 'vuex'

const api = require("@/utils/api")

export default createStore({
  state: {
    me: JSON.parse(localStorage.getItem("me") || "{}")
  },
  mutations: {
    setMeData(state, payload) {
      localStorage.setItem("me", JSON.stringify(payload))
    },
    deleteMeData() {
      localStorage.setItem("me", JSON.stringify({}))
    }
  },
  actions: {
    async setMeState(state) {
      const res = await api.whoAmI()
      state.commit("setMeData", res)
    },
    deleteMeState(state) {
      state.commit("deleteMeData")
    }
  },
  modules: {},
  getters: {
    getMe(state) {
      return state.me
    }
  }
})
