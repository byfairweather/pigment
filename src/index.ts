import { Plugin } from "vue";

// Icons
import "@fortawesome/fontawesome-free/js/all.js";

// Components
import PAccordion from "./components/PAccordion/PAccordion.vue";
import PAccordionItem from "./components/PAccordion/PAccordionItem.vue";
import PApp from "./components/PApp/PApp.vue";
import PBox from "./components/PBox/PBox.vue";
import PButton from "./components/PButton/PButton.vue";
import PButtonGroup from "./components/PButton/PButtonGroup.vue";
import PCard from "./components/PCard/PCard.vue";
import PCheckbox from "./components/PCheckbox/PCheckbox.vue";
import PDialog from "./components/PDialog/PDialog.vue";
import PFooter from "./components/PFooter/PFooter.vue";
import PGrid from "./components/PGrid/PGrid.vue";
import PGridItem from "./components/PGrid/PGridItem.vue";
import PImage from "./components/PImage/PImage.vue";
import PImageCrop from "./components/PImageCrop/PImageCrop.vue";
import PImageGallery from "./components/PImageGallery/PImageGallery.vue";
import PMessenger from "./components/PMessenger/PMessenger.vue";
import PNavbar from "./components/PNavbar/PNavbar.vue";
import PNavbarDropdown from "./components/PNavbar/PNavbarDropdown.vue";
import PNavbarItem from "./components/PNavbar/PNavbarItem.vue";
import PNotification from "./components/PNotification/PNotification.vue";
import PNumberbox from "./components/PNumberbox/PNumberbox.vue";
import PPanel from "./components/PPanel/PPanel.vue";
import PPopup from "./components/PPopup/PPopup.vue";
import PProgressBar from "./components/PProgressBar/PProgressBar.vue";
import PProgressSpinner from "./components/PProgressSpinner/PProgressSpinner.vue";
import PScrollView from "./components/PScrollView/PScrollView.vue";
import PSelect from "./components/PSelect/PSelect.vue";
import PTabView from "./components/PTabView/PTabView.vue";
import PTab from "./components/PTabView/PTab.vue";
import PTextarea from "./components/PTextarea/PTextarea.vue";
import PTextbox from "./components/PTextbox/PTextbox.vue";
import PVueExample from "./components/PVueExample/PVueExample.vue";

// Scripts
export { default as Dialog } from "./components/PDialog";

export default {
  install: (app, options) => {
    app.component(PAccordion.name, PAccordion);
    app.component(PAccordionItem.name, PAccordionItem);
    app.component(PApp.name, PApp);
    app.component(PBox.name, PBox);
    app.component(PButton.name, PButton);
    app.component(PButtonGroup.name, PButtonGroup);
    app.component(PCard.name, PCard);
    app.component(PCheckbox.name, PCheckbox);
    app.component(PDialog.name, PDialog);
    app.component(PFooter.name, PFooter);
    app.component(PGrid.name, PGrid);
    app.component(PGridItem.name, PGridItem);
    app.component(PImage.name, PImage);
    app.component(PImageGallery.name, PImageGallery);
    app.component(PImageCrop.name, PImageCrop);
    app.component(PMessenger.name, PMessenger);
    app.component(PNavbar.name, PNavbar);
    app.component(PNavbarItem.name, PNavbarItem);
    app.component(PNavbarDropdown.name, PNavbarDropdown);
    app.component(PNotification.name, PNotification);
    app.component(PNumberbox.name, PNumberbox);
    app.component(PPanel.name, PPanel);
    app.component(PPopup.name, PPopup);
    app.component(PScrollView.name, PScrollView);
    app.component(PSelect.name, PSelect);
    app.component(PProgressBar.name, PProgressBar);
    app.component(PProgressSpinner.name, PProgressSpinner);
    app.component(PTabView.name, PTabView);
    app.component(PTab.name, PTab);
    app.component(PTextarea.name, PTextarea);
    app.component(PTextbox.name, PTextbox);
    app.component(PVueExample.name, PVueExample);
  },
} as Plugin;
