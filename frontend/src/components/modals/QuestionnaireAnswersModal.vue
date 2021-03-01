<template>
  <BaseModal>
    <template #buttonContent>
      '{{ item.to_questionnaire.title }}' -> Посмотреть ответы
    </template>
    <template #modalHeader>
      <p class="quest-acc-title-info title">
        Посмотреть ответы на
        {{ item.to_questionnaire.title }} от
      </p>
      <button @click="$router.push({ name: 'account-detail',  params: {id: item.from_user.id }})"
              class="quest-acc-btn">
        {{ item.from_user.full_name }}
      </button>
    </template>
    <template #modalBody>
      <template v-for="answers in item.answers" :key="answers.question">
        <span class="text">Вопрос: {{ answers.question }}</span>
        <p class="text">Ответ: {{ answers.answer }}</p>
      </template>
    </template>
  </BaseModal>
</template>

<script>
import BaseModal from "@/components/modals/BaseModal";

export default {
  name: "QuestionnaireAnswersModal",
  components: {
    BaseModal
  },
  props: {
    item: Object
  }
}
</script>
