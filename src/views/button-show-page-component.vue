<template>
  <div class="button-show-page-wrapper">
    <button-component>按钮</button-component>
    <code-block-component>
      &lt;button-component size="normal" type="normal"&gt;
      <br />
      &nbsp;&nbsp;按钮
      <br />
      &lt;/button-component&gt;
    </code-block-component>
    <description-component>
      <ul>
        <li>
          <p>
            <strong><code>size: string</code>属性</strong
            >：按钮的大小，目前有两种大小，普通和较大。
          </p>
          <p>
            分别对应 <code>size='normal'</code> 与 <code>size='large'</code>
          </p>
          <components-block-component>
            <button-component size="normal">按钮</button-component>
            <button-component size="large">按钮</button-component>
          </components-block-component>
        </li>
        <li>
          <p>
            <strong><code>type: string</code>属性</strong
            >按钮的样式，目前提供三种样式，重要按钮、一般按钮、链接
          </p>
          <components-block-component>
            <button-component type="secondary">按钮</button-component>
          </components-block-component>
        </li>
      </ul>
    </description-component>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import CodeBlockComponent from '../components/code-block-component.vue';
import DescriptionComponent from '../components/description-component.vue';
import ComponentsBlockComponent from '../components/components-block-component.vue';
import ButtonComponent from '../components/button-component.vue';

export default defineComponent({
  components: {
    ButtonComponent,
    DescriptionComponent,
    CodeBlockComponent,
    ComponentsBlockComponent,
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
