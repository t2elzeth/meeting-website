<template>
   <section class="answers">
      <div class="wrapper">

         <p class="title">Ваши ответы</p>

         <Error></Error>

         <div class="quest">
            <p class="quest-title">Опрос как побрить лобок</p>
            <button @click="$router.push({ name: 'look-answer' })" class="quest-btn">Перейти</button>
         </div>

         <div class="quest">
            <p class="quest-title">Тест на ваш уровень интеллекта</p>
            <button @click="$router.push({ name: 'look-answer' })" class="quest-btn">Перейти</button>
         </div>

         <div class="quest">
            <p class="quest-title">Тест для Ваньки из 3-б класса</p>
            <button @click="$router.push({ name: 'look-answer' })" class="quest-btn">Перейти</button>
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

<style>

</style>