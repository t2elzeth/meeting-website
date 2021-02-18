<template>
  <div class="ansques" v-if="dataFetched">
    <div class="wrapper" v-if="isAuthenticated">

      <div class="quest-acc-title title">
        <p class="quest-acc-title-info title">Ответить на тест '{{ serverData.title }}' от</p>
        <button class="quest-acc-btn" @click="redirectToUserAccount">{{ serverData.owner.full_name }}</button>
      </div>

      <form action="" class="form" @submit.prevent="submitData">
        <label v-for="question in serverData.questions" v-bind:key="question.question">
          Вопрос: {{ question.question }}
          <input type="text" :id="question.question" @change="updateAnswers">
        </label>
        <button class="form-btn">Ответить</button>
      </form>
    </div>
    <Error v-else error-message="Ошибка! Пожалуйста войдите в свой аккаунт или зарегестрируйтесь."></Error>
  </div>
  <div v-else>Content is loading</div>
</template>

<script>
import Error from '../components/Error'
import axios from 'axios'
import auth from "../utils/auth";
import urls from "../utils/api";

export default {
  components: {
    Error
  },
  data() {
    return {
      serverData: {},
      answers: {},
      dataFetched: false,
      isAuthenticated: auth.isAuthenticated()
    }
  },
  methods: {
    redirectToUserAccount() {
      return this.$router.push({name: "lookacc", params: {id: this.serverData.owner.id}})
    },
    updateAnswers(answer) {
      console.log(answer.target.value, answer.target.id)
      this.answers[answer.target.id] = answer.target.value
    },
    submitData() {
      axios.post(urls.ansQues(this.serverData.id), {answers: Object.values(this.answers)}, auth.getCredentials())
           .then(res => console.log(res.data))
           .catch(err => console.log(err))
    },
    setServerData(data) {
      this.serverData = data
      this.dataFetched = true
    }
  },
  beforeRouteEnter(to, from, next) {
    if (!to.params.id) return next({name: "allques"})

    axios.get(urls.quesDetail(to.params.id), auth.getCredentials())
         .then(res => next(vm => vm.setServerData(res.data)))
         .catch(err => console.log(err))
  }
}
</script>

<style>

</style>