<template>
  <div class="look">
    <div class="wrapper" v-if="!loading">
      <questionnaire-answers-modal v-for="item in serverData" :key="item.id" :item="item"></questionnaire-answers-modal>
    </div>
    <loading-content v-else></loading-content>
  </div>
</template>

<script>
import QuestionnaireAnswersModal from "@/components/modals/QuestionnaireAnswersModal";

export default {
  components: {
    QuestionnaireAnswersModal
  },
  data() {
    return {
      serverData: {},
      loading: true,
    }
  },
  async mounted() {
    this.serverData = await this.$api.answers(this.$route.params.mode)
    this.loading = false
  }
}
</script>

<style>

</style>