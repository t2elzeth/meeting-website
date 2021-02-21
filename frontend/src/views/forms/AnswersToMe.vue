<template>
  <div class="you">
    <div class="wrapper" v-if="!loading">
      <p class="title">Вам ответили</p>
      <SingleAnswer
          class="quest"
          v-for="answer in answers"
          :key="answer.id"
          :answer="answer"
          user-key="from_user"
          title-key="to_questionnaire">
      </SingleAnswer>
    </div>
    <loading-content v-else></loading-content>
  </div>
</template>

<script>
import SingleAnswer from "@/components/SingleAnswer";
import LoadingContent from "@/components/exceptions/LoadingContent";

const api = require("@/utils/api")

export default {
  components: {
    LoadingContent,
    SingleAnswer
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