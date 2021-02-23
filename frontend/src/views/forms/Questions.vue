<template>
  <div>
    <button @click="showAnswers = !showAnswers" class="quest-btn">
      Показать ответы
    </button>
    <template v-if="showAnswers">
      <button @click="isAnswering = !isAnswering">
        <span v-if="isAnswering">Отменить</span>
        <span v-else>Ответить</span>
      </button>

      <template v-if="!isAnswering">
        <p v-for="(question, index) in questions" :key="index">Вопрос: {{ question.question }}</p>
      </template>
      <form action="" class="form" @submit.prevent="answerToQuestionnaire" v-else>
        <label v-for="question in questions" v-bind:key="question.question">
          Вопрос: {{ question.question }}
          <input type="text" :id="question.question" @change="updateAnswers" required>
        </label>
        <button class="form-btn">Ответить</button>
      </form>
    </template>
  </div>
</template>

<script>
import {success} from "@/utils/notifications";

const api = require("@/utils/api")

export default {
  props: {
    questions: Array
  },
  data() {
    return {
      isAnswering: false,
      answers: {},
      showAnswers: false
    }
  },
  methods: {
    updateAnswers(answer) {
      console.log(answer.target.value, answer.target.id)
      this.answers[answer.target.id] = answer.target.value
    },
    async answerToQuestionnaire() {
      await api.answerToQuestionnaire(Object.values(this.answers), this.serverData.id)
      success("Вы успешно ответили на эту анкету").then(() => this.$router.push({name: 'myanswer'}))
    },
  },
}
</script>

<style>

</style>