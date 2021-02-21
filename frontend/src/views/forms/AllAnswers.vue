<template>
  <div class="look">
    <div class="wrapper" v-if="dataFetched">
      <div class="quest-acc-title title">
        <p class="quest-acc-title-info title">Посмотреть ответы на {{ serverData.to_questionnaire.title }} от</p>
        <button @click="$router.push({ name: 'account-detail',  params: {id: serverData.from_user.id }})" class="quest-acc-btn">
          {{ serverData.from_user.full_name }}
        </button>
        <div v-for="answers in serverData.answers" :key="answers.question">
          <span class="text">Вопрос: {{ answers.question }}</span>
          <p class="text">Ответ: {{ answers.answer }}</p>
        </div>
      </div>
    </div>
    <div v-else>Content is loading</div>
  </div>
</template>

<script>
import axios from "axios";
import urls from "@/utils/api";
import auth from "@/utils/auth";

export default {
  data() {
    return {
      serverData: {},
      dataFetched: false,
    }
  },
  methods: {
    setServerData(data) {
      this.serverData = data
      this.dataFetched = true
    },
    searchQuestionnaires() {
      axios.get(urls.myQuestionnaires, {
        ...auth.getCredentials(),
        params: {...this.searchFormData}
      })
           .then(res => this.serverData = res.data)
           .catch(console.log)
    }
  },
  beforeRouteEnter(to, from, next) {
    axios.get(urls.answerDetail(to.params.id), auth.getCredentials())
         .then(res => next(vm => vm.setServerData(res.data)))
         .catch(err => console.log(err))
  },
}
</script>

<style>

</style>