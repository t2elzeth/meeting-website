<template>
  <div>
    <select>
      <option value="" disabled selected hidden>Город</option>
      <option v-for="(city, index) in cityChoices" :key="index" :value="city">{{ city }}</option>
    </select>
  </div>
</template>

<script>
import {cityChoices} from "@/utils/forms/selectFields";

export default {
  data() {
    return {
      marritalStatusChoices: [
        "Не женат / Не замужем. Нет детей",
        "Женат / Замужем. Нет детей",
        "Женат / Замужем. Есть дети",
        "В разводе",
        "Вдовец / Вдова",
        "Гражданский брак. Нет детей",
        "Гражданский брак. Есть дети",
      ],
      cityChoices
    }
  },
}
</script>
