<template>
  <div class="category-select">
    <select v-model="selectedRoute" class="custom-select" @change="navigate">
      <option value="/">Camisetas</option>
      <option value="/tank-tops">Regata</option>
    </select>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const selectedRoute = ref(route.path);

    const navigate = () => {
      if (route.path !== selectedRoute.value) {
        router.push(selectedRoute.value);
      }
    };

    watch(route, (newRoute) => {
      selectedRoute.value = newRoute.path;
    });

    return {
      selectedRoute,
      navigate,
    };
  },
};
</script>

<style lang="less">
@import "../assets/theme.less";

.category-select {
  display: flex;
  width: 100%;
  padding-top: 8em;
}

.custom-select {
  width: 200px;
  padding: 10px;
  font-size: 1.2em;
  border: 2px solid @accent-color;
  border-radius: 8px;
  background-color: #fff;
  color: @primary-color;
  margin-left: 4em;
  align-self: flex-start;
  outline: none;
}

.custom-select:focus {
  border: 2px solid @accent-color; /* Adiciona a borda ao focar */
}

.custom-option {
  padding: 10px;
  font-size: 16px;
  color: @primary-color;
}

@media (max-width: 800px) {
  .category-select {
    padding-top: 5em;
  }

  .custom-select {
    margin-left: 1em;
  }
}
</style>
