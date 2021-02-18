<template>
  <div class="you" v-if="dataFetched">
    <div class="wrapper" v-if="auth.isAuthenticated()">

      <p class="title">Вам задали {{ serverData.length }} вопросов</p>


      <div class="quest" v-for="questionnaire in serverData" :key="questionnaire.id">
        <p class="quest-title">{{ questionnaire.title }}</p>
        <button @click="$router.push({ name: 'ansques', params: {id: questionnaire.id} })" class="quest-btn">
          Перейти
        </button>
      </div>

    </div>
    <Error v-else error-message="Ошибка! Пожалуйста войдите в свой аккаунт или зарегестрируйтесь."></Error>
  </div>
  <div v-else>Content is loading</div>
</template>

<script>
import Error from '../components/Error'
import axios from "axios";
import urls from "@/utils/api";
import auth from "@/utils/auth";

export default {
  components: {
    Error
  },
  data() {
    return {
      serverData: [],
      dataFetched: false,
      auth
    }
  },
  methods: {
    setServerData(data) {
      this.serverData = data
      this.dataFetched = true
    }
  },
  beforeRouteEnter(to, from, next) {
    axios.get(urls.whoAmI, auth.getCredentials())
         .then(res => {
           axios.get(urls.receivedQuestionnaires(res.data.id), auth.getCredentials())
                .then(res => next(vm => vm.setServerData(res.data)))
                .catch(err => console.log(err))
         })

  }
}
</script>

<style>

</style>