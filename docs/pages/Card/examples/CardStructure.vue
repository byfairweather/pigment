<template>
  <p-grid class="widths-4-all">
    <p-grid-item>
      <p-card>
        <template v-slot:image>
          <img src="https://via.placeholder.com/150" />
        </template>
        <template v-slot:title>Title</template>
        <template v-slot:subtitle>Subtitle</template>
        <template v-slot:body>Body</template>
      </p-card>
    </p-grid-item>
    <p-grid-item class="flex align-stretch justify-stretch">
      <p-card>
        <template v-slot:image>
          <img src="https://via.placeholder.com/150" />
        </template>
        <template v-slot:title>Title</template>
        <template v-slot:subtitle>Subtitle</template>
      </p-card>
    </p-grid-item>
    <p-grid-item>
      <p-card>
        <template v-slot:image>
          <img src="https://via.placeholder.com/150" />
        </template>
        <template v-slot:title>Title</template>
        <template v-slot:body>Body</template>
      </p-card>
    </p-grid-item>
    <p-grid-item>
      <p-card>
        <template v-slot:image>
          <img src="https://via.placeholder.com/150" />
        </template>
        <template v-slot:subtitle>Subtitle</template>
        <template v-slot:body>Body</template>
      </p-card>
    </p-grid-item>
    <p-grid-item>
      <p-card>
        <template v-slot:image>
          <img src="https://via.placeholder.com/150" />
        </template>
        <template v-slot:title>Title</template>
      </p-card>
    </p-grid-item>
    <p-grid-item>
      <p-card>
        <template v-slot:image>
          <img src="https://via.placeholder.com/150" />
        </template>
        <template v-slot:body>Body</template>
      </p-card>
    </p-grid-item>
  </p-grid>
</template>
