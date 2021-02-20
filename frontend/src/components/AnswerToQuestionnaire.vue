<template>
  <form action="" class="form" @submit.prevent="submitData">
    <label v-for="question in serverData.questions" v-bind:key="question.question">
      Вопрос: {{ question.question }}
      <input type="text" :id="question.question" @change="updateAnswers">
    </label>
    <button class="form-btn">Ответить</button>
  </form>
</template>

<script>
import axios from 'axios'
import auth from "../utils/auth";
import urls from "../utils/api";

export default {
  props: {
    serverData: {}
  },
  data() {
    return {
      answers: {},
    }
  },
  methods: {
    updateAnswers(answer) {
      console.log(answer.target.value, answer.target.id)
      this.answers[answer.target.id] = answer.target.value
    },
    submitData() {
      axios.post(urls.ansQues(this.$props.serverData.id), {answers: Object.values(this.answers)}, auth.getCredentials())
           .then(res => console.log(res.data))
           .catch(err => console.log(err))
    },
  },
}
</script>

<style>

</style>