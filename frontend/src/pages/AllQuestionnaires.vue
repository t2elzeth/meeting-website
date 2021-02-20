<template>
  <section class="questions">
    <div class="wrapper" v-if="dataFetched">

      <p class="title">Все анкеты</p>
      <div v-for="item in serverData" :key="item.id" class="quest">
        <p class="quest-title">{{ item.title }}</p>
        <button @click="$router.push({name: 'ansques', params: {id: item.id}})" class="quest-btn">Перейти</button>
      </div>
    </div>
    <div v-else>Content is loading</div>
  </section>
</template>

<script>
import axios from 'axios'
import auth from "../utils/auth";
import urls from "../utils/api";

export default {
  data() {
    return {
      serverData: {},
      answers: {},
      dataFetched: false,
    }
  },
  methods: {
    setServerData(data) {
      this.serverData = data
      this.dataFetched = true
    },
  },
  beforeRouteEnter(to, from, next) {
    axios.get(urls.allQues, auth.getCredentials())
         .then(res => next(vm => vm.setServerData(res.data)))
         .catch(err => console.log(err))
  },
}
</script>

<style>

</style>