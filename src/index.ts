import { Plugin } from "vue";

// Components
import PApp from "./components/PApp/PApp.vue";
import PButton from "./components/PButton/PButton.vue";
import PBox from "./components/PBox/PBox.vue";
import PCheckbox from "./components/PCheckbox/PCheckbox.vue";
import PCard from "./components/PCard/PCard.vue";
import PFooter from "./components/PFooter/PFooter.vue";
import PGrid from "./components/PGrid/PGrid.vue";
import PGridItem from "./components/PGrid/PGridItem.vue";
import PNavbar from "./components/PNavbar/PNavbar.vue";
import PNavbarDropdown from "./components/PNavbar/PNavbarDropdown.vue";
import PNavbarItem from "./components/PNavbar/PNavbarItem.vue";
import PPanel from "./components/PPanel/PPanel.vue";
import PPopup from "./components/PPopup/PPopup.vue";
import PSelect from "./components/PSelect/PSelect.vue";
import PSpinner from "./components/PSpinner/PSpinner.vue";
import PTabView from "./components/PTabView/PTabView.vue";
import PTab from "./components/PTabView/PTab.vue";
import PTextarea from "./components/PTextarea/PTextarea.vue";
import PTextbox from "./components/PTextbox/PTextbox.vue";
import PVueExample from "./components/PVueExample/PVueExample.vue";

export default {
  install: (app, options) => {
    // TODO: Can we delegate this to the component index.ts files?
    app.component(PApp.name, PApp);
    app.component(PButton.name, PButton);
    app.component(PBox.name, PBox);
    app.component(PCard.name, PCard);
    app.component(PCheckbox.name, PCheckbox);
    app.component(PFooter.name, PFooter);
    app.component(PGrid.name, PGrid);
    app.component(PGridItem.name, PGridItem);
    app.component(PNavbar.name, PNavbar);
    app.component(PNavbarItem.name, PNavbarItem);
    app.component(PNavbarDropdown.name, PNavbarDropdown);
    app.component(PPanel.name, PPanel);
    app.component(PPopup.name, PPopup);
    app.component(PSelect.name, PSelect);
    app.component(PSpinner.name, PSpinner);
    app.component(PTabView.name, PTabView);
    app.component(PTab.name, PTab);
    app.component(PTextarea.name, PTextarea);
    app.component(PTextbox.name, PTextbox);
    app.component(PVueExample.name, PVueExample);
  },
} as Plugin;
