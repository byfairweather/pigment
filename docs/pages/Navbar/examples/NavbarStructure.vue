<template>
  <p-navbar>
    <template v-slot:logo>
      <p-navbar-item>Logo</p-navbar-item>
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
</template>
