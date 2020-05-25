<template>
  <div>
    <p v-if="loading">Loading...</p>
    <ul v-else>
      <li
        v-for="chatRoomMessage in (chatRoomMessages || [])"
        :key="chatRoomMessage.id"
      >{{chatRoomMessage.content}}</li>
    </ul>
    <form @submit.prevent="addMessage">
      <input type="text" v-model="content" />
      <input type="submit" />
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import gql from "graphql-tag";
import type { GetChatRoomMessages, GetChatRoomMessagesVariables } from "./types/GetChatRoomMessages";
import { CreateChatRoomMessage } from "./types/CreateChatRoomMessage";

type Data = {
  chatRoomMessages?: GetChatRoomMessages['chatRoomMessages'];
  content: string
};

const GET_CHAT_ROOM_MESSAGES_QUERY = gql`
  query GetChatRoomMessages($chatRoomId: ID!) {
    chatRoomMessages(chatRoomId: $chatRoomId) {
      id
      content
      createdAt
    }
  }
`

export default Vue.extend({
  apollo: {
    chatRoomMessages: {
      query: GET_CHAT_ROOM_MESSAGES_QUERY,
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
      chatRoomMessages: undefined,
      content: '',
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
  },
  methods: {
    async addMessage() {
      const newContent = this.content
      this.content = ''

      try {
        const result = await this.$apollo.mutate<CreateChatRoomMessage>({
          // Query
          mutation: gql`mutation CreateChatRoomMessage($chatRoomId: ID!, $content: String!) {
            createChatRoomMessage(input: { chatRoomId: $chatRoomId, content: $content }) {
              chatRoomMessage {
                id
                content
                createdAt
              }
            }
          }`,
          // Parameters
          variables: {
            chatRoomId: this.chatRoomId,
            content: newContent,
          },
          update: (store, { data }) => {
            if (!data || !data.createChatRoomMessage) return;

            const queryOptions = { query: GET_CHAT_ROOM_MESSAGES_QUERY, variables: { chatRoomId: this.chatRoomId } }
            const cache = store.readQuery<GetChatRoomMessages>(queryOptions)
            if (!cache) return

            cache.chatRoomMessages.push(data.createChatRoomMessage.chatRoomMessage)
            store.writeQuery({...queryOptions, data: cache})
          },
        })
        console.log(result)
      } catch (error) {
        console.error(error)
        this.content = newContent
      }
    },
  },
});
</script>
