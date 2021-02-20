<template>
  <section class="questions">
    <div class="wrapper">

      <p class="title">Ваши вопросы</p>

      <div v-for="item in serverData" :key="item.id" class="quest">
        <p class="quest-title">{{ item.title }}</p>
        <button @click="$router.push({name: 'questionnaire-questions', params: {id: item.id}})" class="quest-btn">
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
      axios.get(urls.myQuestionnaires, {
        ...auth.getCredentials(),
        params: {...this.searchFormData}
      })
           .then(res => this.serverData = res.data)
           .catch(console.log)
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      axios.get(urls.myQuestionnaires, auth.getCredentials())
           .then(res => vm.setServerData(res.data))
           .catch(err => console.log(err))
    })
  },
}
</script>

<style lang="scss" scoped>

</style>