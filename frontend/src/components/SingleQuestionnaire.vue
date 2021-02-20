<template>
  <div>
    <p class="quest-title">
      <strong>{{ questionnaire.title }}</strong>
      от
      <strong>{{ questionnaire[userKey].full_name }}</strong>
    </p>
    <button @click="$router.push({name: 'questionnaire-questions', params: {id: questionnaireId}})"
            class="quest-btn">
      Перейти
    </button>
  </div>
</template>

<script>
export default {
  name: "SingleQuestionnaire",
  props: {
    questionnaire: Object,
    userKey: {
      type: String,
      default: "owner"
    },
    questionnaireKey: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      questionnaireId: this.getQuestionnaireId()
    }
  },
  methods: {
    getQuestionnaireId() {
      if (this.$props.questionnaireKey !== null) return this.$props.questionnaire[this.$props.questionnaireKey].id
      else return this.$props.questionnaire.id
    }
  }
}
</script>

<style scoped>

</style>