<template>
   <div class="support">
      <div class="wrapper">

         <p class="title">Поддержка</p>

         <span class="text">Отправьте нам вашу заявку и мы вам ответим</span>

         <form class="form" action="">

            <input class="form-input" type="text" placeholder="Ваша почта" required>

            <input class="form-input" type="text" placeholder="Ваш номер телефона" required>

            <textarea class="form-mess" name="Сообщение" maxlength="150" placeholder="Напишите нам сообщение" cols="30" rows="10" required></textarea>

            <button class="form-btn">Отправить</button>

         </form>

         <div class='support-chat'>
            <p class="text">Или напишите нам сообщение в чате и мы вам ответим... (К сожалению пока что не работает)</p>
            <div class='support-messages'>
               <div class='support-messages__content' id='messages'>
                  <p class="text">Т: Пример того как будет выглядеть текст от лица пользователя "Темиргазы"</p>
                  <p class="text">А: Пример того как будет выглядеть текст от лица администраций</p>
               </div>
            </div>
            <div class='support-input'>
               <form method='' id='support-form'>
                  <input type='text' id='message-text' class='support-form__input' placeholder='Введите сообщение'>
                  <input type='submit' class='support-form__submit' value='✔️'>
               </form>
            </div>
         </div>

      </div>
   </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.support {
   margin: 10px 0;
   &-chat {
      margin-top: 45px;
   }
   &-messages__content {
      border: 1px solid #000;
      max-width: 500px;
      height: 400px;
      margin: 15px 0;
      padding: 5px;
      overflow-y: auto;
   }
   &-form__input {
      width: 80%;
      max-width: 300px;
      border: 1px solid #000;
   }
   &-form__submit {
      background: none;
      border: none;
   }
}

</style>