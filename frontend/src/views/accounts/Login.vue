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
export default {
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    async login() {
      const formData = {email: this.email, password: this.password}

      this.$store.dispatch('login', formData)
          .then(async () => {
            await this.$notify.success("Успешная авторизация!")
            await this.$router.push({name: 'questionnaires', params: {mode: 'all'}})
          })
          .catch((err) => {
            this.$notify.error("Что-то пошло не так. Попробуйте позже, или обратитесь в тех-поддержку")
            console.log(err)
          })
    }
  },
}
</script>
