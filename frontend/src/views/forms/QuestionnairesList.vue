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
        <QuestionnaireQuestionsModal :questions="questionnaire.questions">
          {{ questionnaire.title }}
        </QuestionnaireQuestionsModal>
      </template>
    </div>
    <LoadingContent v-else></LoadingContent>
  </section>
</template>

<script>
import LoadingContent from "@/components/exceptions/LoadingContent";
import QuestionnaireQuestionsModal from "@/components/QuestionnaireQuestionsModal";


export default {
  components: {
    LoadingContent, QuestionnaireQuestionsModal
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
    this.questionnairesList = await this.$api.questionnaires(this.$route.meta.mode)
    this.loading = false
  }
}
</script>
