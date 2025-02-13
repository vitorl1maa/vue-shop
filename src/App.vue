<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import ProductList from "./pages/ShirtsList.vue";
import CategorySelect from "./components/CategorySelect.vue";
</script>

<template>
  <header>
    <Navbar />
  </header>

  <main class="container" id="app">
    <router-view />
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
  width: 100%;
  background: @background-color;
  display: flex;
}
</style>
