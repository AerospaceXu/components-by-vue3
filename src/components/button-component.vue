<template>
  <button class="button-wrapper" :class="classes[size]" @click="onClickButton">
    <slot></slot>
    <span v-if="isAnimating" class="animation-circle"></span>
  </button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { animateCreator } from '../lib/animateCreator';

const classes = {
  normal: 'normal-button',
  large: 'large-button',
};

export default defineComponent({
  props: {
    type: {
      type: String,
      default: 'primary',
      validator: (value: string) =>
        ['primary', 'secondary'].indexOf(value) !== -1,
    },
    size: {
      type: String,
      default: 'primary',
      validator: (value: string) => ['primary', 'large'].indexOf(value) !== -1,
    },
  },
  setup() {
    const isAnimating = ref<boolean>(false);
    const animate = animateCreator(195, isAnimating);
    const handleAnimation = () => {
      animate();
    };
    const onClickButton = () => {
      handleAnimation();
    };
    return {
      onClickButton,
      isAnimating,
      classes,
    };
  },
});
</script>

<style lang="scss" scoped>
.button-wrapper.normal-button {
  font-size: 16px;
  padding: 5px 16px;
}

.button-wrapper.large-button {
  font-size: 18px;
  padding: 8px 22px;
}

.button-wrapper {
  padding: 5px 16px;
  border-radius: 8px;
  background: #007aff;
  box-shadow: none;

  font-size: 16px;
  color: #ffffff;

  position: relative;

  transition: box-shadow 195ms ease;
  overflow: hidden;

  &:hover {
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.14), 0 1px 18px rgba(0, 0, 0, 0.12),
      0 3px 5px rgba(0, 0, 0, 0.2);
  }

  > .animation-circle {
    height: auto;
    width: 0;
    padding-top: 0;
    border-radius: 50%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background: rgba(255, 255, 255, 0.12);
    animation: button-click-animation 195ms ease-in-out;
  }
}

@keyframes button-click-animation {
  0% {
    width: 0;
    padding-top: 0;
    opacity: 1;
  }
  88% {
    width: 100%;
    padding-top: 100%;
    opacity: 1;
  }
  100% {
    width: 100%;
    padding-top: 100%;
    opacity: 0.3;
  }
}
</style>
