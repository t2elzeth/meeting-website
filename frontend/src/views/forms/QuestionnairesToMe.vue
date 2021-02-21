<template>
  <div class="you" v-if="!loading">
    <div class="wrapper" v-if="auth.isAuthenticated()">
      <p class="title">Вам задали {{ serverData.length }} вопросов</p>
      <SingleQuestionnaire class="quest"
                           v-for="received in serverData"
                           :key="received.id"
                           :questionnaire="received"
                           user-key="from_user"
                           questionnaire-key="questionnaire">
      </SingleQuestionnaire>
    </div>
    <AuthorizationError v-else></AuthorizationError>
  </div>
  <LoadingContent v-else></LoadingContent>
</template>

<script>
import LoadingContent from "@/components/exceptions/LoadingContent";
import AuthorizationError from "@/components/exceptions/AuthorizationError";
import SingleQuestionnaire from "@/components/SingleQuestionnaire";

import auth from "@/utils/auth";

const api = require("@/utils/api")

export default {
  components: {
    AuthorizationError, LoadingContent, SingleQuestionnaire
  },
  data() {
    return {
      serverData: [],
      loading: true,
      auth
    }
  },
  async created() {
    this.serverData = await api.questionnairesToMe()
    this.loading = false
  }
}
</script>

<style>

</style>