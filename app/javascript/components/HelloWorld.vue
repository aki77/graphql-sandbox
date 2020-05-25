<template>
  <p>{{ hello }}</p>
</template>

<script lang="ts">
import Vue from "vue";
import gql from "graphql-tag";
import type { GetChatRoomMessages } from "./types/GetChatRoomMessages";

type Data = {
  chatRoomMessages?: GetChatRoomMessages['chatRoomMessages'];
};

export default Vue.extend({
  apollo: {
    chatRoomMessages: gql`
      query GetChatRoomMessages {
        chatRoomMessages(chatRoomId: 1) {
          content
          createdAt
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

      console.log(this.chatRoomMessages);
    }, 3000);
  }
});
</script>
