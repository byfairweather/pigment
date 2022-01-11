<template>
  <div class="p code-example">
    <div class="example">
      <slot></slot>
    </div>
    <!-- TODO: Replace the section below with a proper tab control -->
    <ul class="tabs">
      <li v-if="template">
        <button @click="switchTabs('Template')">Template</button>
      </li>
      <li v-if="script">
        <button @click="switchTabs('Script')">Script</button>
      </li>
      <li v-if="style">
        <button @click="switchTabs('Style')">Style</button>
      </li>
    </ul>
    <div class="code">
      <pre v-show="tab == 'Template'">
        <code class="language-html">{{template}}</code>
      </pre>
      <pre v-show="tab == 'Script'">
        <code class="language-javascript ">{{script}}</code>
      </pre>
      <pre v-show="tab == 'Style'">
        <code class="language-css">{{style}}</code>
      </pre>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import Prism from "prismjs";
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js";

export default defineComponent({
  name: "Color",
  props: {
    code: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const tab = ref<string>();
    const template = ref<string>();
    const script = ref<string>();
    const style = ref<string>();

    template.value = extractCode("template");
    script.value = extractCode("script");
    style.value = extractCode("style");

    watch(
      [() => props.code, () => tab.value],
      () => {
        if (props.code) {
          Prism.highlightAll();
        }
      },
      { immediate: true }
    );

    function switchTabs(to: string): void {
      tab.value = tab.value == to ? undefined : to;
    }

    function extractCode(tag: String): string | undefined {
      const regex = new RegExp(`<${tag}.*?>(.*)<\/${tag}>`, "gs");
      const code = regex.exec(props.code);

      if (code?.[1]) {
        return Prism.plugins.NormalizeWhitespace.normalize(code?.[1]).trim();
      }
    }

    return { tab, template, script, style, switchTabs };
  },
});
</script>

<style lang="scss">
@use "../styles/pigment.scss" as *;

.code-example {
  border: 1px solid $color-grey-400;
  border-radius: 8px;
  margin-bottom: 1em;
  max-width: 700px;

  .tabs {
    border-top: 1px solid $color-grey-400;
    list-style: none;
    margin: 0;
    padding: 0 0.25em;

    li {
      display: inline-block;

      margin: 0.5em 0.25em;

      button {
        background-color: $color-grey-400;
        border-radius: 8px;
        padding: 0.5em 1em;
      }
    }
  }

  .example {
    padding: 1em;
  }

  .code {
    background: $color-grey-200;

    color: $color-grey-800;
    font-family: monospace;
    line-height: 1.5;
    overflow: auto;
    padding-top: 0;
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
    transition: height 1s ease;

    pre {
      border-top: 1px solid $color-grey-400;
      padding: 1em;
    }

    .token.cdata,
    .token.comment,
    .token.doctype,
    .token.prolog {
      color: $color-success-500;
    }
    .token.punctuation {
      color: $color-grey-600;
    }
    .token.namespace {
      opacity: 0.7;
    }
    .token.constant,
    .token.deleted,
    .token.property,
    .token.symbol,
    .token.tag {
      color: $color-primary-400;
    }
    .token.boolean,
    .token.number {
      color: $color-primary-400;
    }
    .token.attr-name,
    .token.builtin,
    .token.char,
    .token.inserted,
    .token.selector,
    .token.string {
      color: $color-grey-700;
    }
    .language-css .token.string,
    .style .token.string,
    .token.entity,
    .token.operator,
    .token.url,
    .token.variable {
      color: $color-primary-400;
    }
    .token.atrule,
    .token.attr-value,
    .token.class-name,
    .token.function {
      color: $color-primary-400;
    }
    .token.keyword {
      color: $color-primary-400;
    }
    .token.important,
    .token.regex {
      color: $color-danger-500;
    }
    .token.bold,
    .token.important {
      font-weight: 700;
    }
    .token.italic {
      font-style: italic;
    }
    .token.entity {
      cursor: help;
    }
  }
}
</style>
