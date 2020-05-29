<template>
  <span v-if="chatRoom">いいね: {{ chatRoom.likeCount }}</span>
  <span v-else>loading...</span>
</template>

<script lang="ts">
import Vue from "vue";
import {getApolloClient} from '../lib/apollo';
import { CHAT_ROOM } from "../graphql";
import type { ChatRoom, ChatRoomVariables } from "../graphql/types";

type Data = {
  chatRoom?: ChatRoom['chatRoom'];
};

export default Vue.extend({
  props: {
    id: {
      type: String,
      required: true,
    }
  },
  data(): Data {
    return {
      chatRoom: undefined
    };
  },
  created() {
    this.load();
  },
  methods: {
    async load() {
      const result = await getApolloClient().query<ChatRoom, ChatRoomVariables>({ query: CHAT_ROOM, variables: { id: this.id }})
      this.chatRoom = result.data.chatRoom
    },
  },
});
</script>
