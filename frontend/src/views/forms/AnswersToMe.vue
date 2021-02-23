<template>
  <div class="you">
    <div class="wrapper" v-if="!loading">
      <p class="title">Вам ответили</p>
      <template v-for="(answer, index) in answers" :key="index">
        <p class="quest-title">
          <strong>От {{ answer.full_name }}
          </strong>
          на
          <strong>
            {{ answer.title }}
          </strong>
        </p>
        <button @click="$router.push({name: 'look-answer-human', params: {id: answer.id}})"
                class="quest-btn">
          Посмотреть ответы
        </button>
      </template>
    </div>
    <loading-content v-else></loading-content>
  </div>
</template>

<script>
import LoadingContent from "@/components/exceptions/LoadingContent";

const api = require("@/utils/api")

export default {
  components: {
    LoadingContent,
  },
  data() {
    return {
      answers: [],
      loading: true
    }
  },
  async created() {
    this.answers = await api.answersToMyQuestionnaires()
    this.loading = false
  }
}
</script>

<style>

</style>