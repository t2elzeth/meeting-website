<template>
  <div>
    <h1>Logout page</h1>
  </div>
</template>

<script>
const api = require("@/utils/api")

export default {
  name: "Logout",
  async created() {
    await api.logout()
    this.$store.dispatch("deleteMeState")
    location.reload()
    await this.$router.push({name: "login"})
  }
}
</script>

<style scoped>

</style>