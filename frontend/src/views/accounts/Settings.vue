<template>
  <div class="settings">
    <div class="wrapper">

      <button @click="$router.push({name: 'logout'})" class="quest-btn">Выйти из аккаунта</button>

      <p class="title">Общая информация вашего аккаунта</p>

      <form action="" class="form" @submit.prevent="submitForm">
        <input class="form-input" placeholder="Ваше новое Имя Фамилия" v-model="formData.full_name">
        <input type="text" class="form-input" placeholder="Возвраст" v-model="formData.age">
        <Select field-key="city" v-model="formData.city"></Select>
        <Select field-key="marrital_status" v-model="formData.marrital_status"></Select>
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
import Select from "@/components/fields/Select";

export default {
  components: {
    Select
  },
  data() {
    return {
      formData: {
        city: "",
        marrital_status: "",
        full_name: "",
        about: "",
        age: "",
      },
    }
  },
  methods: {
    async submitForm() {
      await this.$api.editAccount(this.getFormData())
      this.$store.dispatch("setMeState")
    },
    getFormData() {
      let data = {}

      Object.keys(this.formData).forEach(key => {
        if (this.formData[key]) data[key] = this.formData[key]
      })
      return data
    },
  }
}
</script>

<style lang="scss" scoped>

.form-file {
  margin: 10px 0;
}

</style>