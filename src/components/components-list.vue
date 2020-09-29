<template>
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
</template>

<script lang="ts">
export default {
  name: 'components-list',
};
</script>

<style lang="scss" scoped>
.menu {
  position: absolute;
  z-index: 10;
  top: 100%;
  left: 0;
  width: 120px;

  padding: 8px 16px;
  background: #FFFFFF;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.32);

  > li {
    margin: 4px;
  }
}
</style>
