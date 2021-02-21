<template>
  <section class="questions">
    <div class="wrapper" v-if="dataFetched">
      <p class="title">Все анкеты</p>
      <form action="" @submit.prevent="searchQuestionnaires">
        <input type="text" v-model="searchFormData.title" placeholder="Заголовок">
        <button>Поиск</button>
      </form>
      <SingleQuestionnaire
          v-for="item in serverData"
          :key="item.id"
          class="quest"
          :questionnaire="item">
      </SingleQuestionnaire>
    </div>
    <LoadingContent v-else></LoadingContent>
  </section>
</template>

<script>
import SingleQuestionnaire from "@/components/SingleQuestionnaire";
import LoadingContent from "@/components/exceptions/LoadingContent";

import {fetchDataWithCred} from "@/utils/fetch"

export default {
  components: {
    SingleQuestionnaire, LoadingContent
  },
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
      fetchDataWithCred.get("allQues", {params: {...this.searchFormData}})
                       .then(res => this.serverData = res.data)
    }
  },
  beforeRouteEnter(to, from, next) {
    fetchDataWithCred.get("allQues").then(res => next(vm => vm.setServerData(res.data)))
  },
}
</script>

<style>

</style>