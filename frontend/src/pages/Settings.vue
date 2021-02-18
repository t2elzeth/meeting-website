<template>
   <div class="settings">
      <div class="wrapper">

         <button @click="$router.push({ name: 'main' })" class="quest-btn">Выйти из аккаунта</button>

         <p class="title">Общая информация вашего аккаунта</p>

         <form action="" class="form">

            <textarea type="text" class="form-mess" maxlength="500" cols="30" rows="10" name="О себе" placeholder="О себе"></textarea>

            <input type="text" class="form-input" placeholder="Возвраст">

            <select class="form-input search-input" name="Область" id="region">
               <option value="Бишкек">Бишкек</option>
               <option value="Ош">Ош</option>
               <option value="Нарын">Нарын</option>
               <option value="Жалал-абад">Жалал-Абад</option>
               <option value="Талас">Талас</option>
               <option value="Иссык-куль">Иссык-куль</option>
               <option value="Баткен">Баткен</option>
            </select>

            <select class="form-input search-input" name="пол" id="sex">
               <option value="Мужской">Мужской</option>
               <option value="Женский">Женский</option>
            </select>

            <select class="form-input search-input" name="пол" id="family">
               <option value="Свободен, не был в браке">Свободен, не был в браке</option>
               <option value="Разведен">Разведен</option>
               <option value="Вдовец">Вдовец</option>
               <option value="Без детей">Без детей</option>
               <option value="С детьми">С детьми</option>
            </select>

            <button class="form-btn">Сохранить</button>

         </form>

         <p class="title">Настройки вашего аккаунта</p>

         <form class="form" action="">

            <!-- <span class="text">Выберите вашу фотографию для аккаунта</span>

            <input type="file" class="form-file form-btn" name="Аватар" id="avatar"> -->

            <input class="form-input" type="text" placeholder="Ваше новое Имя Фамилия" maxlength="25">

            <input class="form-input" type="text" placeholder="Ваша новая почта">

            <input class="form-input" type="password" placeholder="Ваш новый пароль">

            <input class="form-input" type="password" placeholder="Ваш старый пароль">

            <button class="form-btn" type="submit">Изменить</button>

         </form>

      </div>
   </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.form-file {
   margin: 10px 0;
}

</style>