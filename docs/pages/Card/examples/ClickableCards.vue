<template>
  <p-grid class="widths-4-all">
    <p-grid-item>
      <router-link :to="'/'">
        <p-card @click="example()" class="clickable">
          <template v-slot:image>
            <img src="https://via.placeholder.com/150" />
          </template>
          <template v-slot:title>Title</template>
          <template v-slot:subtitle>Subtitle</template>
          <template v-slot:body>Body</template>
        </p-card>
      </router-link>
    </p-grid-item>
  </p-grid>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    function example(): Promise<void> {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });
    }

    return { example };
  },
});
</script>
