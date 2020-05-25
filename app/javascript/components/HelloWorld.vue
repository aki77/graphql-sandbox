<template>
  <p>{{ hello }}</p>
</template>

<script lang="ts">
import Vue from "vue";
import gql from "graphql-tag";
import type { GetChatRoomMessages_chatRoomMessages } from "./types/GetChatRoomMessages";

type Data = {
  chatRoomMessages?: GetChatRoomMessages_chatRoomMessages;
};

export default Vue.extend({
  apollo: {
    chatRoomMessages: gql`
      query GetChatRoomMessages {
        chatRoomMessages(chatRoomId: 1) {
          edges {
            node {
              content
            }
          }
        }
      }
    `
  },
  props: {
    hello: {
      type: String,
      default: "Hello World"
    }
  },
  data(): Data {
    return {
      chatRoomMessages: undefined
    };
  },
  created() {
    window.setTimeout(() => {
      if (!this.chatRoomMessages) return;

      console.log(this.chatRoomMessages.edges);
    }, 3000);
  }
});
</script>
