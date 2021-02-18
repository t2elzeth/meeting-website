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
        <select v-model="formData.religion">
          <option value="" disabled selected hidden>Религия</option>
          <option v-for="(religion, index) in religionChoices" :key="index" :value="religion">{{ religion }}</option>
        </select>
        <input type="number" v-model="formData.age" placeholder="Возраст">
        <select v-model="formData.city">
          <option value="" disabled selected hidden>Город</option>
          <option v-for="(city, index) in cityChoices" :key="index" :value="city">{{ city }}</option>
        </select>
        <select v-model="formData.marrital_status">
          <option value="" disabled selected hidden>Семейный статус</option>
          <option v-for="(status, index) in marritalStatusChoices" :key="index" :value="status">{{ status }}</option>
        </select>
        <textarea v-model="formData.about" cols="30" rows="10" placeholder="О себе"></textarea>
        <input type="password" v-model="formData.password" placeholder="Пароль">
        <input type="password" v-model="formData.password2" placeholder="Подтвердите пароль">

        <button class="form-btn" type="submit">Зарегистрироваться</button>
      </form>

    </div>
  </div>
</template>

<script>
import axios from "axios"
import urls from "@/utils/api";

export default {
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
      },
      cityChoices: ["Бишкек", "Ош", "Нарын", "Ыссык-Кол", "Талас", "Жалал-Абад", "Баткен"],
      marritalStatusChoices: [
        "Не женат / Не замужем. Нет детей",
        "Женат / Замужем. Нет детей",
        "Женат / Замужем. Есть дети",
        "В разводе",
        "Вдовец / Вдова",
        "Гражданский брак. Нет детей",
        "Гражданский брак. Есть дети",
      ],
      religionChoices: [
        "Христианство", "Ислам", "Индуизм", "Буддизм", "Синтоизм", "Даосизм", "Сикхизм", "Иудаизм", "Шаманизм", "Каодай"
      ]
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