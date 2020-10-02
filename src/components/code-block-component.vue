<template>
  <p class="code-block">
    <slot></slot>
  </p>
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
.code-block {
  display: block;
  padding: 24px 40px;
  margin: 16px 0;
  background: #243238;

  color: rgba(255, 255, 255, 0.87);
  font-size: 16px;
  font-weight: bold;
  font-family: monospace;
  text-align: left;
  line-height: 1.5;
}
</style>
