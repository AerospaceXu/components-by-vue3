<template>
  <div class="wrapper">
    <div class="components-description">
      <div>
        <h2>已有组件</h2>
        <ul class="components-we-have">
          <li>Switch 开关按钮</li>
        </ul>
      </div>
      <div>
        <h2>计划组件</h2>
        <ul class="components-to-do">
          <li>Button 按钮组件</li>
          <li>Dialog 对话框组件</li>
          <li>Tabs 标签栏组件</li>
        </ul>
      </div>
    </div>
    <button-component
      size="large"
      type="secondary"
      @click="setMenuVisible(true)"
    >
      组件列表
    </button-component>
    <components-list-component
      v-if="menuVisible"
      @click.stop="setMenuVisible(false)"
    />
    <div class="components-pages">
      <h3>组件使用</h3>
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import ComponentsListComponent from '../components/nav-bar/components-list-component.vue';
import ButtonComponent from '../components/button-component.vue';

export default {
  components: { ComponentsListComponent, ButtonComponent },
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
h3 {
  text-align: left;
  font-size: 18px;
  margin-bottom: 8px;
}

.wrapper {
  width: 88vw;
  max-width: 728px;
  margin: 0 auto;

  > .components-description {
    width: 100%;
    margin-top: 16px;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }

    > div {
      margin: 0 40px;
    }

    h2 {
      margin-top: 24px;
      margin-bottom: 8px;
    }

    .components-we-have,
    .components-to-do {
      display: flex;
      align-items: flex-start;
      flex-direction: column;

      > li {
        list-style-type: decimal;
      }
    }
  }

  > .components-pages {
    margin: 44px auto;
  }
}
</style>
