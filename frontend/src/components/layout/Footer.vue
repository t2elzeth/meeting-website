<template>
  <footer class="footer">
    <div class="wrapper" v-if="auth.isAuthenticated()">

      <div class="footer-content">

        <div class="footer-account">

          <button @click="$router.push({ name: 'regis' })" class="footer-btn">Зарегестрироваться</button>
          <button @click="$router.push({ name: 'autorize' })" class="footer-btn">Войти</button>

        </div>

        <!-- как будет выглядеть аккаунт -->

        <div class="footer-settings">

          <div class="footer-settings-info">

            <span class="footer-settings-text">{{ serverData.full_name }}</span>

            <button @click="$router.push({ name: 'settings' })" class="footer-settings-btn">Настройки</button>

            <button @click="$router.push({ name: 'addques' })" class="add-button">Создать вопросник [+]</button>

          </div>


        </div>

        <div class="footer-nav">
          <button @click="$router.push({ name: 'main' })" class="footer-btn">На главную</button>

          <button @click="$router.push({ name: 'search' })" class="footer-btn">Поиск</button>
        </div>

      </div>

    </div>
    <AuthorizationError v-else></AuthorizationError>
  </footer>
</template>

<script>
import AuthorizationError from "@/components/exceptions/AuthorizationError";
import auth from "@/utils/auth";

export default {
  components: {
    AuthorizationError,
  },
  data() {
    return {
      serverData: this.$store.getters.getMe,
      auth
    }
  },
}
</script>

<style lang="scss" scoped>

.footer {
  position: relative;
  width: 100%;
  bottom: 0;
  background-color: #000;
  padding: 10px 0;
  margin-top: 50px;
  flex: 0 0 auto;

  &-content {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }

  &-account {
    // display: flex;
    display: none;
    flex-direction: column;
  }

  &-btn {
    background-color: #fff;
    color: #000;
    border: 1px solid #fff;
    outline: none;
    margin: 10px 0;
    padding: 5px 10px;
    cursor: pointer;
    transition: all .4s;

    &:hover {
      background-color: #000;
      color: #fff;
    }
  }

  &-settings {
    display: flex;
    // display: none;
    flex-direction: row;

    &-info {
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin-left: 10px;
    }

    &-text, &-btn {
      color: #fff;
      margin: 3px 0;
    }

    &-btn {
      display: flex;
      padding: 5px 10px 5px 0;
      border: none;
      background: none;
      outline: none;
      padding: 0;
      cursor: pointer;
    }
  }

  &-nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

.add-button {
  border: none;
  outline: none;
  color: rgb(36, 36, 36);
  padding: 5px 10px 5px 0;
  margin: 5px 0;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: rgb(133, 133, 133);
  }
}

</style>