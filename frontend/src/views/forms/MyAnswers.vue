<template>
  <section class="answers">
    <div class="wrapper" v-if="!loading">
      <p class="title">Ваши ответы</p>
      <div v-for="item in serverData" :key="item.id" class="quest">
        <p class="quest-title"><strong>{{ item.to_questionnaire.title }}</strong></p>
        <button @click="$router.push({name: 'look-answer-human', params: {id: item.id}})" class="quest-btn">
          Перейти
        </button>
      </div>
    </div>
    <loading-content v-else></loading-content>
  </section>
</template>

<script>
import LoadingContent from "@/components/exceptions/LoadingContent";

const api = require("@/utils/api")

export default {
  components: {LoadingContent},
  data() {
    return {
      serverData: {},
      loading: true,
    }
  },
  async created() {
    this.serverData = await api.myAnswers()
    this.loading = false
  }
}
</script>

<style>

</style>