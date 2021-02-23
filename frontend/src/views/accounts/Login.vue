<template>
  <div class="autorize">
    <div class="wrapper">

      <p class="title">Войти в аккаунт</p>

      <form class="form" action="" @submit.prevent="login">

        <input class="form-input" type="text" placeholder="Ваша почта" v-model="email" required>

        <input class="form-input" type="password" placeholder="Ваш пароль" v-model="password" required>

        <button class="form-btn" type="submit">Авторизоваться</button>
      </form>
    </div>
  </div>
</template>

<script>
const api = require("@/utils/api")

import {success, error} from "@/utils/notifications";

export default {
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    async login() {
      api.login({email: this.email, password: this.password})
         .then(() => {
           this.$store.dispatch("setMeState")

           success("Успешная авторизация!").then(() => this.$router.push({name: 'allques'}))
         }).catch((err) => {
        error("Что-то пошло не так. Попробуйте позже, или обратитесь в тех-поддержку")
        console.log(err)
      })
    }
  },
}
</script>

<style>

</style>