<template>
  <div class="autorize">
    <div class="wrapper">

      <p class="title">Регистрация</p>

      <form class="form" action="" @submit.prevent="submitForm">
        <input type="text" v-model="formData.full_name" placeholder="Ф.И.О">
        <input type="email" v-model="formData.email" placeholder="email">
        <select v-model="formData.sex">
          <option value="" disabled selected hidden>Пол</option>
          <option value="man">Мужской</option>
          <option value="woman">Женский</option>
          <option value="hidden">Не указано</option>
        </select>
        <Select field-key="religion" v-model="formData.religion"></Select>
        <input type="number" v-model="formData.age" placeholder="Возраст">
        <Select field-key="city" v-model="formData.city"></Select>
        <Select field-key="marrital_status" v-model="formData.marrital_status"></Select>
        <textarea v-model="formData.about" cols="30" rows="10" placeholder="О себе"></textarea>
        <input type="password" v-model="formData.password" placeholder="Пароль">
        <input type="password" v-model="formData.password2" placeholder="Подтвердите пароль">

        <button class="form-btn" type="submit">Зарегистрироваться</button>
      </form>
    </div>
  </div>
</template>

<script>
import Select from "@/components/fields/Select";

export default {
  components: {
    Select
  },
  data() {
    return {
      formData: {
        email: "",
        full_name: "",
        sex: "",
        religion: "",
        age: Number,
        city: "",
        marrital_status: "",
        about: "",
        password: "",
        password2: ""
      }
    }
  },
  methods: {
    async submitForm() {
      await this.$api.signUp(this.formData)
    }
  }
}
</script>

<style>

</style>