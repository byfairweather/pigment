<template>
  <h2>Accordion</h2>
  <h3>Standard Accordion</h3>
  <p-vue-example :code="AccordionCode">
    <Accordion />
  </p-vue-example>
  <h3>Stepped Accordion</h3>
  <p-vue-example :code="SteppedAccordionCode">
    <SteppedAccordion />
  </p-vue-example>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AccordionCode from "inline:./examples/Accordion.vue";
import Accordion from "./examples/Accordion.vue";
import SteppedAccordionCode from "inline:./examples/SteppedAccordion.vue";
import SteppedAccordion from "./examples/SteppedAccordion.vue";

export default defineComponent({
  name: "Buttons",
  setup() {
    return { AccordionCode, SteppedAccordionCode };
  },
  components: { Accordion, SteppedAccordion },
});
</script>
