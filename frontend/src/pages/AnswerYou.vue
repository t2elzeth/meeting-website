<template>
  <div class="you" v-if="dataFetched">
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
import LoadingContent from "@/components/LoadingContent";
import AuthorizationError from "@/components/AuthorizationError";
import SingleQuestionnaire from "@/components/SingleQuestionnaire";

import axios from "axios";
import urls from "@/utils/api";
import auth from "@/utils/auth";

export default {
  components: {
    AuthorizationError, LoadingContent, SingleQuestionnaire
  },
  data() {
    return {
      serverData: [],
      dataFetched: false,
      auth
    }
  },
  methods: {
    setServerData(data) {
      this.serverData = data
      this.dataFetched = true
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      axios.get(urls.receivedQuestionnaires, auth.getCredentials())
           .then(res => vm.setServerData(res.data))
           .catch(err => console.log(err))
    })
  }
}
</script>

<style>

</style>