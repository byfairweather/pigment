<template>
  <p-accordion>
    <p-accordion-item :complete="true">
      <template #header>Item 1</template>
      Hello World!
    </p-accordion-item>
    <p-accordion-item :complete="false">
      <template #header>Item 2</template>
      Hello Again!
    </p-accordion-item>
    <p-accordion-item>
      <template #header>Item 3</template>
      Anyone there?
    </p-accordion-item>
  </p-accordion>
</template>
