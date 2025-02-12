<template>
  <div :class="['wrapper', { 'menu-open': isOpen }]">
    <header class="navbar">
      <strong>Vue Sh<span>o</span>p</strong>

      <button class="menu-btn" @click="toggleMenu">
        <Menu v-if="!isOpen" />
        <X v-else />
      </button>

      <ul :class="['menu', { open: isOpen }]">
        <li @click="closeMenu">Produtos</li>
        <li @click="closeMenu">Sobre</li>
        <li @click="closeMenu">Serviços</li>
        <li @click="closeMenu">Contatos</li>
      </ul>
    </header>
  </div>
</template>

<script>
import { Menu, X } from "lucide-vue-next";

export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      this.isOpen = false;
    },
  },
  components: {
    Menu,
    X,
  },
};
</script>

<style lang="less">
@import "../assets/theme.less";

@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slideOut {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

.navbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: @primary-color;
  color: #fff;
  padding: 10px 5em;
  position: fixed;
  z-index: 10;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  > strong {
    font-size: 1.5em;

    span {
      color: @accent-color;
    }
  }

  .menu-btn {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.8em;
    color: white;
  }
}

.menu {
  width: 450px;
  list-style: none;
  display: flex;
  gap: 20px;

  li {
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: lighten(@accent-color, 10%);
      font-weight: 800;
    }
  }
}

@media (max-width: 800px) {
  .navbar {
    padding: 10px 1em;

    .menu-btn {
      display: flex;
      width: 15%;
    }
  }

  .menu {
    position: fixed;
    top: -30px;
    left: 0;
    width: 250px;
    height: 100%;
    background: @primary-color;
    flex-direction: column;
    align-items: center;
    padding: 50px 20px;
    transform: translateX(-100%);
    transition: transform 0.4s ease-out, box-shadow 0.4s ease-in-out;
    animation: slideOut 0.4s ease-out forwards;
    box-shadow: none;
  }

  .menu.open {
    animation: slideIn 0.4s ease-in forwards;
  }

  .menu li {
    padding: 15px 0;
  }
}
</style>
