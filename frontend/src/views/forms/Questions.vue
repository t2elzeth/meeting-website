<template>
  <div>
    <button @click="isOpen = true">Открыть</button>

    <transition name="modal" v-if="isOpen">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">

            <div class="modal-header">
              Название:
              <slot></slot>
            </div>

            <div class="modal-body">
              <button @click="isAnswering = !isAnswering">
                <span v-if="isAnswering">Отменить</span>
                <span v-else>Я хочу ответить</span>
              </button>

              <form action="" class="form" @submit.prevent="answerToQuestionnaire">
                <template v-if="questions.length > 0">
                  <label v-for="question in questions" v-bind:key="question.question">
                    Вопрос: {{ question.question }}
                    <template v-if="isAnswering">
                      <input type="text" :id="question.question" @change="updateAnswers" required>
                    </template>
                  </label>
                  <button class="form-btn" v-if="isAnswering">Отправить ответы</button>
                </template>

                <template v-else>
                  <p>Nothing to show here</p>
                </template>
              </form>
            </div>

            <div class="modal-footer">
              <button class="modal-default-button" @click="isOpen = false">OK</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import {success} from "@/utils/notifications";

const api = require("@/utils/api")

export default {
  name: "Modal",
  props: {
    title: String,
    questions: Array
  },
  data() {
    return {
      isOpen: false,
      answers: {},
      isAnswering: false,
    }
  },
  methods: {
    async answerToQuestionnaire() {
      await api.answerToQuestionnaire(Object.values(this.answers), this.serverData.id)
      success("Вы успешно ответили на эту анкету").then(() => this.$router.push({name: 'myanswer'}))
    },
    updateAnswers(answer) {
      console.log(answer.target.value, answer.target.id)
      this.answers[answer.target.id] = answer.target.value
    },
  }
}
</script>

<style scoped lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0 auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.modal-footer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  display: flex;
  flex-direction: column;
  max-width: 650px;
  margin-top: 15px;

  &-input, &-mess {
    padding: 5px;
    border-width: 1px;
  }

  &-input {
    margin: 5px 0;
  }

  &-mess {
    resize: none;
    margin: 10px 0;
  }

  &-btn {
    background-color: #1fd51f;
    border: 1px solid #fff;
    color: #fff;
    outline: none;
    margin-top: 10px;
    padding: 5px 10px;
    cursor: pointer;
    transition: all .4s;

    &:hover {
      background-color: #000;
      color: #fff;
      border-color: #fff;
    }
  }
}
</style>