<template>
  <div>
    <Error error-message="Ошибка! Пожалуйста войдите в свой аккаунт или зарегестрируйтесь."></Error>
  </div>
</template>

<script>
import Error from "@/components/Error";

export default {
  name: "AuthorizationError",
  components: {
    Error
  }
}
</script>

<style scoped>

</style>