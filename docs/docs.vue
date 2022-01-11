<template>
  <h1>Pigment Docs</h1>
  <div class="layout">
    <div class="navigation">
      <ul>
        <li><router-link :to="'/styles/color'">Color</router-link></li>
        <li>
          <router-link :to="'/styles/typography'">Typography</router-link>
        </li>
        <li><router-link :to="'/layout/grid'">Grid</router-link></li>
      </ul>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { useRoute } from "vue-router";
// import test from "inline:./index.ts";

export default defineComponent({
  name: "Docs",
});
</script>

<style lang="scss">
.layout {
  display: flex;

  .navigation {
    flex-shrink: 0;
    width: 200px;
  }

  .content {
    flex-grow: 1;
  }
}
</style>
