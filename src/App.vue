<template>
  <div>
    <nav-bar-component />
    <router-view />
  </div>
</template>

<script lang="ts">
import NavBarComponent from './components/nav-bar/nav-bar-component.vue';

export default {
  components: { NavBarComponent },
  setup() {
    return {};
  },
};
</script>
