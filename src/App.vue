<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import ShirtsList from "./components/ShirtsList.vue";
</script>

<template>
  <header>
    <Navbar />
  </header>

  <main class="container" id="app">
    <ShirtsList />
  </main>
</template>

<style lang="less">
@import "./assets/theme.less";
@import "./assets/font.less";

body {
  padding: 0;
  margin: 0;
}

.container {
  max-width: 100%;
  background: @background-color;
}
</style>
