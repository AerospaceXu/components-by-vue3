<template>
  <div class="wrapper">
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
          <strong><code>active: boolean</code>属性</strong>：switch
          组件的开关值。
        </li>
        <li>
          <strong><code>type?: 'normal' | 'tiny'</code>属性</strong
          >：可选，switch 的按钮大小，正常大小与小号，默认为 normal。
          <switch-component v-model:active="activeTypeTiny" type="tiny" />
          <switch-component v-model:active="activeTypeNormal" type="normal" />
        </li>
        <li>
          <strong><code>mode?: 'tick'</code>属性：</strong>可选，switch
          按钮的模式。
          <switch-component v-model:active="activeMode" mode="tick" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import SwitchComponent from '../components/switch-component.vue';

export default {
  components: { SwitchComponent },
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
.wrapper {
  margin-top: 44px;
}

.switch-description {
  width: 80vw;
  margin: 24px auto;

  > ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    > li {
      text-align: left;
      margin: 8px 0;
      display: flex;
      align-items: center;
    }
  }
}
</style>
