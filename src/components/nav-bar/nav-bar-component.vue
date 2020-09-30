<template>
  <ul class="nav-bar">
    <li>导航栏</li>
    <li>｜</li>
    <li
      @click="setMenuVisible(false)"
      @mouseenter="setMenuVisible(true)"
      @mouseleave="setMenuVisible(false)"
    >
      <router-link to="/components"> 组件</router-link>
      <transition name="fade">
        <components-list-component v-if="menuVisible" />
      </transition>
    </li>
    <li>｜</li>
    <li>
      <router-link to="/about">关于</router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import ComponentsListComponent from './components-list-component.vue';
import { ref } from 'vue';

export default {
  components: { ComponentsListComponent },
  setup() {
    const menuVisible = ref(false);
    const setMenuVisible = (isVisible: boolean) => {
      menuVisible.value = isVisible;
    };
    return {
      menuVisible,
      setMenuVisible,
    };
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.225s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.nav-bar {
  margin-top: 88px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  > li {
    &:first-child {
      font-weight: 400;
      font-size: 14px;
    }

    position: relative;
    font-size: 20px;
    font-weight: 600;

    > a {
      &.router-active,
      &:hover {
        color: #364f6b;
      }
    }
  }
}
</style>
