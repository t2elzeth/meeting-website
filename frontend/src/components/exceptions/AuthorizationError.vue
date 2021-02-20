<template>
  <Error error-message="Ошибка! Пожалуйста войдите в свой аккаунт или зарегистрируйтесь."></Error>
</template>

<script>
import Error from "@/components/exceptions/Error";

export default {
  name: "AuthorizationError",
  components: {
    Error
  }
}
</script>

<style scoped>

</style>