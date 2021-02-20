import {createStore} from 'vuex'

import axios from "axios";
import auth from "@/utils/auth";
import urls from "@/utils/api";

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
    setMeState(state) {
      axios.get(urls.whoAmI, auth.getCredentials())
           .then(res => state.commit("setMeData", res.data))
           .catch(err => console.log(err))
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
