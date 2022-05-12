<template>
  <h2>Notifications</h2>
  <p-vue-example :code="NotificationsCode">
    <Notifications />
  </p-vue-example>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NotificationsCode from "inline:./examples/Notifications.vue";
import Notifications from "./examples/Notifications.vue";

export default defineComponent({
  setup() {
    return { NotificationsCode };
  },
  components: { Notifications },
});
</script>
