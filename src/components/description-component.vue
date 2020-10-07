<template>
  <div class="component-show-page-description-block">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
.component-show-page-description-block {
  width: 100%;
  margin: 40px auto;

  > ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    > li {
      width: 100%;
      padding-bottom: 16px;
      margin: 16px 0;
      border-bottom: 0.5px solid rgba(0, 0, 0, 0.12);

      display: flex;
      flex-direction: column;
      align-items: flex-start;

      > p {
        text-align: left;
        margin: 4px 0;
      }
    }
  }
}
</style>
