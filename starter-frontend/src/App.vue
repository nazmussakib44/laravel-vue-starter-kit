<template>
  <div>
    <siteHeader />
    <main class="container mx-auto">
      <router-view />
    </main>
  </div>
</template>

<script>
import siteHeader from "@/components/header/header.vue";

export default {
  name: "App",
  components: {
    siteHeader
  },
  data: function () {
    return {
      
    };
  },
  created() {
    this.$store.dispatch("auth/check_auth");
  },
};
</script>

<style lang="scss">
@import "./assets/scss/app.scss";
</style>