<template>
  <div class="search">
    <div class="wrapper">

      <p class="title">Страница для поиска</p>

      <div class="quest">
        <p class="quest-title">"Имя и фамилия человека"</p>
        <button @click="$router.push({ name: 'account-detail' })" class="quest-btn">Перейти</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>


</style>