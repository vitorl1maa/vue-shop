<script setup lang="ts">
import ProductList from "./components/ProductList.vue";
</script>

<template>
  <main class="container" id="app">
    <ProductList />
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
}
</style>
