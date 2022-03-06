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
      <p-progress-spinner class="md text-primary" />
    </p-grid-item>
    <p-grid-item class="width-3-all">
      <p-progress-spinner class="md text-success" />
    </p-grid-item>
    <p-grid-item class="width-3-all">
      <p-progress-spinner class="md text-warning" />
    </p-grid-item>
    <p-grid-item class="width-3-all">
      <p-progress-spinner class="md text-danger" />
    </p-grid-item>
  </p-grid>
</template>

<style lang="scss" scoped>
.p-grid-item {
  height: 100px;
  position: relative;
}
</style>
