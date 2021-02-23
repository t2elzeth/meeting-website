<template>
  <div>
    <h1>Logout page</h1>
  </div>
</template>

<script>
const api = require("@/utils/api")

import {success} from "@/utils/notifications";

export default {
  name: "Logout",
  async mounted() {
    await api.logout()
    this.$store.dispatch("deleteMeState")

    success("Вы успешно вышли из аккаунта!").then(() => this.$router.push({name: "login"}))
  }
}
</script>

<style scoped>

</style>