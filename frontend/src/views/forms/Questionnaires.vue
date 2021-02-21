<template>
  <section class="questions">
    <div class="wrapper" v-if="!loading">
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

import {getQuestionnairesList} from "@/utils/api";

export default {
  components: {
    SingleQuestionnaire, LoadingContent
  },
  data() {
    return {
      serverData: {},
      loading: true,
      searchFormData: {
        title: ""
      }
    }
  },
  methods: {
    async searchQuestionnaires() {
      this.serverData = await getQuestionnairesList(this.searchFormData)
    }
  },
  async created() {
    this.serverData = await getQuestionnairesList()
    this.loading = false
  }
}
</script>
