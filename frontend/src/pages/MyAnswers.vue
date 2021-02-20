<template>
  <section class="answers">
    <div class="wrapper">
      <p class="title">Ваши ответы</p>
      <div v-for="item in serverData" :key="item.id" class="quest">
        <p class="quest-title"><strong>{{ item.to_questionnaire.title }}</strong></p>
        <button @click="$router.push({name: 'look-answer-human', params: {id: item.id}})" class="quest-btn">
          Перейти
        </button>
      </div>
    </div>
  </section>
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
      searchFormData: {
        title: ""
      }
    }
  },
  methods: {
    setServerData(data) {
      this.serverData = data
      this.dataFetched = true
    },
    searchQuestionnaires() {
      axios.get(urls.myAnswers, {
        ...auth.getCredentials(),
        params: {...this.searchFormData}
      })
           .then(res => this.serverData = res.data)
           .catch(console.log)
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      axios.get(urls.myAnswers, auth.getCredentials())
           .then(res => vm.setServerData(res.data))
           .catch(err => console.log(err))
    })
  },
}
</script>

<style>

</style>