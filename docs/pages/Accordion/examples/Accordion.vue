<template>
  <p-accordion :multiselect="true" :preselect="[0, 2]">
    <p-accordion-item label="Item 1">Hello World!</p-accordion-item>
    <p-accordion-item label="Item 2">Hello Again!</p-accordion-item>
    <p-accordion-item label="Item 3">
      <p-accordion>
        <p-accordion-item label="Subitem 1">Hello World!</p-accordion-item>
        <p-accordion-item label="Subitem 2">Hello Again!</p-accordion-item>
        <p-accordion-item label="Subitem 3">Anyone there?</p-accordion-item>
      </p-accordion>
    </p-accordion-item>
  </p-accordion>
</template>
