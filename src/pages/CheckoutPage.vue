<template>
  <div class="checkout-container">
    <div class="content-form">
      <h1>Finalizar Pedido</h1>

      <form @submit.prevent="validateForm">
        <div class="contact-info" style="margin-bottom: 2em">
          <h2>Informações de contato</h2>

          <div class="form-group">
            <label>Nome Completo</label>
            <input v-model="form.nome" type="text" required />
          </div>

          <div class="form-group">
            <label>Email</label>
            <input v-model="form.email" type="email" required />
          </div>

          <div class="form-group">
            <label>Telefone</label>
            <input
              v-model="form.telefone"
              type="tel"
              v-mask="'(##) #####-####'"
              required
            />
          </div>
        </div>

        <div class="delivery-info" style="margin-bottom: 2em">
          <h2>Informações de entrega</h2>
          <div class="form-group cep">
            <div>
              <label>CEP</label>
              <input
                v-model="form.cep"
                type="text"
                v-mask="'#####-###'"
                required
              />
            </div>
            <button type="button" @click="buscarEndereco">
              <Search />
            </button>
          </div>

          <div class="flex-row">
            <div class="form-group" style="flex: 3">
              <label>Endereço</label>
              <input v-model="form.endereco" type="text" required />
            </div>
            <div class="form-group" style="flex: 1">
              <label>Número</label>
              <input v-model="form.numero" type="text" required />
            </div>
          </div>

          <div class="form-group">
            <label>Bairro</label>
            <input v-model="form.bairro" type="text" required />
          </div>

          <div class="flex-row">
            <div class="form-group">
              <label>Cidade</label>
              <input v-model="form.cidade" type="text" required />
            </div>

            <div class="form-group">
              <label>Estado</label>
              <input v-model="form.estado" type="text" required />
            </div>
          </div>
        </div>

        <div class="payment-info">
          <h2>Dados de pagamento</h2>
          <div class="form-group">
            <label>Cartão de Crédito</label>
            <input
              v-model="form.cartao"
              type="text"
              v-mask="'#### #### #### ####'"
              required
            />
          </div>

          <div class="flex-row">
            <div class="form-group">
              <label>Validade</label>
              <input
                v-model="form.validade"
                type="text"
                v-mask="'##/##'"
                required
              />
            </div>

            <div class="form-group">
              <label>CVV</label>
              <input v-model="form.cvv" type="text" v-mask="'###'" required />
            </div>
          </div>
        </div>

        <button type="submit">Finalizar Pedido</button>
      </form>
    </div>

    <div class="content-item">
      <h3>Sua sacola</h3>

      <div class="card-checkout" v-for="(item, index) in cart" :key="index">
        <img src="@/assets/images/camiseta-1.avif" alt="" />

        <div class="details-checkout">
          <div>
            <p>{{ item.nome }}</p>
            <span>R$ {{ item.preco.toFixed(2) }}</span>
          </div>

          <div>
            <span>Quantidade:</span>
            <div class="checkout-values">
              <button @click="alterarQuantidade(index, -1)">-</button>
              <div>
                <input type="text" v-model="item.quantidade" readonly />
              </div>
              <button @click="alterarQuantidade(index, 1)">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Search } from "lucide-vue-next";
import { mask } from "vue-the-mask";
import cep from "cep-promise";

export default {
  directives: { mask },
  components: { Search },
  data() {
    return {
      form: {
        nome: "",
        email: "",
        telefone: "",
        cep: "",
        endereco: "",
        bairro: "",
        cidade: "",
        estado: "",
        numero: "",
        cartao: "",
        validade: "",
        cvv: "",
      },
      cart: [
        {
          nome: "Produto Lorem",
          preco: 12.9,
          quantidade: 1, // Agora inicia com 1
        },
      ],
    };
  },
  methods: {
    validateForm() {
      for (const key in this.form) {
        if (!this.form[key]) {
          alert("Por favor, preencha todos os campos.");
          return;
        }
      }

      console.log("Pedido finalizado com sucesso!");
      console.log("Dados do formulário:", this.form);
      console.log(
        "Itens do pedido:",
        this.cart.map((item) => ({
          nome: item.nome,
          quantidade: item.quantidade,
          preco: item.preco.toFixed(2),
        }))
      );

      alert("Pedido finalizado com sucesso!");
    },
    async buscarEndereco() {
      if (!this.form.cep || this.form.cep.length < 9) {
        alert("Digite um CEP válido.");
        return;
      }

      try {
        const resultado = await cep(this.form.cep.replace(/\D/g, ""));
        this.form.endereco = resultado.street;
        this.form.bairro = resultado.neighborhood;
        this.form.cidade = resultado.city;
        this.form.estado = resultado.state;
      } catch (error) {
        alert("CEP não encontrado. Verifique e tente novamente.");
      }
    },
    alterarQuantidade(index, valor) {
      if (this.cart[index].quantidade + valor >= 1) {
        this.cart[index].quantidade += valor;
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "../assets/theme.less";

.checkout-container {
  height: 100%;
  margin: auto;
  padding: 6em 4em;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  gap: 4em;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    padding: 4em 2em;
    gap: 2em;
  }
}

.content-form {
  width: 600px;

  @media (max-width: 768px) {
    width: 100%;
  }

  h1 {
    text-align: center;
    margin-bottom: 20px;
  }

  form {
    width: 100%;
  }

  .form-group {
    margin-bottom: 20px;
    box-sizing: border-box;

    label {
      display: block;
      margin-bottom: 5px;
    }

    input {
      width: 100%;
      padding: 10px;
      border: 1px solid #e0e0e0;
      font-size: 16px;
      box-sizing: border-box;

      &:focus {
        border-color: @accent-color;
        outline: none;
      }
    }
  }

  .flex-row {
    display: flex;
    gap: 1.5em;

    @media (max-width: 600px) {
      flex-direction: column;
    }
  }

  .cep {
    display: flex;
    align-items: end;
    gap: 1em;

    button {
      width: 60px;
      height: 40px;
      margin-top: 0;
      color: #fff;
    }
  }

  button {
    width: 100%;
    padding: 10px;
    background: #000;
    color: #fff;
    border: none;
    margin-top: 2em;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      background: darken(@primary-color, 10%);
    }
  }
}

.content-item {
  width: 500px;
  height: auto;
  background: #fff;
  border: 1px solid #e0e0e0;
  padding: 10px 2em;
  margin-top: 2em;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px 1em;
  }

  > h3 {
    font-size: 2em;
    font-weight: normal;
  }
}

.card-checkout {
  display: flex;
  gap: 2em;
  flex-wrap: wrap;

  img {
    width: 200px;

    @media (max-width: 768px) {
      width: 150px;
    }
  }

  p {
    font-weight: bold;
    font-size: 1.5em;
    margin-top: 0;
  }

  span {
    font-size: 1.5em;
  }
}

.details-checkout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.checkout-values {
  width: 100%;
  display: flex;
  align-items: end;
  margin-top: 1em;

  span {
    font-size: 1em;
    text-align: center;
  }

  button {
    width: 40px;
    height: 35px;
    font-size: 1.8em;
    border: none;
    background: #000;
    color: #fff;
    cursor: pointer;
  }

  input {
    width: 50px;
    height: 30px;
    margin: 0 15px;
    font-size: 1.8em;
    text-align: center;
  }
}
</style>
