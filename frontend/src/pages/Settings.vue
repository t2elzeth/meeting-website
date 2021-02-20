<template>
  <div class="settings">
    <div class="wrapper">

      <button @click="logout" class="quest-btn">Выйти из аккаунта</button>

      <p class="title">Общая информация вашего аккаунта</p>

      <form action="" class="form" @submit.prevent="submitForm">
        <input class="form-input"
               placeholder="Ваше новое Имя Фамилия"
               maxlength="25"
               v-model="formData.full_name">
        <input type="text" class="form-input" placeholder="Возвраст" v-model="formData.age">
        <select v-model="formData.city">
          <option value="" disabled selected hidden>Город</option>
          <option v-for="(city, index) in cityChoices" :key="index" :value="city">{{ city }}</option>
        </select>
        <SelectField></SelectField>
        <select v-model="formData.marrital_status">
          <option value="" disabled selected hidden>Семейный статус</option>
          <option v-for="(status, index) in marritalStatusChoices" :key="index" :value="status">{{ status }}</option>
        </select>
        <textarea class="form-mess"
                  maxlength="500"
                  cols="30"
                  rows="10"
                  name="О себе"
                  v-model="formData.about"
                  placeholder="О себе">
        </textarea>
        <button class="form-btn">Сохранить</button>
      </form>
    </div>
  </div>
</template>

<script>
import SelectField from "@/components/SelectField";

import axios from "axios";
import urls from "@/utils/api";
import auth from "@/utils/auth";

export default {
  components: {
    SelectField
  },
  data() {
    return {
      formData: {
        city: "",
        marrital_status: "",
        full_name: "",
        about: "",
        age: ""
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
    }
  },
  methods: {
    submitForm() {
      axios.patch(urls.whoAmI, this.getFormData(), auth.getCredentials())
           .then(res => console.log(res.data))
           .catch(err => console.log(err))
    },
    getFormData() {
      let data = {}

      Object.keys(this.formData).forEach(key => {
        if (this.formData[key]) data[key] = this.formData[key]
      })
      return data
    },
    logout() {
      axios.post(urls.logout, {}, auth.getCredentials())
           .then(res => res.data)
           .catch(console.log)

      auth.removeToken()
      this.$store.dispatch("deleteMeState")
      this.$router.push({name: "login"})
    }
  }
}
</script>

<style lang="scss" scoped>

.form-file {
  margin: 10px 0;
}

</style>