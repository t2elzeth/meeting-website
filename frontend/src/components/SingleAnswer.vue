<template>
  <div>
    <p class="quest-title">
      <strong>От {{ fullName }}
      </strong>
      на
      <strong>
        {{ title }}
      </strong>
    </p>
    <button @click="$router.push({name: 'look-answer-human', params: {id: answerId}})"
            class="quest-btn">
      Посмотреть ответы
    </button>
  </div>
</template>

<script>
export default {
  name: "SingleAnswer",
  props: {
    answer: Object,
    userKey: {
      type: String,
      default: null
    },
    answerKey: {
      type: String,
      default: null
    },
    titleKey: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      answerId: this.getAnswerId(),
      title: this.getTitle(),
      fullName: this.getFullName()
    }
  },
  methods: {
    getAnswerId() {
      if (this.$props.answerKey !== null) return this.$props.answer[this.$props.answerKey].id
      else return this.$props.answer.id
    },
    getTitle() {
      if (this.$props.titleKey !== null) return this.$props.answer[this.$props.titleKey].title
      else return this.$props.answer.title
    },
    getFullName() {
      if (this.$props.userKey !== null) return this.$props.answer[this.$props.userKey].full_name
      else return this.$props.answer.owner.full_name
    }
  }
}
</script>

<style scoped>

</style>