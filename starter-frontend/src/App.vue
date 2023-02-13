<template>
  <section class="h-full gradient-form bg-gray-200 md:h-screen">
    <siteHeader />
    <div class="container h-full w-full max-w-full">
      <div class="flex justify-center items-center flex-wrap h-full text-gray-800">
        <router-view />
      </div>
    </div>
  </section>
</template>

<script>
import siteHeader from "@/components/header/header.vue";
import '@/assets/tailwind.css';

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
