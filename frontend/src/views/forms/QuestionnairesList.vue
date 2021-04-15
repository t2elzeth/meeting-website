<template>
  <section class="questions">
    <div class="wrapper" v-if="!loading">
      <p class="title">Все анкеты</p>
      <form action="" @submit.prevent="searchQuestionnaires" v-if="$route.meta.search">
        <input type="text" v-model="searchFormData.title" placeholder="Заголовок">
        <button>Поиск</button>
      </form>
      <template v-for="questionnaire in questionnairesList" :key="questionnaire.id">
        <p class="quest-title">
          <strong>{{ questionnaire.title }}</strong>
          от
          <strong>{{ questionnaire.owner.full_name }}</strong>
        </p>
        <QuestionnaireQuestionsModal :questions="questionnaire.questions" :questionnaireId="questionnaire.id">
          <template #header>{{ questionnaire.title }}</template>
        </QuestionnaireQuestionsModal>
      </template>
    </div>
    <loading-content v-else></loading-content>
  </section>
</template>

<script>
import QuestionnaireQuestionsModal from "@/components/modals/QuestionnaireQuestionsModal";

export default {
  components: {
    QuestionnaireQuestionsModal
  },
  data() {
    return {
      questionnairesList: {},
      loading: true,
      searchFormData: {
        title: ""
      }
    }
  },
  methods: {
    async searchQuestionnaires() {
      this.questionnairesList = await this.$api.questionnaires(this.$route.meta.mode, this.searchFormData)
    }
  },
  async created() {
    this.questionnairesList = await this.$api.questionnaires(this.$route.params.mode)
    this.loading = false
  }
}
</script>
