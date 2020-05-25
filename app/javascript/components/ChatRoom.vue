<template>
  <div>
    <p v-if="loading">Loading...</p>
    <ul v-else>
      <li
        v-for="chatRoomMessage in (chatRoomMessages || [])"
        :key="chatRoomMessage.id"
      >{{chatRoomMessage.content}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import gql from "graphql-tag";
import type { GetChatRoomMessages, GetChatRoomMessagesVariables } from "./types/GetChatRoomMessages";

type Data = {
  chatRoomMessages?: GetChatRoomMessages['chatRoomMessages'];
};

export default Vue.extend({
  apollo: {
    chatRoomMessages: {
      query: gql`
        query GetChatRoomMessages($chatRoomId: ID!) {
          chatRoomMessages(chatRoomId: $chatRoomId) {
            id
            content
            createdAt
          }
        }
      `,
      variables(): GetChatRoomMessagesVariables {
        return {
          chatRoomId: this.chatRoomId
        }
      }
    }
  },
  props: {
    chatRoomId: {
      type: String,
      required: true,
    }
  },
  data(): Data {
    return {
      chatRoomMessages: undefined
    };
  },
  computed: {
    loading(): boolean {
      return this.chatRoomMessages === undefined
    },
  },
  created() {
    window.setTimeout(() => {
      console.log(this.chatRoomMessages)
    }, 2000)
  }
});
</script>
