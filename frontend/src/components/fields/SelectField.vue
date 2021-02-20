<template>
  <select v-bind:value="modelValue" v-on:input="$emit('update:modelValue', $event.target.value)">
    <option value="" disabled selected hidden>{{ placeholder }}</option>
    <option v-for="(field, index) in selectFields[fieldKey]" :key="index" :value="field">{{ field }}</option>
  </select>
</template>

<script>
import selectFields from "@/utils/fields/selectFields";

export default {
  props: ["placeholder", "fieldKey", "modelValue"],
  data() {
    return {
      selectFields,
    }
  },
}
</script>
