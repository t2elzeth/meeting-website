<template>
  <div class="you" v-if="!loading">
    <div class="wrapper">
      <p class="title">Вам задали {{ serverData.length }} вопросов</p>
      <template v-for="questionnaire in serverData" :key="questionnaire.id">
        <p class="quest-title">
          <strong>{{ questionnaire.questionnaire.title }}</strong>
          от
          <strong>{{ questionnaire.from_user.full_name }}</strong>
        </p>
        <button @click="$router.push({name: 'questionnaire-questions', params: {id: questionnaire.questionnaire.id}})"
                class="quest-btn">
          Перейти
        </button>
      </template>
    </div>
  </div>
  <LoadingContent v-else></LoadingContent>
</template>

<script>
import LoadingContent from "@/components/exceptions/LoadingContent";

const api = require("@/utils/api")

export default {
  components: {
    LoadingContent
  },
  data() {
    return {
      serverData: [],
      loading: true
    }
  },
  async created() {
    this.serverData = await api.questionnairesToMe()
    this.loading = false
  }
}
</script>

<style>

</style>