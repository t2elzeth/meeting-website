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
        <span v-if="!isAnswering">Ответить</span>
      </button>

      <template v-if="!isAnswering">
        <p v-for="question in serverData.questions" :key="question.question">
          Вопрос: {{ question.question }}
        </p>
      </template>
      <AnswerToQuestionnaire v-else :server-data="serverData"></AnswerToQuestionnaire>
    </div>
    <loading-content v-else></loading-content>
  </div>
</template>

<script>
import AnswerToQuestionnaire from "@/components/AnswerToQuestionnaire";
import LoadingContent from "@/components/exceptions/LoadingContent";

const api = require("@/utils/api")

export default {
  components: {
    LoadingContent,
    AnswerToQuestionnaire
  },
  data() {
    return {
      serverData: {},
      loading: true,
      isAnswering: false
    }
  },
  async created() {
    this.serverData = await api.questions(this.$route.params.id)
    this.loading = false
  }
}
</script>

<style>

</style>