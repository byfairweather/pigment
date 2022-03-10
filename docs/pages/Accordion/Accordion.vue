<template>
  <h2>Accordion</h2>
  <h3>Standard Accordion</h3>
  <p-vue-example :code="AccordionCode">
    <Accordion />
  </p-vue-example>
  <h3>Staged Accordion</h3>
  <p-vue-example :code="StagedAccordionCode">
    <StagedAccordion />
  </p-vue-example>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AccordionCode from "inline:./examples/Accordion.vue";
import Accordion from "./examples/Accordion.vue";
import StagedAccordionCode from "inline:./examples/StagedAccordion.vue";
import StagedAccordion from "./examples/StagedAccordion.vue";

export default defineComponent({
  name: "Buttons",
  setup() {
    return { AccordionCode, StagedAccordionCode };
  },
  components: { Accordion, StagedAccordion },
});
</script>
