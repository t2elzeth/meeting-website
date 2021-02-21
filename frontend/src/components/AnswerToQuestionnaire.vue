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
const api = require("@/utils/api")

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
    async submitData() {
      await api.answerToQuestionnaire(Object.values(this.answers), this.serverData.id)
    },
  },
}
</script>

<style>

</style>