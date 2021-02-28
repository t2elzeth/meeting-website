<template>
  <footer class="footer">
    <div class="wrapper" v-if="auth.isAuthenticated()">
      <div class="footer-content">
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
    <template v-else>
      <button @click="$router.push({ name: 'signup' })" class="footer-btn">Зарегистрироваться</button>
      <button @click="$router.push({ name: 'login' })" class="footer-btn">Войти</button>
      <Error>Ошибка! Пожалуйста войдите в свой аккаунт или зарегистрируйтесь.</Error>
    </template>
  </footer>
</template>

<script>
import Error from "@/components/exceptions/Error";
import auth from "@/utils/auth";

export default {
  components: {
    Error
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
@import "../../assets/styles/vars";

@mixin hover {
  &:hover {
    background-color: #000;
    color: #fff;
  }
}

.footer {
  position: fixed;
  width: calc(100% - #{$sidebar-width});
  bottom: 0;
  right: 0;
  background-color: #000;
  padding: 10px 0;

  &-content {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
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

    @include hover
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
  border: 1px solid #fff;
  outline: none;
  color: rgb(36, 36, 36);
  padding: 5px 10px 5px 0;
  margin: 5px 0;
  cursor: pointer;
  transition: all 0.3s;

  @include hover
}

</style>