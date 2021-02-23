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

export default {
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    async login() {
      await api.login({email: this.email, password: this.password})
      this.$store.dispatch("setMeState")
      await this.$router.push({name: 'allques'})
    }
  },
}
</script>

<style>

</style>