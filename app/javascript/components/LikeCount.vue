<template>
  <span v-if="chatRoom">いいね: {{ chatRoom.likeCount }}</span>
  <span v-else>loading...</span>
</template>

<script lang="ts">
import Vue from "vue";
import gql from "graphql-tag";
import {getApolloClient} from '../lib/apollo';
import type { GetChatRoom, GetChatRoomVariables } from "./types/GetChatRoom";

type Data = {
  chatRoom?: GetChatRoom['chatRoom'];
};

const apolloClient = getApolloClient()

const GET_CHAT_ROOM = gql`
  query GetChatRoom($id: ID!) {
    chatRoom(id: $id) {
      likeCount
    }
  }
`

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
      const result = await apolloClient.query<GetChatRoom>({ query: GET_CHAT_ROOM, variables: { id: this.id }})
      this.chatRoom = result.data.chatRoom
    },
  },
});
</script>
