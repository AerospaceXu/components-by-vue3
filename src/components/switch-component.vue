<template>
  <button :class="['switch-background', active?'active':'']" @click="setActive">
    <span :class="['switch-fill', active?'active':'']"></span>
  </button>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  name: 'switch-component',
  setup() {
    const active = ref(false);
    const setActive = () => {
      active.value = !active.value;
    };
    return {
      active,
      setActive,
    };
  },
};
</script>

<style lang="scss" scoped>
$active-color: #007AFF;
$height: 22px;
$width: 44px;
$padding: 2px;

$fill-radius: $height - $padding * 2;
$padding-content: $width - $padding - $fill-radius;

.switch-background {
  position: relative;
  width: $width;
  height: $height;

  margin: 30px auto;
  transition: 125ms ease-in;

  border-radius: $height / 2;

  background: rgba(0, 0, 0, 0.32);

  &.active {
    animation: switch-outside-animation-on ease 175ms;
    background: $active-color;
  }

  > .switch-fill {
    position: absolute;
    top: $padding;

    right: $padding-content;
    left: $padding;

    width: $fill-radius;
    height: $fill-radius;
    transition: ease 175ms;
    border-radius: $fill-radius / 2;

    background: #FFFFFF;

    &.active {
      right: 2px;
      left: $padding-content;
      animation: switch-inside-animation-on ease-in 175ms;
    }
  }
}

@keyframes switch-inside-animation-on {
  0% {
    left: $padding;
    right: $padding-content;
    width: $fill-radius;
  }
  38.2% {
    left: $padding + 4px;
    right: $padding-content - 4px;
    width: $fill-radius + 8px;
  }
  100% {
    width: $fill-radius;
    right: $padding;
    left: $padding-content;
  }
}

@keyframes switch-outside-animation-on {
  0% {
    box-shadow: none;
  }
  50% {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12), 0 6px 16px rgba(0, 0, 0, 0.08), 0 9px 28px rgba(0, 0, 0, 0.05);
  }
  100% {
    box-shadow: none;
  }
}
</style>
