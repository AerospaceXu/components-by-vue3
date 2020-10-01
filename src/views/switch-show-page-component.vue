<template>
  <h3>组件使用</h3>
  <code>
    &lt;switch-component v-model:active=&quot;your-active-variable&quot;
    type=&quot;button-type&quot; mode=&quot;button-mode&quot; /&gt;
  </code>
  <br />
  <switch-component v-model:active="activeComponent" />
  <div class="switch-description">
    <ul>
      <li>
        <p>
          <strong><code>active: boolean</code>属性</strong>：switch
          组件的开关值。
        </p>
      </li>
      <li>
        <components-block-component>
          <switch-component v-model:active="activeTypeTiny" type="tiny" />
          <switch-component v-model:active="activeTypeNormal" type="normal" />
        </components-block-component>
        <p>
          <strong><code>type?: 'normal' | 'tiny'</code></strong
          >属性：可选，switch 的按钮大小，正常大小与小号，默认为 normal。
        </p>
      </li>
      <li>
        <components-block-component>
          <switch-component v-model:active="activeMode" mode="tick" />
        </components-block-component>
        <p>
          <strong><code>mode?: 'tick'</code>属性：</strong>可选，switch
          按钮的模式。
        </p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

import SwitchComponent from '../components/switch-component.vue';
import ComponentsBlockComponent from '../components/components-block-component.vue';

export default {
  components: { SwitchComponent, ComponentsBlockComponent },
  setup() {
    const activeComponent = ref<boolean>(false);
    const activeTypeTiny = ref<boolean>(false);
    const activeTypeNormal = ref<boolean>(false);
    const activeMode = ref<boolean>(true);
    return {
      activeComponent,
      activeMode,
      activeTypeTiny,
      activeTypeNormal,
    };
  },
};
</script>

<style lang="scss" scoped>
h3 {
  text-align: left;
  font-size: 18px;
  margin-bottom: 8px;
}

.switch-description {
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

      text-align: left;

      > p {
        margin: 4px 0;
      }
    }
  }
}
</style>
