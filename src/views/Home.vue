<template>
  <div class="container box">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <AppSearch />
  </div>
</template>

<script>
// @ is an alias to /src
import AppSearch from "@/components/Search.vue";

export default {
  name: "home",
  components: {
    AppSearch
  }
};
</script>

<style>
.box {
  padding-top: 20vh;
}
/* */
</style>