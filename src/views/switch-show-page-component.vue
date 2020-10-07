<template>
  <switch-component v-model:active="activeComponent" />
  <code-block-component>
    &lt;switch-component
    <br />
    &nbsp;&nbsp;v-model:active=&quot;your-active-variable&quot;
    <br />
    &nbsp;&nbsp;type=&quot;button-type&quot;
    <br />
    &nbsp;&nbsp;mode=&quot;button-mode&quot;
    <br />
    /&gt;
  </code-block-component>

  <description-component>
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
      <li>
        <components-block-component>
          <switch-component v-model:active="activeDisable" disable />
          <switch-component
            v-model:active="activeDisable"
            mode="tick"
            disable
          />
        </components-block-component>
        <switch-component v-model:active="activeDisable" />
        <p>
          <strong><code>disable?: boolean</code>属性：</strong>可选，switch
          按钮是否可选。
        </p>
      </li>
    </ul>
  </description-component>
</template>

<script lang="ts">
import { ref } from 'vue';

import CodeBlockComponent from '../components/code-block-component.vue';

import DescriptionComponent from '../components/description-component.vue';
import SwitchComponent from '../components/switch-component.vue';
import ComponentsBlockComponent from '../components/components-block-component.vue';

export default {
  components: {
    SwitchComponent,
    ComponentsBlockComponent,
    CodeBlockComponent,
    DescriptionComponent,
  },
  setup() {
    const activeComponent = ref<boolean>(false);
    const activeTypeTiny = ref<boolean>(false);
    const activeTypeNormal = ref<boolean>(false);
    const activeMode = ref<boolean>(true);
    const activeDisable = ref<boolean>(false);
    return {
      activeComponent,
      activeMode,
      activeTypeTiny,
      activeTypeNormal,
      activeDisable,
    };
  },
};
</script>
