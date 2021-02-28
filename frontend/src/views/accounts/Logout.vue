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
    this.$store.dispatch("deleteMeState")

    this.$notify.success("Вы успешно вышли из аккаунта!").then(() => this.$router.push({name: "login"}))
  }
}
</script>

<style scoped>

</style>