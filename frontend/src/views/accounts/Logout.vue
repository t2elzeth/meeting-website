<template>
  <div>
    <h1>Logout page</h1>
  </div>
</template>

<script>
import axios from "axios";
import urls from "@/utils/api";
import auth from "@/utils/auth";

export default {
  name: "Logout",
  methods: {
    logout() {
      axios.post(urls.logout, {}, auth.getCredentials())
           .then(res => {
             console.log(res.data)
             auth.removeToken()
             this.$store.dispatch("deleteMeState")
             location.reload()
             this.$router.push({name: "login"})
           })
           .catch(console.log)
    },
  },
  created() {
    this.logout()
  }
}
</script>

<style scoped>

</style>