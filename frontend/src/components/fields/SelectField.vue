<template>
  <select v-model="vModel[fieldKey]">
    <option value="" disabled selected hidden>{{ placeholder }}</option>
    <option v-for="(field, index) in selectFields[fieldKey]" :key="index" :value="field">{{ field }}</option>
  </select>
</template>

<script>
import selectFields from "@/utils/fields/selectFields";

export default {
  props: {
    placeholder: String,
    fieldKey: String,
    formData: Object
  },
  data() {
    return {
      selectFields,
      vModel: this.$props.formData
    }
  },
}
</script>
