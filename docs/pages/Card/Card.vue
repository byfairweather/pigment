<template>
  <h2>Card</h2>
  <h3>Card Structure</h3>
  <p-vue-example :code="CardStructureCode">
    <CardStructure />
  </p-vue-example>
  <h3>Clickable Cards</h3>
  <p-vue-example :code="ClickableCardsCode">
    <ClickableCards />
  </p-vue-example>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardStructureCode from "inline:./examples/CardStructure.vue";
import CardStructure from "./examples/CardStructure.vue";
import ClickableCardsCode from "inline:./examples/ClickableCards.vue";
import ClickableCards from "./examples/ClickableCards.vue";

export default defineComponent({
  name: "Buttons",
  setup() {
    return { CardStructureCode, ClickableCardsCode };
  },
  components: { CardStructure, ClickableCards },
});
</script>
