<template>
  <div class="look">
    <div class="wrapper" v-if="dataFetched">
      <p class="title">Информация об аккаунте</p>

      <div class="quest-list-look">
        <p class="subtitle">{{ userData.full_name }}</p>
      </div>

      <p class="subtitle">О человеке:</p>
      <p class="text">{{ userData.about }}</p>

      <p class="subtitle">Пол</p>
      <p class="text">{{ userData.sex }}</p>

      <p class="subtitle">Возвраст:</p>
      <p class="text">{{ userData.age }}</p>

      <p class="subtitle">Город:</p>
      <p class="text">{{ userData.city }}</p>

      <p class="subtitle">Семейное положение:</p>
      <p class="text">{{ userData.marrital_status }}</p>

      <form action="" @submit.prevent="sendQuestionnaire">
        <select name="" id="" required v-model="questionnaireIdToSend">
          <option value="" disabled selected hidden>Выберите анкету, чтобы отправить</option>
          <option v-for="question in questionnaires" :key="question.id" :value="question.id">{{ question.title }}
          </option>
        </select>

        <button>Отправить анкету</button>
      </form>
    </div>
    <LoadingContent v-else></LoadingContent>
  </div>
</template>

<script>
import LoadingContent from "@/components/LoadingContent";

import auth from "@/utils/auth";
import urls from "@/utils/api";
import axios from "axios";

export default {
  components: {
    LoadingContent
  },
  data() {
    return {
      userData: {},
      answers: {},
      dataFetched: false,
      questionnaires: [],
      questionnaireIdToSend: Number
    }
  },
  methods: {
    setUserData(data) {
      this.userData = data
      this.dataFetched = true

      this.setQuestionnaires()
    },
    setQuestionnaires() {
      axios.get(urls.myQuestionnaires, auth.getCredentials())
           .then(res => this.questionnaires = res.data)
           .catch(err => console.log(err))
    },
    sendQuestionnaire() {
      axios.post(urls.sendQuestionnaire(this.questionnaireIdToSend), {to_user: this.userData.id}, auth.getCredentials())
           .then(res => console.log(res.data))
           .catch(err => console.log(err))
    }
  },
  beforeRouteEnter(to, from, next) {
    axios.get(urls.userDetail(to.params.id), auth.getCredentials())
         .then(res => next(vm => vm.setUserData(res.data)))
         .catch(err => console.log(err))
  },
}
</script>

<style>

</style>