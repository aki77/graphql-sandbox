import gql from 'graphql-tag';

const SUBSCRIBE_CHAT_ROOM_MESSAGE_WAS_CREATED = gql`
  subscription SubscribeChatRoomMessageWasCreated($chatRoomId: ID!) {
    chatRoomMessageWasCreated(chatRoomId: $chatRoomId) {
      chatRoomMessage {
        id
        content
        createdAt
      }
    }
  }
`;

export {SUBSCRIBE_CHAT_ROOM_MESSAGE_WAS_CREATED};
