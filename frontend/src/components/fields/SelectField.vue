<template>
  <select v-bind:value="modelValue" v-on:input="$emit('update:modelValue', $event.target.value)">
    <option value="" disabled selected hidden>{{ selectFields[fieldKey].placeholder }}</option>
    <option v-for="(field, index) in selectFields[fieldKey].options" :key="index" :value="field">{{ field }}</option>
  </select>
</template>

<script>
export default {
  props: ["fieldKey", "modelValue"],
  data() {
    return {
      selectFields,
    }
  },
}

const selectFields = {
  city: {
    placeholder: "Город",
    options: ["Бишкек", "Ош", "Нарын", "Ыссык-Кол", "Талас", "Жалал-Абад", "Баткен"]
  },
  marrital_status: {
    placeholder: "Семейное положение",
    options: [
      "Не женат / Не замужем. Нет детей",
      "Женат / Замужем. Нет детей",
      "Женат / Замужем. Есть дети",
      "В разводе",
      "Вдовец / Вдова",
      "Гражданский брак. Нет детей",
      "Гражданский брак. Есть дети",
    ]
  },
  religion: {
    placeholder: "Религия",
    options: [
      "Христианство", "Ислам", "Индуизм", "Буддизм", "Синтоизм", "Даосизм", "Сикхизм", "Иудаизм", "Шаманизм", "Каодай"
    ]
  },
}
</script>
