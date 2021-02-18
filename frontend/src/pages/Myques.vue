<template>
   <section class="questions">
      <div class="wrapper">

         <p class="title">Ваши вопросы</p>

         <Error></Error>

         <div class="quest">
            <p class="quest-title">Название опроса</p>
            <button @click="$router.push({ name: 'look-you-question' })" class="quest-btn">Перейти</button>
         </div>

         <div class="quest">
            <p class="quest-title">Опрос на гомосекуальную ориентацию</p>
            <button @click="$router.push({ name: 'look-you-question' })" class="quest-btn">Перейти</button>
         </div>

         <div class="quest">
            <p class="quest-title">Опрос на дауна</p>
            <button @click="$router.push({ name: 'look-you-question' })" class="quest-btn">Перейти</button>
         </div>

         <div class="quest">
            <p class="quest-title">Тест на какое ты дерево в майнкрафте</p>
            <button @click="$router.push({ name: 'look-you-question' })" class="quest-btn">Перейти</button>
         </div>

         <div class="quest">
            <p class="quest-title">Онлайн тест для 7-б класса</p>
            <button @click="$router.push({ name: 'look-you-question' })" class="quest-btn">Перейти</button>
         </div>

      </div>
   </section>
</template>

<script>
import Error from '../components/Error'

export default {
   components: {
      Error
   }
}
</script>

<style lang="scss" scoped>

</style>