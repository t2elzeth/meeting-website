<template>
  <section class="questions">
    <div class="wrapper" v-if="!loading">
      <p class="title">Все анкеты</p>
      <form action="" @submit.prevent="searchQuestionnaires" v-if="$route.meta.search">
        <input type="text" v-model="searchFormData.title" placeholder="Заголовок">
        <button>Поиск</button>
      </form>
      <template v-for="questionnaire in serverData" :key="questionnaire.id">
        <p class="quest-title">
          <strong>{{ questionnaire.title }}</strong>
          от
          <strong>{{ questionnaire.owner.full_name }}</strong>
        </p>
        <button @click="$router.push({name: 'questionnaire-questions', params: {id: questionnaire.id}})"
                class="quest-btn">
          Перейти
        </button>
      </template>
    </div>
    <LoadingContent v-else></LoadingContent>
  </section>
</template>

<script>
import LoadingContent from "@/components/exceptions/LoadingContent";


const api = require("@/utils/api")
const hello = require("@/views/forms/helloworld")

export default {
  components: {
    LoadingContent
  },
  data() {
    return {
      serverData: {},
      loading: true,
      searchFormData: {
        title: ""
      }
    }
  },
  methods: {
    async searchQuestionnaires() {
      this.serverData = await api.questionnaires(this.$route.meta.mode, this.searchFormData)
    }
  },
  async created() {
    this.serverData = await api.questionnaires(this.$route.meta.mode)
    this.loading = false

    hello.printHello()
  }
}
</script>
