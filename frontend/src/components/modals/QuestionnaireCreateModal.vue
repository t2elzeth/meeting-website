<template>
  <BaseModal>
    <template #buttonContent>
      Создать вопросник [+]
    </template>
    <template #modalHeader>
      Создать вопрос
      <button @click="rows.push({maxlength: 60})" type="button">Добавить вопрос</button>
    </template>
    <template #modalBody>
      <div class="add">
        <div class="wrapper">
          <form action="" class="form" @submit.prevent="submitForm">
            <input class="form-input" placeholder="Заголовок для анкеты" type="text"
                   v-model="questionnaireTitle">
            <input v-for="(row, index) in rows" :key="index" :id="index"
                   class="form-input"
                   :placeholder="defaultInputFieldPlaceholder"
                   type="text" @change="updateQuestions">

            <button class="form-btn">Создать</button>
          </form>
        </div>
      </div>
    </template>
  </BaseModal>
</template>

<script>
import BaseModal from "@/components/modals/BaseModal";

export default {
  name: "QuestionnaireCreateModal",
  components: {
    BaseModal
  },
  data() {
    return {
      rows: [{maxlength: 60}],
      questionnaireTitle: "",
      questions: {},
      defaultInputFieldPlaceholder: "Текст вашего вопроса",
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
      this.$notify.success("Your questionnaire has been successfully created!").then(() => this.$router.push({name: "questionnaires-my"}))
    },
  }
}
</script>
