<template>
  <div class="look">
    <div class="wrapper" v-if="!loading">
      <div class="quest-acc-title title" v-for="item in serverData" :key="item.id">
        <p class="quest-acc-title-info title">Посмотреть ответы на {{ item.to_questionnaire.title }} от</p>
        <button @click="$router.push({ name: 'account-detail',  params: {id: item.from_user.id }})"
                class="quest-acc-btn">
          {{ item.from_user.full_name }}
        </button>
        <template v-for="answers in item.answers" :key="answers.question">
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
    this.serverData = await api.answers(this.$route.meta.mode)
    this.loading = false
  }
}
</script>

<style>

</style>