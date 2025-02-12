<template>
  <div class="container">
    <select name="select" class="custom-select">
      <option selected class="custom-option">Camisetas</option>
      <option class="custom-option">Regata</option>
    </select>

    <div class="grid">
      <div v-for="(product, index) in products" :key="index" class="card">
        <div class="img-content">
          <img :src="product.image" :alt="product.title" />
        </div>

        <div class="text-content">
          <div>
            <h2>{{ product.title }}</h2>
            <p>{{ product.description }}</p>
          </div>

          <div class="text-footer">
            <span class="price">{{ product.price }}</span>
            <button>Comprar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { faker } from "@faker-js/faker";

import shirt1 from "@/assets/images/camiseta-1.avif";
import shirt2 from "@/assets/images/camiseta-2.avif";
import shirt3 from "@/assets/images/camiseta-3.avif";
import shirt4 from "@/assets/images/camiseta-4.avif";

const shirts = [shirt1, shirt2, shirt3, shirt4];

export default {
  data() {
    return {
      products: this.generateProducts(12),
    };
  },
  methods: {
    generateProducts(count) {
      return Array.from({ length: count }, (_, index) => ({
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: `R$ ${faker.commerce.price(10, 100, 2, ",")}`,
        image: shirts[index % shirts.length],
      }));
    },
  },
};
</script>

<style lang="less">
@import "../assets/theme.less";

.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 3em;

  .custom-select {
    width: 200px;
    padding: 10px;
    font-size: 16px;
    border: 2px solid @accent-color;
    border-radius: 8px;
    background-color: #fff;
    color: @primary-color;
    margin-left: 5em;
    align-self: flex-start;
  }
}

.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
}

.card {
  width: 400px;
  height: 450px;
  display: flex;
  gap: 20px;
  padding: 15px;
  border-radius: 8px;

  text-align: left;

  .img-content {
    width: 60%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;

      object-fit: cover;
    }
  }

  .text-content {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 0;
    h2 {
      font-size: 1.2em;
    }

    p {
      font-size: 1.2em;
      color: #555;
    }
  }

  .text-footer {
    .price {
      display: block;
      font-size: 1.5em;
      font-weight: bold;
      color: @primary-color;
    }

    > button {
      background: #000;
      color: #fff;
      font-size: 1.3em;
      font-weight: 800;

      border: none;
      padding: 5px 15px;
      margin-top: 10px;
      cursor: pointer;
    }
  }
}

@media (max-width: 800px) {
  .card {
    width: 100%;
  }
}
</style>
