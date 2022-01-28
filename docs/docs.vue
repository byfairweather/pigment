<template>
  <p-app>
    <p-navbar>
      <template v-slot:logo>
        <p-navbar-item
          ><h1 class="font-md margin-none">Pigment</h1></p-navbar-item
        >
      </template>
      <template v-slot:start>
        <p-navbar-item>Item 1</p-navbar-item>
        <p-navbar-item>Item 2</p-navbar-item>
        <p-navbar-item>Item 3</p-navbar-item>
      </template>
      <template v-slot:mobile>
        <p-navbar-item>Item 1</p-navbar-item>
        <p-navbar-item>Item 2</p-navbar-item>
        <p-navbar-item>Item 3</p-navbar-item>
      </template>
      <template v-slot:end>
        <p-navbar-item>Item 4</p-navbar-item>
      </template>
    </p-navbar>
    <p-panel>
      <div class="layout">
        <div class="navigation">
          <ul>
            <li><router-link :to="'/color'">Color</router-link></li>
            <li>
              <router-link :to="'/typography'">Typography</router-link>
            </li>
            <li><router-link :to="'/surfaces'">Surfaces</router-link></li>
            <li><router-link :to="'/grid'">Grid</router-link></li>
            <li><router-link :to="'/button'">Button</router-link></li>
            <li><router-link :to="'/card'">Card</router-link></li>
            <li><router-link :to="'/navbar'">Navbar</router-link></li>
            <li><router-link :to="'/spinner'">Spinner</router-link></li>
          </ul>
        </div>
        <div class="content">
          <router-view></router-view>
        </div>
      </div>
    </p-panel>
    <p-footer>
      <template #links> Links </template>
      <template #brand> Brand </template>
      <template #contact> Contact </template>
    </p-footer>
  </p-app>
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
    max-width: 700px;
  }
}
</style>
