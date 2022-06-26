<template>
  <PBox class="p-messenger">
    <PScrollView>
      <div class="messages" ref="content">
        <div
          class="message"
          :class="message.isOwn ? 'sent' : 'received'"
          v-for="message in messages"
        >
          <div class="header">
            <span class="sender">{{ message.sender }}</span>
            <span class="date">{{ message.date }}</span>
          </div>
          {{ message.message }}
        </div>
      </div>
    </PScrollView>
    <div class="message-input">
      <PTextarea
        :lines="2"
        placeholder="Message"
        v-model="message"
        @keydown.enter.exact="sendMessage()"
      />
    </div>
  </PBox>
</template>

<script lang="ts">
import { defineComponent, nextTick, PropType, ref, watch } from "vue";
import PBox from "../PBox/PBox.vue";
import PScrollView from "../PScrollView/PScrollView.vue";
import PTextarea from "../PTextarea/PTextarea.vue";

export default defineComponent({
  name: "p-messenger",
  components: { PBox, PScrollView, PTextarea },
  props: {
    messages: {
      type: Array as PropType<
        {
          message: string;
          sender: string;
          isOwn: boolean;
          date: Date;
        }[]
      >,
      required: true,
    },
  },
  setup(props, context) {
    const message = ref("");
    const content = ref<HTMLDivElement>();

    watch([() => content.value], () => scrollToBottom(true));
    watch([() => props.messages], () => scrollToBottom());

    function scrollToBottom(force?: boolean): void {
      const scrollView = content.value?.closest(".p-scroll-view");
      if (!scrollView) return;

      const scrolledToEnd =
        scrollView.scrollHeight -
          scrollView.clientHeight -
          scrollView.scrollTop <=
        10;

      if (scrolledToEnd || force) {
        nextTick(() => {
          scrollView.scroll({
            top: scrollView.scrollHeight,
            behavior: force ? "auto" : "smooth",
          });
        });
      }
    }

    function sendMessage(): void {
      context.emit("message", message.value);
      message.value = "";
    }
    return {
      content,
      message,
      sendMessage,
    };
  },
});
</script>
