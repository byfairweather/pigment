<template>
  <p-grid>
    <p-grid-item class="width-12-all">1</p-grid-item>
    <p-grid-item class="width-12-all">
      <p-grid>
        <p-grid-item class="width-6-all">2.1</p-grid-item>
        <p-grid-item class="width-6-all">2.2</p-grid-item>
      </p-grid>
    </p-grid-item>
    <p-grid-item class="width-12-all">
      <p-grid>
        <p-grid-item class="width-6-all">
          <p-grid>
            <p-grid-item class="width-6-all">3.1.1</p-grid-item>
            <p-grid-item class="width-6-all">3.1.2</p-grid-item>
          </p-grid>
        </p-grid-item>
        <p-grid-item class="width-6-all">
          <p-grid>
            <p-grid-item class="width-6-all">3.2.1</p-grid-item>
            <p-grid-item class="width-6-all">3.2.2</p-grid-item>
          </p-grid>
        </p-grid-item>
      </p-grid>
    </p-grid-item>
  </p-grid>
</template>

<style lang="scss">
.grid-item {
  background-color: rgba(255, 0, 0, 0.25);
  background-clip: content-box;
  text-align: center;

  .grid-item {
    background-color: rgba(0, 0, 255, 0.25);

    .grid-item {
      background-color: rgba(255, 0, 0, 0.25);
    }
  }
}
</style>
