<template>
  <div class="look">
    <div class="wrapper" v-if="!loading">
      <div class="quest-acc-title title">
        <p class="quest-acc-title-info title">Посмотреть ответы на {{ serverData.to_questionnaire.title }} от</p>
        <button @click="$router.push({ name: 'account-detail',  params: {id: serverData.from_user.id }})"
                class="quest-acc-btn">
          {{ serverData.from_user.full_name }}
        </button>
        <template v-for="answers in serverData.answers" :key="answers.question">
          <span class="text">Вопрос: {{ answers.question }}</span>
          <p class="text">Ответ: {{ answers.answer }}</p>
        </template>
      </div>
    </div>
    <div v-else>Content is loading</div>
  </div>
</template>

<script>
const api = require("@/utils/api")

export default {
  data() {
    return {
      serverData: {},
      loading: true,
    }
  },
  async created() {
    this.serverData = await api.answerDetail(this.$route.params.id)
    this.loading = false
  }
}
</script>

<style>

</style>