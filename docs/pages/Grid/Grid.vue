<template>
  <h2>Grid</h2>
  <h3>Grid Sizes</h3>
  <p-vue-example :code="GridSizesCode">
    <GridSizes />
  </p-vue-example>
  <h3>Nested Grids</h3>
  <p-vue-example :code="NestedGridsCode">
    <NestedGrids />
  </p-vue-example>
  <h3>Grid Spacing</h3>
  <p-vue-example :code="GridSpacingCode">
    <GridSpacing />
  </p-vue-example>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GridSizesCode from "inline:./examples/GridSizes.vue";
import GridSizes from "./examples/GridSizes.vue";
import NestedGridsCode from "inline:./examples/NestedGrids.vue";
import NestedGrids from "./examples/NestedGrids.vue";
import GridSpacingCode from "inline:./examples/GridSpacing.vue";
import GridSpacing from "./examples/GridSpacing.vue";

export default defineComponent({
  name: "Grid",
  setup() {
    return { GridSizesCode, NestedGridsCode, GridSpacingCode };
  },
  components: { GridSizes, NestedGrids, GridSpacing },
});
</script>
