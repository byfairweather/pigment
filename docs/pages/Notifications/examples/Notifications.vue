<template>
  <p-grid class="widths-12-all spacing-md-all">
    <p-grid-item>
      <p-notification class="primary" :open="true">
        Primary Notification
      </p-notification>
    </p-grid-item>
    <p-grid-item>
      <p-notification class="success" :open="true">
        Success Notification
      </p-notification>
    </p-grid-item>
    <p-grid-item>
      <p-notification class="warning" :open="true">
        Warning Notification
      </p-notification>
    </p-grid-item>
    <p-grid-item>
      <p-notification class="danger" :open="true">
        Danger Notification
      </p-notification>
    </p-grid-item>
  </p-grid>
</template>
