<template>
  <div id="app">
    <component :is="layout">
      <slot/>
    </component>
  </div>
</template>

<script>
const defaultLayout = "default-layout";
import {apiServer} from "@/utils/api/utils";

export default {
  name: 'App',
  data() {
    return {
      layout: this.$route.meta.layout || defaultLayout
    }
  },
  created() {
    console.log(apiServer)
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