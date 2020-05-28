<template>
  <div>
    <p>{{ hello }}</p>
    <!-- <LikeCount id="1" />
    <LikeCount id="2" />-->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import gql from "graphql-tag";
import type { GetChatRoomMessagesTest } from "./types/GetChatRoomMessagesTest";
import LikeCount from "./LikeCount.vue";

type Data = {
  chatRoomMessages?: GetChatRoomMessagesTest['chatRoomMessages'];
};

export default Vue.extend({
  components: { LikeCount },
  apollo: {
    chatRoomMessages: gql`
      query GetChatRoomMessagesTest {
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
