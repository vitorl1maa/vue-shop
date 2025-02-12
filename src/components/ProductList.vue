<template>
  <div class="container">
    <h1>Camisetas</h1>
    <div class="grid">
      <div v-for="product in products" :key="product.id" class="card">
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
import productImage from "../assets/images/camiseta-1.avif";

export default {
  data() {
    return {
      products: this.generateProducts(12),
    };
  },
  methods: {
    generateProducts(count) {
      return Array.from({ length: count }, () => ({
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: `R$ ${faker.commerce.price(10, 100, 2, ",")}`,
        image: productImage,
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

  > h1 {
    margin: 0;
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
  background: #fff;
  width: 400px;
  height: 450px;
  display: flex;
  gap: 20px;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;

  .img-content {
    width: 60%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      border: 1px solid @accent-color;
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
      font-size: 1em;
      font-weight: 800;
      border-radius: 5px;
      border: none;
      padding: 5px 15px;
      margin-top: 10px;
      cursor: pointer;
    }
  }
}

/* Responsividade */
@media (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
