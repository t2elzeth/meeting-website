<template>
  <div>
    <h1>Logout page</h1>
  </div>
</template>

<script>
export default {
  name: "Logout",
  async mounted() {
    await this.$api.logout()
    await this.$store.dispatch("deleteMeState")
    await this.$notify.success("Вы успешно вышли из аккаунта!")
    await this.$router.push({name: "login"})
  }
}
</script>

<style scoped>

</style>