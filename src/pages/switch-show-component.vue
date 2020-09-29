<template>
  <switch-component v-model:active="active" />
  <h2>组件使用</h2>
  <code>
    &lt;switch-component v-model:active=&quot;your-variable&quot; /&gt;
  </code>
</template>

<script lang="ts">
import { ref } from 'vue';
import SwitchComponent from '../components/switch-component.vue';

export default {
  components: { SwitchComponent },
  setup() {
    const active = ref<boolean>(false);
    return {
      active,
    };
  },
};
</script>

<style lang="scss" scoped></style>
