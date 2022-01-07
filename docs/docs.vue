<template>
  <h1>Pigment Docs</h1>
  <div class="layout">
    <div class="navigation">
      <ul>
        <li><router-link :to="'/styles/color'">Color</router-link></li>
        <li>
          <router-link :to="'/styles/typography'">Typography</router-link>
        </li>
      </ul>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Docs",
};
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
