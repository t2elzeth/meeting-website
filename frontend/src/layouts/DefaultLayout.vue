<template>
  <Test></Test>
  <main class="main">
    <Nav></Nav>
    <router-view v-slot="{Component}">
      <component :is="Component"></component>
    </router-view>
  </main>
  <Footer class="footer"/>
</template>

<script>
import Test from "@/components/layout/Sidenav";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export default {
  name: "DefaultLayout",
  components: {
    Footer, Nav, Test
  }
};
</script>

<style scoped lang="scss">
@import "../assets/styles/vars";

.main {
  margin-left: $sidebar-width;
  padding: 0 10px;
}

.footer {
  margin-left: $sidebar-width;
}
</style>
