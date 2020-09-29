<template>
  <div>
    <nav-bar />
    <router-view />
  </div>
</template>

<script lang="ts">
import NavBar from './components/nav-bar.vue';

export default {
  name: 'App',
  components: { NavBar },
  setup() {
    return {};
  },
};
</script>
