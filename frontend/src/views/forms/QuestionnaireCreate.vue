<template>
  <div class="add">
    <div class="wrapper">
      <span class="title">Создать вопрос</span>

      <form action="" class="form" @submit.prevent="submitForm">
        <input class="form-input" placeholder="Заголовок для анкеты" type="text" v-model="questionnaireTitle">
        <input v-for="(row, index) in rows" :key="index" :id="index"
               class="form-input"
               :placeholder="defaultInputFieldPlaceholder"
               type="text" @change="updateQuestions">

        <button class="form-btn">Создать</button>
        <button @click="rows.push({maxlength: 60})" type="button">Добавить вопрос</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rows: [{maxlength: 60}],
      questionnaireTitle: "",
      questions: {},
      defaultInputFieldPlaceholder: "Текст вашего вопроса"
    }
  },
  methods: {
    updateQuestions(field) {
      console.log(field.target.value, field.target.id)
      this.questions[field.target.id] = field.target.value
    },
    async submitForm() {
      await this.$api.newQuestionnaire({
        questions: Object.values(this.questions),
        title: this.questionnaireTitle
      })
      this.$notify.success("Your questionnaire has been successfully created!").then(() => this.$router.push({name: "myques"}))
    },
  }
}
</script>

<style>

</style>