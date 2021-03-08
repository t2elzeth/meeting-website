const state = {
  questionnaires: [
    {title: "My first q"},
    {title: "My second q"}
  ]
}
const getters = {
  allQs(state) {
    return state.questionnaires
  }
}
const mutations = {}
const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}