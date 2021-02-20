<template>
  <select v-bind:value="modelValue" v-on:input="$emit('update:modelValue', $event.target.value)">
    <option value="" disabled selected hidden>{{ placeholder }}</option>
    <option v-for="(field, index) in selectFields[fieldKey]" :key="index" :value="field">{{ field }}</option>
  </select>
</template>

<script>
export default {
  props: ["placeholder", "fieldKey", "modelValue"],
  data() {
    return {
      selectFields,
    }
  },
}

const selectFields = {
  city: ["Бишкек", "Ош", "Нарын", "Ыссык-Кол", "Талас", "Жалал-Абад", "Баткен"],
  marrital_status: [
    "Не женат / Не замужем. Нет детей",
    "Женат / Замужем. Нет детей",
    "Женат / Замужем. Есть дети",
    "В разводе",
    "Вдовец / Вдова",
    "Гражданский брак. Нет детей",
    "Гражданский брак. Есть дети",
  ],
  religion: [
    "Христианство", "Ислам", "Индуизм", "Буддизм", "Синтоизм", "Даосизм", "Сикхизм", "Иудаизм", "Шаманизм", "Каодай"
  ]
}
</script>
