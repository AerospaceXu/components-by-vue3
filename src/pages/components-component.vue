<template>
  <div class="components-description">
    <div>
      <h1>已有组件</h1>
      <ul class="components-we-have">
        <li>Switch 开关按钮</li>
      </ul>
    </div>
    <div>
      <h1>计划组件</h1>
      <ul class="components-to-do">
        <li>Button 按钮组件</li>
        <li>Dialog 对话框组件</li>
        <li>Tabs 标签栏组件</li>
      </ul>
    </div>
  </div>
  <router-view />
</template>

<script lang="ts">
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.components-description {
  display: flex;
  justify-content: center;

  > div {
    margin: 0 40px;
  }
}

h1 {
  margin-top: 24px;
  margin-bottom: 8px;
}

.components-we-have, .components-to-do {
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  > li {
    list-style-type: decimal;
  }
}
</style>
