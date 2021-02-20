<template>
  <div id="app">
    <div class="wrap">
      <div class="main">
        <Nav></Nav>
        <router-view v-slot="{Component}">
          <transition name="content" appear>
            <component :is="Component"></component>
          </transition>
        </router-view>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'

export default {
  name: 'App',
  components: {
    Nav,
    Footer
  }
}
</script>

<style lang="scss" scoped>

.content-enter-active {
  animation: animationIn .1s;
  animation-delay: .2s;
  opacity: 0;
}

.content-leave-active {
  animation: animationOut .1s;
}

@keyframes animationOut {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-50px);
    opacity: 0;
  }
}

@keyframes animationIn {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}

</style>