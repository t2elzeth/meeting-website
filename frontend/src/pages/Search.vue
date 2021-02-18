<template>
   <div class="search">
      <div class="wrapper">

         <p class="title">Страница для поиска</p>

         <div class="search-tools">

            <span class="subtitle">поиск аккаунта по общей информации</span>

            <div class="search-block">
               <span class="text">Пол</span>

               <form class="search-block-label" action="">

                  <div class="search-block-label-item">
                     <input class="search-block-label-input" type="checkbox" value="Мужской" name="Мужский" id="male">

                     <label for="male"><span class="text">Мужской</span></label>
                  </div>

                  <div class="search-block-label-item">
                     <input class="search-block-label-input" type="checkbox" value="Женский" name="Женский" id="female">

                     <label for="female"><span class="text">Женский</span></label>
                  </div>
                  
               </form>
            </div>

            <div class="search-block">
               <span class="text">Возвраст</span>

               <form action="" class="search-block-label">

                  <div class="search-block-label-item">
                     <input type="checkbox" class="search-block-label-input">

                     <label for=""><span class="text">от 18 до 25</span></label>
                  </div>

                  <div class="search-block-label-item">
                     <input type="checkbox" class="search-block-label-input">

                     <label for=""><span class="text">от 25 до 30</span></label>
                  </div>

                  <div class="search-block-label-item">
                     <input type="checkbox" class="search-block-label-input">

                     <label for=""><span class="text">от 30 до 35</span></label>
                  </div>

                  <div class="search-block-label-item">
                     <input type="checkbox" class="search-block-label-input">

                     <label for=""><span class="text">от 35 до 40</span></label>
                  </div>

                  <div class="search-block-label-item">
                     <input type="checkbox" class="search-block-label-input">

                     <label for=""><span class="text">выше 40 лет</span></label>
                  </div>

               </form>
            </div>

            <div class="search-block">
               <span class="text">Семейное положение</span>

               <form class="search-block-label" action="">

                  <div class="search-block-label-item">
                     <input class="search-block-label-input" type="checkbox" value="Свободен, не был в браке" name="Свободен, не был в браке">

                     <label for=""><span class="text">Свободен, не был в браке</span></label>
                  </div>

                  <div class="search-block-label-item">
                     <input class="search-block-label-input" type="checkbox" value="Разведен" name="Разведен">

                     <label for=""><span class="text">Разведен</span></label>
                  </div>

                  <div class="search-block-label-item">
                     <input class="search-block-label-input" type="checkbox" value="Вдовец" name="Вдовец">

                     <label for=""><span class="text">Вдовец</span></label>
                  </div>

                  <div class="search-block-label-item">
                     <input class="search-block-label-input" type="checkbox" value="Без детей" name="Без детей">

                     <label for=""><span class="text">Без детей</span></label>
                  </div>

                  <div class="search-block-label-item">
                     <input class="search-block-label-input" type="checkbox" value="С детьми" name="С детьми">

                     <label for=""><span class="text">С детьми</span></label>
                  </div>
                  
               </form>
            </div>

            <div class="search-block">
               <span class="text">Город</span>

               <form class="search-block-label" action="">

                  <select class="form-input search-input" name="Область" id="region">
                     <option value="Бишкек">Бишкек</option>
                     <option value="Ош">Ош</option>
                     <option value="Нарын">Нарын</option>
                     <option value="Жалал-абад">Жалал-Абад</option>
                     <option value="Талас">Талас</option>
                     <option value="Иссык-куль">Иссык-куль</option>
                     <option value="Баткен">Баткен</option>
                  </select>
                  
               </form>
            </div>

            <button @click="$router.push({ name: 'lookacc-list' })" class="quest-btn search-btn">Поиск</button>
         
         </div>

         <div class="search-tools">

            <span class="subtitle">поиск аккаунта по id</span>

            <div class="search-block">
               <span class="text">Поиск по ID</span>

               <input type="text" class="search-input" placeholder="Без надписи id только номер">
            </div>

            <button @click="$router.push({ name: 'lookacc-list' })" class="quest-btn search-btn">Поиск</button>

         </div>  

      </div>
   </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>



</style>