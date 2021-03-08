import {createStore} from 'vuex'
import questionnaires from "@/store/modules/questionnaires";
import auth from "@/store/modules/auth";


export default createStore({
  modules: {
    auth, questionnaires
  },
})
