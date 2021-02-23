<template>
  <section class="questions">
    <div class="wrapper" v-if="!loading">
      <p class="title">Все анкеты</p>
      <form action="" @submit.prevent="searchQuestionnaires">
        <input type="text" v-model="searchFormData.title" placeholder="Заголовок">
        <button>Поиск</button>
      </form>
      <template v-for="questionnaire in serverData" :key="questionnaire.id">
        <p class="quest-title">
          <strong>{{ questionnaire.title }}</strong>
          от
          <strong>{{ questionnaire.owner.full_name }}</strong>
        </p>
        <button @click="$router.push({name: 'questionnaire-questions', params: {id: questionnaire.id}})"
                class="quest-btn">
          Перейти
        </button>
      </template>
    </div>
    <LoadingContent v-else></LoadingContent>
  </section>
</template>

<script>
import LoadingContent from "@/components/exceptions/LoadingContent";

import {getQuestionnairesList} from "@/utils/api";

export default {
  components: {
    LoadingContent
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
