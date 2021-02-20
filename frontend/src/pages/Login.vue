<template>
  <div class="autorize">
    <div class="wrapper">

      <p class="title">Войти в аккаунт</p>

      <form class="form" action="" @submit.prevent="submitForm">

        <input class="form-input" type="text" placeholder="Ваша почта" v-model="email" required>

        <input class="form-input" type="password" placeholder="Ваш пароль" v-model="password" required>

        <button class="form-btn" type="submit">Авторизоваться</button>
      </form>

    </div>
  </div>
</template>

<script>
import auth from "@/utils/auth";
import urls from "@/utils/api";
import axios from 'axios'

export default {
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    submitForm() {
      axios.post(urls.login, {email: this.email, password: this.password})
           .then(res => {
             auth.setCredentials(res.data)
             this.$store.dispatch("setMeState")
           })
           .catch(err => console.log(err))

      return this.$router.push({name: "allques"})
    }
  },
}
</script>

<style>

</style>