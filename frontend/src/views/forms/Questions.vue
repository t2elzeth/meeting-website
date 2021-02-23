<template>
  <div class="look">
    <div class="wrapper" v-if="!loading">
      <div class="quest-acc-title title">
        <p class="quest-acc-title-info title">Анкета '{{ serverData.title }}' от</p>
        <button class="quest-acc-btn"
                @click="$router.push({name: 'account-detail', params: {id: serverData.owner.id}})">
          {{ serverData.owner.full_name }}
        </button>
      </div>
      <button @click="isAnswering = !isAnswering">
        <span v-if="isAnswering">Отменить</span>
        <span v-else>Ответить</span>
      </button>

      <template v-if="!isAnswering">
        <p v-for="(question, index) in serverData.questions" :key="index">Вопрос: {{ question.question }}</p>
      </template>
      <form action="" class="form" @submit.prevent="answerToQuestionnaire" v-else>
        <label v-for="question in serverData.questions" v-bind:key="question.question">
          Вопрос: {{ question.question }}
          <input type="text" :id="question.question" @change="updateAnswers" required>
        </label>
        <button class="form-btn">Ответить</button>
      </form>
    </div>
    <loading-content v-else></loading-content>
  </div>
</template>

<script>
import LoadingContent from "@/components/exceptions/LoadingContent";
import {success} from "@/utils/notifications";

const api = require("@/utils/api")

export default {
  components: {LoadingContent},
  data() {
    return {
      serverData: {},
      loading: true,
      isAnswering: false,
      answers: {},
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
  async created() {
    this.serverData = await api.questions(this.$route.params.id)
    this.loading = false
  }
}
</script>

<style>

</style>