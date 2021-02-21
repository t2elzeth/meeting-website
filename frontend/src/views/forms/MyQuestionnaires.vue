<template>
  <section class="questions">
    <div class="wrapper" v-if="!loading">

      <p class="title">Ваши вопросы</p>

      <div v-for="item in serverData" :key="item.id" class="quest">
        <p class="quest-title">{{ item.title }}</p>
        <button @click="$router.push({name: 'questionnaire-questions', params: {id: item.id}})" class="quest-btn">
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
    this.serverData = await api.myQuestionnaires()
    this.loading = false
  }
}
</script>
