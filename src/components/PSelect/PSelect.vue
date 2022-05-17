<template>
  <div
    class="p-select"
    :class="{ disabled, error: error != undefined, open: isOpen }"
    @focusout="focusOut"
    @keydown.enter.exact.prevent.stop="toggle()"
    @keydown.esc.exact.prevent.stop="close()"
    @keydown.alt.down.prevent.stop="open()"
    @keydown.alt.up.prevent.stop="close()"
    @keydown.down.exact.prevent.stop="selectNextOption()"
    @keydown.up.exact.prevent.stop="selectPreviousOption()"
    @keypress.down.prevent.stop
    @keypress.up.prevent.stop
  >
    <div class="wrapper" ref="anchor">
      <div
        class="input"
        :id="id"
        role="combobox"
        :tabindex="disabled ? -1 : 0"
        @click="toggle()"
        aria-owns="quack"
        :aria-expanded="isOpen"
        :aria-active-item="selectedIndex != -1 && `${id}-${selectedIndex}`"
      >
        <span class="placeholder" v-if="placeholder && !selectedOption">
          {{ placeholder }}
        </span>
        <span v-else>
          {{ display(selectedOption) }}
        </span>
        <div class="chevron"></div>
      </div>
      <label class="label" :for="id" v-if="label">{{ label }}</label>
      <span class="error-text" v-if="error && !isOpen">{{ error }}</span>
    </div>
    <PPopup
      v-if="anchor"
      :anchor="anchor"
      position="fill down"
      v-model:open="isOpen"
    >
      <PBox class="p-select-options" id="quack">
        <template v-for="(option, index) in options" :key="index">
          <div
            :id="`${id}-${index}`"
            class="option"
            :class="{ selected: selectedIndex == index }"
            :aria-selected="selectedIndex == index"
            @click="select(option, true)"
            @mousedown.prevent
            role="option"
          >
            {{ display(option) }}
          </div>
        </template>
      </PBox>
    </PPopup>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  nextTick,
  ref,
} from "vue";
import PBox from "../PBox/PBox.vue";
import PPopup from "../PPopup/PPopup.vue";

export default defineComponent({
  name: "p-select",
  components: { PBox, PPopup },
  props: {
    label: {
      type: String,
      required: false,
    },
    modelValue: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    display: {
      type: Function,
      default: (option: any) => option,
    },
    value: {
      type: Function,
      default: (option: any) => option,
    },
    placeholder: {
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
    const anchor = ref<HTMLElement>();
    const isOpen = ref(false);
    const selectedOption = computed(() => {
      if (selectedIndex.value != undefined) {
        return props.options[selectedIndex.value];
      }
    });
    const selectedIndex = computed(() => {
      if (props.options) {
        return props.options.findIndex((option) => {
          return props.value(option) == props.modelValue;
        });
      }
    });

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

    function open(): void {
      isOpen.value = true;
    }

    function close(): void {
      isOpen.value = false;
    }

    function toggle(): void {
      isOpen.value = !isOpen.value;
    }

    function focusOut(event: FocusEvent): void {
      nextTick(() => {
        if (
          anchor.value &&
          !anchor.value.contains(event.relatedTarget as Node)
        ) {
          isOpen.value = false;
        }
      });
    }

    return {
      id,
      anchor,
      isOpen,
      selectedOption,
      selectedIndex,
      select,
      selectNextOption,
      selectPreviousOption,
      open,
      close,
      toggle,
      focusOut,
    };
  },
});
</script>
