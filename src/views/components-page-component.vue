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
    <button class="modal-visible-btn" @click="setMenuVisible(true)">
      组件列表
    </button>
    <components-list-component
      v-if="menuVisible"
      @click.stop="setMenuVisible(false)"
    />
    <div class="components-pages">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import ComponentsListComponent from '../components/nav-bar/components-list-component.vue';

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

  > .modal-visible-btn {
    padding: 8px 24px;
    border: 0.5px solid rgba(0, 0, 0, 0.32);
    border-radius: 12px;
    background: #ffffff;

    font-size: 20px;
    cursor: pointer;

    &:hover {
      background: rgba(0, 0, 0, 0.54);
      color: #ffffff;
    }
  }

  > .components-pages {
    margin: 44px auto;
  }
}
</style>
