import gql from 'graphql-tag';

const CHAT_ROOM_MESSAGES = gql`
  query ChatRoomMessages($chatRoomId: ID!) {
    chatRoomMessages(chatRoomId: $chatRoomId) {
      id
      content
      createdAt
    }
  }
`;

export {CHAT_ROOM_MESSAGES};
