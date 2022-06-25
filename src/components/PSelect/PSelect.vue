<template>
  <div
    class="p-select"
    ref="textbox"
    role="combobox"
    @focusout="close()"
    @keydown.enter.exact.prevent.stop="toggle()"
    @keydown.esc.exact.prevent.stop="close()"
    @keydown.alt.down.prevent.stop="open()"
    @keydown.alt.up.prevent.stop="close()"
    @keydown.down.exact.prevent.stop="selectNextOption()"
    @keydown.up.exact.prevent.stop="selectPreviousOption()"
    @keypress.down.prevent.stop
    @keypress.up.prevent.stop
  >
    <PTextbox
      type="text"
      :modelValue="textboxValue"
      @update:modelValue="update($event)"
      :label="label"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :disabled="disabled"
      :error="error"
      @click="isOpen = !isOpen"
    >
      <template #suffix>
        <button class="chevron" tabindex="-1">
          <i class="fa-solid fa-chevron-down"></i>
        </button>
      </template>
    </PTextbox>
  </div>
  <PPopup v-model:open="isOpen" :anchor="textbox" position="fill down">
    <PBox class="p-select-dropdown">
      <PScrollView>
        <div class="p-select-options">
          <template v-for="(option, index) in filteredOptions" :key="index">
            <div
              :id="`${id}-${index}`"
              class="option"
              :class="{ selected: isHighlighted(option) }"
              :aria-selected="isHighlighted(option)"
              @click="select(option, true)"
              @mousedown.prevent
              role="option"
            >
              {{ display(option) }}
            </div>
          </template>
          <div class="option null" v-if="filteredOptions.length == 0">
            No results found
          </div>
        </div>
      </PScrollView>
    </PBox>
  </PPopup>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  PropType,
  ref,
  watch,
} from "vue";
import PBox from "../PBox/PBox.vue";
import PPopup from "../PPopup/PPopup.vue";
import PScrollView from "../PScrollView/PScrollView.vue";
import PTextbox from "../PTextbox/PTextbox.vue";

export default defineComponent({
  name: "p-select",
  components: { PBox, PPopup, PScrollView, PTextbox },
  props: {
    label: {
      type: String,
      required: false,
    },
    modelValue: {
      type: [String, Number, Object] as PropType<any>,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    display: {
      type: Function as PropType<(option: any) => string>,
      default: (option: any): string => option,
    },
    value: {
      type: Function as PropType<(option: any) => any>,
      default: (option: any): any => option,
    },
    placeholder: {
      type: String,
    },
    autocomplete: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
    },
  },
  setup(props, context) {
    const id = `p-select-${getCurrentInstance()!.uid}`;
    const textboxValue = ref("");
    const textbox = ref<HTMLElement>();
    const isOpen = ref(false);

    const selectedIndex = computed(() => {
      if (props.options) {
        return props.options.findIndex((option) => {
          return props.value(option) == props.modelValue;
        });
      }
    });

    const selectedOption = computed(() => {
      if (selectedIndex.value != undefined) {
        return props.options[selectedIndex.value];
      }
    });

    const filteredOptions = computed(() => {
      if (selectedOption.value || textboxValue.value == "") {
        return props.options;
      }

      const options = props.options.filter((o) => {
        const optionDisplay = props.display(o)?.toLowerCase();
        return optionDisplay.startsWith(textboxValue.value?.toLowerCase());
      });

      return options;
    });

    watch(
      () => props.modelValue,
      () => update(props.modelValue),
      { immediate: true }
    );

    function update(value: any): void {
      if (value) {
        for (const option of props.options) {
          if (props.display(option) == value || props.value(option) == value) {
            context.emit("update:modelValue", props.value(option));
            textboxValue.value = props.display(option);
            return;
          }
        }

        context.emit("update:modelValue", undefined);
        textboxValue.value = value;
        textboxValue.value != "" && !isOpen.value && open();
      }
    }

    function select(option: unknown, close = false): void {
      context.emit("update:modelValue", props.value(option));
      if (close) isOpen.value = false;
    }

    function selectNextOption(): void {
      const index = (selectedIndex.value ?? -1) + 1;
      index < props.options.length && select(props.options[index]);
    }

    function selectPreviousOption(): void {
      const index = (selectedIndex.value ?? 1) - 1;
      index >= 0 && select(props.options[index]);
    }

    function isHighlighted(option: unknown): boolean {
      if (selectedOption.value) {
        return props.display(option) == props.display(selectedOption.value);
      }

      return props.display(filteredOptions.value[0]) == props.display(option);
    }

    function open(): void {
      isOpen.value = true && !props.disabled;
    }

    function close(): void {
      if (!selectedOption.value) {
        //select(filteredOptions.value[0] ?? props.options[0]);
      }
      // isOpen.value = false;
    }

    function toggle(): void {
      isOpen.value ? close() : open();
    }

    return {
      id,
      textbox,
      textboxValue,
      isOpen,
      selectedIndex,
      selectedOption,
      filteredOptions,
      update,
      select,
      selectPreviousOption,
      selectNextOption,
      isHighlighted,
      open,
      close,
      toggle,
    };
  },
});
</script>
