<template>
  <div class="you">
    <div class="wrapper">
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
  </div>
</template>

<script>
import SingleAnswer from "@/components/SingleAnswer";

import axios from "axios";
import urls from "../utils/api";
import auth from "../utils/auth";

export default {
  components: {
    SingleAnswer
  },
  data() {
    return {
      answers: []
    }
  },
  methods: {
    getAnswersToMyQuestionnaires() {
      axios.get(urls.answersToMyQuestionnaires, auth.getCredentials())
           .then(res => this.answers = res.data)
    },
  },
  mounted() {
    this.getAnswersToMyQuestionnaires()
  }
}
</script>

<style>

</style>