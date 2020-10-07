<template>
  <div class="button-show-page-wrapper">
    <button-component>按钮</button-component>
    <div class="button-description">
      <button-component size="normal">按钮</button-component>
      <button-component size="large">按钮</button-component>
      <button-component type="secondary">按钮</button-component>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ButtonComponent from '../components/button-component.vue';

export default defineComponent({
  components: {
    ButtonComponent,
  },
});
</script>

<style scoped lang="scss">
.button-show-page-wrapper {
  width: 100%;
  margin: 40px 0;

  .button-description {
    width: 100%;
    margin-top: 40px;
  }
}
</style>
