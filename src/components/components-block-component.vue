<template>
  <div class="component-block-wrapper">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.component-block-wrapper {
  min-width: 200px;
  margin: 8px 0;
  padding: 12px 24px;
  border: 0.5px solid rgba(0, 0, 0, 0.24);
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
