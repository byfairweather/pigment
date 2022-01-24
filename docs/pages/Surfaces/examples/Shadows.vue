<template>
  <p-grid class="widths-2-all">
    <p-grid-item>
      <p-card class="shadow-xs">XS</p-card>
    </p-grid-item>
    <p-grid-item>
      <p-card class="shadow-sm">SM</p-card>
    </p-grid-item>
    <p-grid-item>
      <p-card class="shadow-md">MD</p-card>
    </p-grid-item>
    <p-grid-item>
      <p-card class="shadow-lg">LG</p-card>
    </p-grid-item>
    <p-grid-item>
      <p-card class="shadow-xl">XL</p-card>
    </p-grid-item>
  </p-grid>
</template>

<style lang="scss" scoped>
.p-grid-item > div {
  padding: 1em;
  text-align: center;
}
</style>
