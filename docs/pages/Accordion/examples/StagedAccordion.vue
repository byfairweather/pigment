<template>
  <p-accordion #default="{ next, previous }" staged>
    <p-accordion-item label="Step 1">
      Hello World!
      <p-button-group>
        <p-button @click="next()">Next</p-button>
      </p-button-group>
    </p-accordion-item>
    <p-accordion-item label="Step 2">
      Hello Again!
      <p-button-group>
        <p-button @click="previous()">Previous</p-button>
        <p-button @click="next()">Next</p-button>
      </p-button-group>
    </p-accordion-item>
    <p-accordion-item label="Step 3">
      Anyone there?
      <p-button-group>
        <p-button @click="previous()">Previous</p-button>
      </p-button-group>
    </p-accordion-item>
  </p-accordion>
</template>
