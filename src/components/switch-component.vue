<template>
  <button
    :class="['switch-background', active ? 'active' : '']"
    :style="switchStyle"
    @click.prevent="setActive"
  >
    <img
      v-if="mode === 'tick' && active"
      alt=""
      class="tick"
      src="../assets/icons/active.svg"
    />
    <span :class="['switch-fill', active ? 'active' : '']"></span>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  props: {
    active: Boolean,
    type: {
      validator(value: string): boolean {
        return ['normal', 'tiny'].indexOf(value) !== -1;
      },
      default: 'normal',
    },
    mode: {
      validator(value: string): boolean {
        return ['normal', 'tick'].indexOf(value) !== -1;
      },
      default: 'normal',
    },
  },
  setup(props, context) {
    const setActive = () => {
      context.emit('update:active', !props.active);
    };
    const switchStyle = computed(() => {
      return {
        transform: `scale(${props.type === 'tiny' ? 0.68 : 1})`,
      };
    });
    return {
      setActive,
      switchStyle,
    };
  },
});
</script>

<style lang="scss" scoped>
$active-color: #007aff;

$height: 22px;
$width: 44px;
$padding: 2px;

$fill-radius: $height - $padding * 2;
$padding-content: $width - $padding - $fill-radius;

.switch-background {
  position: relative;
  width: $width;
  height: $height;
  margin: 4px;

  transform-origin: left center;
  transition: 125ms ease-in;

  border-radius: $height / 2;

  background: rgba(0, 0, 0, 0.32);

  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  > .tick {
    width: $fill-radius;
    height: $fill-radius;

    position: absolute;
    left: $padding + 2px;
    top: $padding;
  }

  &.active {
    animation: switch-outside-animation-on ease 125ms;
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

    background: #ffffff;

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
  62% {
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
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12), 0 6px 16px rgba(0, 0, 0, 0.08),
      0 9px 28px rgba(0, 0, 0, 0.05);
  }
  100% {
    box-shadow: none;
  }
}
</style>
