<template>
  <div class="modal-wrapper">
    <ul class="menu">
      <li>
        <router-link to="/components/switch">Switch</router-link>
      </li>
      <li>
        <router-link to="/components/button">Button</router-link>
      </li>
      <li>
        <router-link to="/components/dialog">Dialog</router-link>
      </li>
      <li>
        <router-link to="/components/tabs">Tabs</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.modal-wrapper {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.32);
}

.menu {
  width: 120px;
  padding: 8px 16px;
  background: #ffffff;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.32);

  > li {
    margin: 4px;

    &:hover {
      background: darken(#ffffff, 25%);
    }
  }
}
</style>
