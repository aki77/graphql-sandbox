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
import {
  SUBSCRIBE_CHAT_ROOM_MESSAGE_WAS_CREATED,
  CREATE_CHAT_ROOM_MESSAGE,
  CHAT_ROOM_MESSAGES
} from "../graphql";
import {
  SubscribeChatRoomMessageWasCreated,
  CreateChatRoomMessage,
  CreateChatRoomMessageVariables,
  ChatRoomMessages,
  ChatRoomMessagesVariables
} from "../graphql/types";

type Data = {
  chatRoomMessages?: ChatRoomMessages["chatRoomMessages"];
  content: string;
};

export default Vue.extend({
  apollo: {
    chatRoomMessages: {
      query: CHAT_ROOM_MESSAGES,
      variables(): ChatRoomMessagesVariables {
        return {
          chatRoomId: this.chatRoomId
        };
      },
      subscribeToMore: {
        document: SUBSCRIBE_CHAT_ROOM_MESSAGE_WAS_CREATED,
        updateQuery: (previousResult, { subscriptionData }) => {
          console.log("updateQuery", previousResult, subscriptionData.data);
          if (
            previousResult.chatRoomMessages.some(
              chatMessage =>
                chatMessage.id ===
                subscriptionData.data.chatRoomMessageWasCreated.chatRoomMessage
                  .id
            )
          ) {
            return previousResult;
          }

          return {
            chatRoomMessages: [
              ...previousResult.chatRoomMessages,
              subscriptionData.data.chatRoomMessageWasCreated.chatRoomMessage
            ]
          };
        },
        variables(): ChatRoomMessagesVariables {
          return {
            chatRoomId: this.chatRoomId
          };
        }
      }
    }
  },
  props: {
    chatRoomId: {
      type: String,
      required: true
    }
  },
  data(): Data {
    return {
      chatRoomMessages: undefined,
      content: ""
    };
  },
  computed: {
    loading(): boolean {
      return this.chatRoomMessages === undefined;
    }
  },
  methods: {
    async addMessage() {
      try {
        const result = await this.$apollo.mutate<CreateChatRoomMessage>({
          // Query
          mutation: CREATE_CHAT_ROOM_MESSAGE,
          // Parameters
          variables: {
            chatRoomId: this.chatRoomId,
            content: this.content
          },
          update: (store, { data }) => {
            if (!data?.createChatRoomMessage?.chatRoomMessage) return;

            const queryOptions = {
              query: CHAT_ROOM_MESSAGES,
              variables: { chatRoomId: this.chatRoomId }
            };
            const cache = store.readQuery<ChatRoomMessages>(queryOptions);
            if (!cache) return;

            cache.chatRoomMessages.push(
              data.createChatRoomMessage.chatRoomMessage
            );

            store.writeQuery({ ...queryOptions, data: cache });
          }
        });

        if (result.data?.createChatRoomMessage?.errors) {
          console.error(result.data.createChatRoomMessage.errors);
          return;
        }

        this.content = "";
      } catch (error) {
        console.error(error);
      }
    }
  }
});
</script>
