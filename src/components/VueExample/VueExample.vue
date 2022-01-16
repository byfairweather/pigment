<template>
  <div class="p vue-example">
    <div class="example">
      <slot></slot>
    </div>
    <div class="code" ref="code" v-if="$props.code">
      <TabView @change="formatCode()" :collapsible="true" :open="false">
        <Tab label="Template" v-if="template">
          <pre>
            <code class="language-html">{{template}}</code>
          </pre>
        </Tab>
        <Tab label="Script" v-if="script">
          <pre>
            <code class="language-javascript ">{{script}}</code>
          </pre>
        </Tab>
        <Tab label="Style" v-if="style">
          <pre>
            <code class="language-css">{{style}}</code>
          </pre>
        </Tab>
      </TabView>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Prism from "prismjs";
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js";
import TabView from "../TabView/TabView.vue";
import Tab from "../TabView/Tab.vue";

export default defineComponent({
  name: "p-vue-example",
  props: {
    code: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    const code = ref<HTMLDivElement>();
    const template = ref(extractCode("template"));
    const script = ref(extractCode("script"));
    const style = ref(extractCode("style"));

    function extractCode(tag: String): string | undefined {
      if (props.code) {
        const regex = new RegExp(`<${tag}.*?>(.*)<\/${tag}>`, "gs");
        const code = regex.exec(props.code);
        if (code?.[1]) {
          return Prism.plugins.NormalizeWhitespace.normalize(code?.[1]).trim();
        }
      }
    }

    function formatCode(): void {
      code.value && Prism.highlightAllUnder(code.value);
    }

    return { code, template, script, style, formatCode };
  },
  components: { TabView, Tab },
});
</script>
