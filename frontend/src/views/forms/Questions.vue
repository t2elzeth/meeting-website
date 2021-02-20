<template>
  <div class="look">
    <div class="wrapper" v-if="dataFetched">

      <div class="quest-acc-title title">
        <p class="quest-acc-title-info title">Анкета '{{ serverData.title }}' от</p>
        <button class="quest-acc-btn" @click="redirectToUserAccount">{{ serverData.owner.full_name }}</button>
      </div>
      <button @click="toggleIsAnswering">
        <span v-if="isAnswering">Отменить</span>
        <span v-if="!isAnswering">Ответить</span>
      </button>

      <div v-if="!isAnswering">
        <p v-for="question in serverData.questions" v-bind:key="question.question">
          Вопрос: {{ question.question }}
        </p>
      </div>
      <AnswerToQuestionnaire v-else :server-data="serverData"></AnswerToQuestionnaire>
    </div>
    <div v-else>Content is loading</div>
  </div>
</template>

<script>
import auth from "@/utils/auth";
import axios from "axios";
import urls from "@/utils/api";
import AnswerToQuestionnaire from "@/components/AnswerToQuestionnaire";

export default {
  components: {
    AnswerToQuestionnaire
  },
  data() {
    return {
      serverData: {},
      dataFetched: false,
      isAnswering: false
    }
  },
  methods: {
    redirectToUserAccount() {
      return this.$router.push({name: "account-detail", params: {id: this.serverData.owner.id}})
    },
    setServerData(data) {
      this.serverData = data
      this.dataFetched = true
    },
    toggleIsAnswering() {
      this.isAnswering = !this.isAnswering
    }
  },
  beforeRouteEnter(to, from, next) {
    axios.get(urls.quesionnairyDetail(to.params.id), auth.getCredentials())
         .then(res => next(vm => vm.setServerData(res.data)))
         .catch(err => console.log(err))
  },
}
</script>

<style>

</style>