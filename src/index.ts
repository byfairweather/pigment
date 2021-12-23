import { Plugin } from "vue";
import Example from "./components/Example.vue";
import "./styles/styles.scss";

export default {
  install: (app, options) => {
    app.component(Example.name, Example);
  },
} as Plugin;
