<template>
  <div class="dropdown2">
    <div class="btn-dropdown2-container">
      <button class="btn-dropdown2" @click.stop="isOpen = !isOpen">
        {{ questionnaire.title }}
      </button>
      <div class="arrow-accordion" :class="isOpen ? 'open' : ''">
        <span class="arrow-accordion-left"></span>
        <span class="arrow-accordion-right"></span>
      </div>
      <input type="checkbox" @input.stop="selectAll = !selectAll">
    </div>
    <ul :class="isOpen ? 'active'  : ''">
      <li v-for="question in questions.questions" :key="question.id">
        <input type="checkbox" :value="question.question" v-model="checked">
        <a href="#" :title="question.question">{{ question.question }} </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: {
    modelValue: Array,
    questionnaire: {}
  },
  data() {
    return {
      isOpen: false,
      questions: [],
      checked: [],
      selectAll: false
    }
  },
  watch: {
    checked: function () {
      this.$emit('update:modelValue', this.checked, this.questionnaire.id)
    },
    selectAll: function () {
      this.checked = []
      if (this.selectAll) for (let el of this.questions.questions) this.checked.push(el.question)
    }
  },
  async created() {
    this.questions = await this.$api.questions(this.questionnaire.id)
  },
}
</script>

<style scoped lang="scss">
@import "../assets/styles/mixins";

$btn-background: #2196F3;
$arrow-width: 10px;
$arrow-height: 3px;
$arrow-bg-color: #fff;

.dropdown2 {
  width: 100%;
  height: auto;
  background: $btn-background;

  &:hover {
    transition: .6s;
    background: darken($btn-background, 20);
  }

  > ul {
    max-height: 200px;
    list-style: none;
    transform-origin: top;
    transition: 0.5s;
    overflow: hidden;
    display: none;
    background: #262626;

    &.active {
      display: block;
      overflow-y: scroll;
    }

    li {
      display: flex;
      padding: 10px;
      border-bottom: 1px solid rgba(white, .2);

      a {
        max-width: 80%;
        width: 80%;
        padding: 10px;
        text-align: center;
        text-decoration: none;
        color: white;

        &:hover + .help-text {
          display: block;
        }
      }

      @include onHover()
    }
  }

  .btn-dropdown2-container {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0, .2);

    .btn-dropdown2 {
      width: 100%;
      height: 60px;
      border: none;
      box-shadow: none;
      cursor: pointer;
      outline: none;
      color: #ffffff;
      font-size: 16px;
      background: none;
    }
  }

}

.arrow-accordion {
  cursor: pointer;
  margin: 20px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &-left {
    background-color: transparent;
    width: $arrow-width;
    height: $arrow-height;
    transform: rotate(35deg);

    &:after {
      content: "";
      background-color: $arrow-bg-color;
      width: $arrow-width;
      height: $arrow-height;
      display: block;
      border-radius: 6px 10px 10px 6px;
      transition: all 0.5s cubic-bezier(0.25, 1.7, 0.35, 0.8);
      z-index: -1;
    }
  }

  &-right {
    background-color: transparent;
    width: $arrow-width;
    height: $arrow-height;
    transform: rotate(-35deg);
    margin-left: -3px;

    &:after {
      content: "";
      background-color: $arrow-bg-color;
      width: $arrow-width;
      height: $arrow-height;
      display: block;
      border-radius: 10px 6px 6px 10px;
      transition: all 0.5s cubic-bezier(0.25, 1.7, 0.35, 0.8);
      z-index: -1;
    }
  }
}

.open .arrow-accordion-left:after {
  transform-origin: center center;
  transform: rotate(-70deg);
}

.open .arrow-accordion-right:after {
  transform-origin: center center;
  transform: rotate(70deg);
}

</style>