<template>
  <div class="checkout-container">
    <div class="content-form">
      <h1>Finalizar Pedido</h1>

      <form @submit.prevent="submitOrder">
        <div class="form-group">
          <label>Nome Completo</label>
          <input v-model="form.name" type="text" required />
        </div>

        <div class="form-group">
          <label>Email</label>
          <input v-model="form.email" type="email" required />
        </div>

        <div class="form-group">
          <label>Telefone</label>
          <input
            v-model="form.phone"
            type="tel"
            pattern="\(\d{2}\) \d{5}-\d{4}"
            placeholder="(99) 99999-9999"
            required
          />
        </div>

        <div class="form-group">
          <label>CEP</label>
          <input v-model="form.cep" type="text" @blur="fetchAddress" required />
        </div>

        <div v-if="loading" class="loading">Carregando endereço...</div>

        <div class="form-group">
          <label>Endereço</label>
          <input v-model="form.address" type="text" required />
        </div>

        <div class="form-group">
          <label>Número</label>
          <input v-model="form.number" type="text" required />
        </div>

        <div class="form-group">
          <label>Cartão de Crédito</label>
          <input
            v-model="form.card"
            type="text"
            pattern="\d{16}"
            placeholder="1234123412341234"
            required
          />
        </div>

        <div class="form-group">
          <label>Validade</label>
          <input
            v-model="form.expiry"
            type="text"
            pattern="\d{2}/\d{2}"
            placeholder="MM/AA"
            required
          />
        </div>

        <button type="submit">Finalizar Pedido</button>
      </form>
    </div>

    <div class="content-item">
      <h2>image</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore quis
        odio tempora possimus laudantium molestias. At voluptates consequuntur
        repellendus soluta porro. Debitis reiciendis, corporis amet laudantium
        et nemo possimus autem.
      </p>
    </div>

    <!-- <div v-if="successMessage" class="success">{{ successMessage }}</div> -->
  </div>
</template>

<script>
import cep from "cep-promise";
import { ref } from "vue";

export default {
  setup() {
    const cart = ref([
      { name: "Camiseta Preta", price: 49.9, quantity: 1 },
      { name: "Calça Jeans", price: 89.9, quantity: 1 },
    ]);

    const form = ref({
      name: "",
      email: "",
      phone: "",
      cep: "",
      address: "",
      number: "",
      card: "",
      expiry: "",
    });

    const loading = ref(false);
    const successMessage = ref("");

    const fetchAddress = async () => {
      if (form.value.cep.length !== 8) return;
      loading.value = true;
      try {
        const addressData = await cep(form.value.cep);
        form.value.address = `${addressData.street}, ${addressData.neighborhood}, ${addressData.city} - ${addressData.state}`;
      } catch (error) {
        console.error("Erro ao buscar o CEP", error);
      } finally {
        loading.value = false;
      }
    };

    const submitOrder = () => {
      if (
        !form.value.name ||
        !form.value.email ||
        !form.value.phone ||
        !form.value.cep ||
        !form.value.address ||
        !form.value.number ||
        !form.value.card ||
        !form.value.expiry
      ) {
        alert("Por favor, preencha todos os campos corretamente!");
        return;
      }

      console.log({
        cart: cart.value,
        form: form.value,
      });

      successMessage.value = "Pedido finalizado com sucesso!";
    };

    return { cart, form, fetchAddress, loading, submitOrder, successMessage };
  },
};
</script>

<style lang="less" scoped>
@import "../assets/theme.less";
.checkout-container {
  height: 100%;
  margin: auto;
  padding: 8em 5em;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.content-form {
  form {
    width: 100%;
  }

  width: 40%;

  h1 {
    text-align: center;
    margin-bottom: 20px;
  }

  .form-group {
    margin-bottom: 20px;
    width: 100%;
    box-sizing: border-box;

    label {
      display: block;
      margin-bottom: 5px;
    }

    input {
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 16px;
      box-sizing: border-box;

      &:focus {
        border-color: @accent-color;
        outline: none;
      }
    }
  }

  .loading {
    margin-bottom: 20px;
    color: #999;
  }

  button {
    width: 100%;
    padding: 10px;
    background: #000;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      background: darken(@primary-color, 10%);
    }
  }
}

.content-item {
  width: 10%;
}
</style>
