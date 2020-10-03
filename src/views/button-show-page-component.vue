<template>
  <div class="button-show-page-wrapper">
    <button-component>按钮</button-component>
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
}
</style>
