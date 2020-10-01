<template>
  <ul class="nav-bar">
    <li>导航栏</li>
    <li>｜</li>
    <li>
      <router-link to="/components">组件</router-link>
    </li>
    <li>｜</li>
    <li>
      <router-link to="/about">关于</router-link>
    </li>
  </ul>
</template>

<script lang="ts">
export default {
  setup() {},
};
</script>

<style lang="scss" scoped>
.nav-bar {
  margin-top: 44px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  > li {
    display: flex;
    align-items: center;

    position: relative;
    font-size: 20px;
    font-weight: 600;

    &:first-child {
      font-weight: 400;
      font-size: 14px;
    }

    > .show-menu-btn {
      width: 44px;
      height: 44px;
      cursor: pointer;
    }

    > a {
      &.router-active,
      &:hover {
        color: #364f6b;
      }
    }
  }
}
</style>
