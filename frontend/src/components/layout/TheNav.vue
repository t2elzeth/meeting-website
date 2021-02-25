<template>
  <nav class="nav wrapper">

    <div class="nav-menu-item" @click="toggleNavbar">
      <button class="nav-btn">меню</button>

      <transition name="fade" appear>
        <div class="nav__sub-menu" v-if="isOpen">
          <button @click="$router.push({ name: 'allques' })" class="nav-subbtn nav-btn">Все вопросы</button>
          <button @click="$router.push({ name: 'myanswer' })" class="nav-subbtn nav-btn">
            Мои ответы: ({{ numberOfItems.myAnswers }})
          </button>
          <button @click="$router.push({ name: 'myques' })" class="nav-subbtn nav-btn">
            Мои вопросы: ({{ numberOfItems.myQuestionnaires }})
          </button>
          <button @click="$router.push({ name: 'askyou' })" class="nav-subbtn nav-btn">
            Вам ответили: ({{ numberOfItems.answersToMyQuestionnaires }})
          </button>
          <button @click="$router.push({ name: 'ansyou' })" class="nav-subbtn nav-btn">
            Вам задали вопрос: ({{ numberOfItems.receivedQuestionnaires }})
          </button>
          <button @click="$router.push({ name: 'support' })" class="nav-subbtn nav-btn">Тех. поддержка</button>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script>
const api = require("@/utils/api")

import auth from "@/utils/auth";

export default {
  data() {
    return {
      isOpen: false,
      numberOfItems: {
        myAnswers: 0,
        myQuestionnaires: 0,
        receivedQuestionnaires: 0,
        answersToMyQuestionnaires: 0
      }
    }
  },
  methods: {
    async toggleNavbar() {
      this.isOpen = !this.isOpen

      if (auth.isAuthenticated()) {
        this.numberOfItems.myQuestionnaires = (await api.questionnaires("my")).length
        this.numberOfItems.receivedQuestionnaires = (await api.receivedQuestionnaires()).length
        this.numberOfItems.answersToMyQuestionnaires = (await api.answers("to-me")).length
        this.numberOfItems.myAnswers = (await api.answers("my")).length
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/vars";

.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px auto;

  &-btn {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
    outline: none;
    transition: all .4s;

    &:hover {
      background-color: #000;
      color: #fff;
      border-color: #000;
    }
  }

  &-search {
    &-label {
      display: flex;
      flex-direction: row;
    }

    &-input {
      border: 1px solid #000;
      box-sizing: border-box;
      margin-right: 2px;
    }

    &-btn {
      background: none;
      border: none;
      outline: none;
      padding: 0;
    }
  }

  &-btn, &-search, &-search-input {
    height: 25px;
  }

  &__sub-menu {
    width: $sidebar-width;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 99999;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    height: 100vh;
    padding: 0 25px 0 30px;
    background-color: #000;
  }

  &-menu-item {
    margin-bottom: 15px;
  }

  &-subbtn {
    border: 1px solid #c4c4c4;
    background-color: #000;
    color: #fff;
    outline: none;
    padding: 0 5px;
    transition: all .4s;

    &:hover {
      border: 1px solid #000;
      background-color: #c4c4c4;
      color: #000;
    }
  }
}

.fade-enter-active {
  animation: moveOut .3s;
  animation-delay: .2s;
  opacity: 0;
}

.fade-leave-active {
  animation: moveIn .3s;
}

@keyframes moveIn {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50px);
    opacity: 0;
  }
}

@keyframes moveOut {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}

</style>