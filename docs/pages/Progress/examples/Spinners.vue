<template>
  <p-grid>
    <p-grid-item class="width-4-all">
      <p-progress-spinner class="sm" />
    </p-grid-item>
    <p-grid-item class="width-4-all">
      <p-progress-spinner class="md" />
    </p-grid-item>
    <p-grid-item class="width-4-all">
      <p-progress-spinner class="lg" />
    </p-grid-item>
    <p-grid-item class="width-3-all">
      <p-progress-spinner class="md primary" />
    </p-grid-item>
    <p-grid-item class="width-3-all">
      <p-progress-spinner class="md white" />
    </p-grid-item>
    <p-grid-item class="width-3-all">
      <p-progress-spinner class="md black" />
    </p-grid-item>
    <p-grid-item class="width-3-all">
      <p-progress-spinner class="md color text-danger" />
    </p-grid-item>
  </p-grid>
</template>

<style lang="scss" scoped>
.p-grid-item {
  height: 100px;
  position: relative;
}
</style>
