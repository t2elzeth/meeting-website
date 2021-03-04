<template>
  <TheSidenav></TheSidenav>
  <main class="main">
    <TheNav></TheNav>
    <router-view :key="$route.fullPath"></router-view>
  </main>
  <TheFooter class="footer"/>
</template>

<script>
import TheSidenav from "@/components/layout/TheSidenav";
import TheNav from "@/components/layout/TheNav";
import TheFooter from "@/components/layout/TheFooter";

export default {
  name: "DefaultLayout",
  components: {
    TheFooter, TheNav, TheSidenav
  },
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
