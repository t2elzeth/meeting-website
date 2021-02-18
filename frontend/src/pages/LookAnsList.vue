<template>
   <div class="look">
      <div class="wrapper">

         <p class="title">Список людей которые ответили на ваш "Название теста"</p>

         <div class="quest">
            <div class="quest-list-look">
               <p class="quest-title">"Имя человека"</p>
            </div>
            <button @click="$router.push({ name: 'look-answer-human' })" class="quest-btn">Перейти</button>
         </div>

         <div class="quest">
            <div class="quest-list-look">
               <p class="quest-title">"Имя человека"</p>
            </div>
            <button @click="$router.push({ name: 'look-answer-human' })" class="quest-btn">Перейти</button>
         </div>

         <div class="quest">
            <div class="quest-list-look">
               <p class="quest-title">"Имя человека"</p>
            </div>
            <button @click="$router.push({ name: 'look-answer-human' })" class="quest-btn">Перейти</button>
         </div>

      </div>
   </div>
</template>

<script>
export default {

}
</script>

<style>

</style>