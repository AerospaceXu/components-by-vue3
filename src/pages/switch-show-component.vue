<template>
  <switch-component v-model:active="active" />
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

<style lang="scss" scoped>

</style>
