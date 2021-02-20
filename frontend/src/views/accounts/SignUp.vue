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
        <SelectField placeholder="Религия" field-key="religion" :form-data="formData"></SelectField>
        <input type="number" v-model="formData.age" placeholder="Возраст">
        <SelectField placeholder="Город" field-key="city" :form-data="formData"></SelectField>
        <SelectField placeholder="Семейное положение" field-key="marrital_status" :form-data="formData"></SelectField>
        <textarea v-model="formData.about" cols="30" rows="10" placeholder="О себе"></textarea>
        <input type="password" v-model="formData.password" placeholder="Пароль">
        <input type="password" v-model="formData.password2" placeholder="Подтвердите пароль">

        <button class="form-btn" type="submit">Зарегистрироваться</button>
      </form>

    </div>
  </div>
</template>

<script>
import SelectField from "@/components/fields/SelectField";
import axios from "axios"
import urls from "@/utils/api";

export default {
  components: {
    SelectField
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
    submitForm() {
      axios.post(urls.signUp, this.formData)
           .then(res => console.log(res.data))
           .catch(err => console.log(err))
    }
  }
}
</script>

<style>

</style>