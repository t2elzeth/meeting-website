<template>
  <div class="look">
    <div class="wrapper" v-if="!loading">
      <p class="title">Информация об аккаунте</p>

      <div class="quest-list-look">
        <p class="subtitle">{{ userData.full_name }}</p>
      </div>

      <p class="subtitle">О человеке:</p>
      <p class="text">{{ userData.about }}</p>

      <p class="subtitle">Пол</p>
      <p class="text">{{ userData.sex }}</p>

      <p class="subtitle">Возвраст:</p>
      <p class="text">{{ userData.age }}</p>

      <p class="subtitle">Город:</p>
      <p class="text">{{ userData.city }}</p>

      <p class="subtitle">Семейное положение:</p>
      <p class="text">{{ userData.marrital_status }}</p>

      <form action="" @submit.prevent="sendQuestionnaire">
        <select name="" id="" required v-model="questionnaireIdToSend">
          <option value="" disabled selected hidden>Выберите анкету, чтобы отправить</option>
          <option v-for="question in questionnaires" :key="question.id" :value="question.id">{{ question.title }}
          </option>
        </select>

        <button>Отправить анкету</button>
      </form>
    </div>
    <loading-content v-else></loading-content>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {},
      loading: true,
      questionnaires: [],
      questionnaireIdToSend: Number
    }
  },
  methods: {
    async sendQuestionnaire() {
      await this.$api.sendQuestionnaire(this.userData.id, this.questionnaireIdToSend)
    }
  },
  async created() {
    this.userData = await this.$api.userDetail(this.$route.params.id)
    this.questionnaires = await this.$api.questionnaires("my")
    this.loading = false
  }
}
</script>
