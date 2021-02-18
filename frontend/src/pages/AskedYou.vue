<template>
   <div class="you">
      <div class="wrapper">

         <p class="title">Вам ответили</p>

         <Error></Error>

         <div class="quest">
            <p class="quest-title">Опрос на гомосекуальную ориентацию</p>
            <button @click="$router.push({ name: 'look-list-ans' })" class="quest-btn">Перейти</button>
         </div>

         <div class="quest">
            <p class="quest-title">Опрос на дауна</p>
            <button @click="$router.push({ name: 'look-list-ans' })" class="quest-btn">Перейти</button>
         </div>

         <div class="quest">
            <p class="quest-title">Тест на какое ты дерево в майнкрафте</p>
            <button @click="$router.push({ name: 'look-list-ans' })" class="quest-btn">Перейти</button>
         </div>

         <div class="quest">
            <p class="quest-title">Онлайн тест для 7-б класса</p>
            <button @click="$router.push({ name: 'look-list-ans' })" class="quest-btn">Перейти</button>
         </div>
         
      </div>
   </div>
</template>

<script>
import Error from '../components/Error'
import {ref} from "vue";
import axios from "axios";
import urls from "../utils/api";
import auth from "../utils/auth";
import {useRouter} from "vue-router";

export default {
   components: {
     Error
   },
  setup() {
     let serverData = ref({})

    axios.get(urls.allQues, auth.getCredentials())
         .then(res => serverData.value = res.data)
         .catch(err => console.log(err))

    function redirectToQuestionnaireDetails(questionnaireId){
      console.log(questionnaireId)
    }

    const router = useRouter();

    return {serverData, redirectToQuestionnaireDetails, router}
  }
}
</script>

<style>

</style>