import { Plugin } from "vue";

// Components
import PButton from "./components/PButton/PButton.vue";
import PCard from "./components/PCard/PCard.vue";
import PGrid from "./components/PGrid/PGrid.vue";
import PGridItem from "./components/PGrid/PGridItem.vue";
import PSpinner from "./components/PSpinner/PSpinner.vue";
import PTabView from "./components/PTabView/PTabView.vue";
import PTab from "./components/PTabView/PTab.vue";
import PVueExample from "./components/PVueExample/PVueExample.vue";

export default {
  install: (app, options) => {
    // TODO: Can we delegate this to the component index.ts files?
    app.component(PButton.name, PButton);
    app.component(PCard.name, PCard);
    app.component(PGrid.name, PGrid);
    app.component(PGridItem.name, PGridItem);
    app.component(PSpinner.name, PSpinner);
    app.component(PTabView.name, PTabView);
    app.component(PTab.name, PTab);
    app.component(PVueExample.name, PVueExample);
  },
} as Plugin;
